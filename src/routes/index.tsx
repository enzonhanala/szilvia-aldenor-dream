import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Copy,
  Download,
  Heart,
  MapPin,
  Phone,
  Search,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import heroAsset from "@/assets/szilvia-aldenor-hero.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { GUESTS, searchGuests, type Guest } from "@/lib/guests";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Szilvia & Aldenor — 24 de outubro de 2026" },
      {
        name: "description",
        content: "Convite de casamento de Szilvia & Aldenor no Hotel Polana, Maputo.",
      },
      { property: "og:title", content: "Szilvia & Aldenor — O nosso casamento" },
      {
        property: "og:description",
        content: "Celebre connosco no dia 24 de outubro de 2026, no Hotel Polana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WeddingInvitation,
});

const targetDate = new Date("2026-10-24T15:00:00+02:00").getTime();

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const difference = Math.max(0, targetDate - now);
  return {
    complete: difference === 0,
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 text-center md:mb-14">
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-gold">{eyebrow}</p>}
      <h2 className="font-display text-4xl font-normal text-chocolate md:text-6xl">{children}</h2>
      <span className="mx-auto mt-5 block h-px w-16 bg-gold" aria-hidden="true" />
    </div>
  );
}

function EnvelopeIntro({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const open = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 1750);
  };
  return (
    <div className={`envelope-screen ${opening ? "is-opening" : ""}`}>
      <div className="gold-dust" aria-hidden="true" />
      <button className="envelope-action" type="button" onClick={open} aria-label="Abrir convite de Szilvia e Aldenor">
        <div className="envelope-wrap" aria-hidden="true">
          <div className="invitation-card">
            <span>S & A</span>
            <small>24 · 10 · 2026</small>
          </div>
          <div className="envelope-back" />
          <div className="envelope-front">
            <p className="font-display">Szilvia <em>&</em> Aldenor</p>
            <span>Você está convidado</span>
          </div>
          <div className="envelope-flap" />
          <div className="wax-seal"><span>S&A</span></div>
        </div>
        <span className="open-hint">Toque para abrir</span>
      </button>
    </div>
  );
}

const STORAGE_KEY = "sa-rsvp-confirmed-guest";
const WHATSAPP_NUMBER = "258822532960";

function RsvpSection() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Guest | null>(null);
  const [confirmed, setConfirmed] = useState<Guest | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const guest = GUESTS.find((item) => item.name === stored);
      if (guest) setConfirmed(guest);
    } catch {
      /* ignore */
    }
  }, []);

  const results = useMemo(() => (selected ? [] : searchGuests(query)), [query, selected]);
  const noMatch = !selected && query.trim().length >= 2 && results.length === 0;

  const confirmPresence = () => {
    if (!selected) return;
    setConfirmed(selected);
    try {
      window.localStorage.setItem(STORAGE_KEY, selected.name);
    } catch {
      /* ignore */
    }
    toast.success("Presença confirmada", { description: "Obrigado por celebrar este dia connosco." });
  };

  const declinePresence = () => {
    if (!selected) return;
    const message = `Olá! Sou ${selected.name} e gostaria de informar que não poderei comparecer ao casamento no dia 24 de Outubro de 2026 às 15:00h.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  };

  if (confirmed) {
    const tableMatch = confirmed.table.match(/^Mesa\s+(\d+)\s+—\s+(.+)$/);
    const tableNumber = tableMatch?.[1]?.padStart(2, "0") ?? confirmed.table;
    const tableName = tableMatch?.[2] ?? "";
    const downloadPdf = async () => {
      try {
        const { downloadAccessPass } = await import("@/lib/access-pass-pdf");
        await downloadAccessPass(confirmed);
        toast.success("Cartão de acesso descarregado");
      } catch {
        toast.error("Não foi possível gerar o PDF. Tente novamente.");
      }
    };

    return (
      <div className="pass-stage">
        <p className="pass-confirmed"><Check aria-hidden="true" /> Presença confirmada</p>
        <article className="pass-card" aria-label={`Cartão de acesso de ${confirmed.name}`}>
          <span className="pass-corner tl" aria-hidden="true" />
          <span className="pass-corner tr" aria-hidden="true" />
          <span className="pass-corner bl" aria-hidden="true" />
          <span className="pass-corner br" aria-hidden="true" />
          <header className="pass-header">
            <p className="pass-couple">Szilvia <em>&amp;</em> Aldenor</p>
            <span className="pass-ornament" aria-hidden="true"><i /><b>◆</b><i /></span>
            <h3 className="pass-title">Cartão de Acesso</h3>
          </header>
          <section className="pass-guest">
            <p className="pass-label">Convidado</p>
            <p className="pass-name">
              {confirmed.name.split(" & ").map((part, index, all) => (
                <span key={part}>
                  {part}
                  {index < all.length - 1 && <em> &amp; </em>}
                </span>
              ))}
            </p>
          </section>
          <div className="pass-details">
            <section className="pass-table">
              <p className="pass-label">Mesa</p>
              <strong>{tableNumber}</strong>
              {tableName && <span>{tableName}</span>}
            </section>
            <section className="pass-code">
              <span>Código de acesso</span>
              <strong>{confirmed.code}</strong>
            </section>
          </div>
          <div className="pass-meta">
            <p>24 de Outubro de 2026</p>
            <span aria-hidden="true" />
            <p>15:00</p>
            <span aria-hidden="true" />
            <p>Hotel Polana</p>
          </div>
        </article>
        <Button size="lg" className="gold-button pass-download" onClick={downloadPdf}>
          <Download /> Baixar cartão em PDF
        </Button>
        <p className="pass-hint">Guarde este cartão e apresente-o na entrada do evento.</p>
      </div>
    );
  }

  return (
    <div className="rsvp-form">
      <label>
        Pesquise o seu nome
        <span className="rsvp-search">
          <Search aria-hidden="true" />
          <Input
            value={selected ? selected.name : query}
            onChange={(event) => {
              setSelected(null);
              setQuery(event.target.value);
            }}
            placeholder="Escreva o seu primeiro nome"
            autoComplete="off"
            inputMode="text"
            aria-label="Pesquisar nome do convidado"
          />
        </span>
      </label>

      {results.length > 0 && (
        <ul className="guest-results" role="listbox" aria-label="Convidados encontrados">
          {results.map((guest) => (
            <li key={guest.code}>
              <Button type="button" variant="ghost" onClick={() => setSelected(guest)}>
                <span>{guest.name}</span><ChevronRight aria-hidden="true" />
              </Button>
            </li>
          ))}
        </ul>
      )}

      {noMatch && (
        <p className="guest-missing">
          Caso não encontre o seu nome na lista, entre em contacto com os números <a href="tel:+258822532960">+258 822 532 960</a> ou <a href="tel:+8615701329252">+86 157 013 29252</a>.
        </p>
      )}

      {selected && (
        <div className="guest-selected">
          <p><span>Convidado selecionado</span><strong>{selected.name}</strong></p>
          <Button size="lg" className="gold-button w-full" onClick={confirmPresence}>Confirmar presença</Button>
          <Button size="lg" variant="outline" className="decline-button w-full" onClick={declinePresence}>
            Não poderei comparecer
          </Button>
        </div>
      )}
    </div>
  );
}

function WeddingInvitation() {
  const [opened, setOpened] = useState(false);
  const countdown = useCountdown();

  const copyPhone = async () => {
    await navigator.clipboard.writeText("870532960");
    toast.success("Número copiado");
  };


  if (!opened) return <EnvelopeIntro onOpen={() => setOpened(true)} />;

  return (
    <main className="invite-page animate-invite">
      <section className="hero" aria-label="Szilvia e Aldenor">
        <img src={heroAsset.url} alt="Szilvia e Aldenor no Hotel Polana ao pôr do sol" width={1280} height={1600} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p>Com a bênção de Deus</p>
          <h1>Szilvia <span>&</span> Aldenor</h1>
          <span className="hero-line" aria-hidden="true" />
          <time dateTime="2026-10-24">24 de outubro de 2026</time>
        </div>
        <span className="scroll-mark" aria-hidden="true" />
      </section>

      <section className="verse-section section-pad">
        <div className="verse-box">
          <span className="verse-corner tl" aria-hidden="true" />
          <span className="verse-corner tr" aria-hidden="true" />
          <span className="verse-corner bl" aria-hidden="true" />
          <span className="verse-corner br" aria-hidden="true" />
          <span className="verse-mark">“</span>
          <div className="verse-ornament" aria-hidden="true">
            <svg viewBox="0 0 12 12" fill="currentColor"><path d="M6 0l6 6-6 6-6-6z" /></svg>
          </div>
          <blockquote>
            Assim, permanecem agora estes três:<br />
            a fé, a esperança e o amor.<br />
            O maior deles, porém, é o amor
          </blockquote>
          <cite>Coríntios 13:13</cite>
        </div>
      </section>

      <section className="parents section-pad">
        <SectionTitle>Com a bênção de Deus<br />e de seus pais</SectionTitle>
        <div className="parents-list font-display">
          <div><p>Carlos Chume</p><p>Carolina Chume</p></div>
          <span className="parents-separator" aria-hidden="true">✦</span>
          <div><p>Albertina Jaime</p><p>Tomáz Quefasse</p></div>
        </div>
      </section>

      <section className="invitation section-pad">
        <p className="script-word">juntos</p>
        <SectionTitle eyebrow="Celebração">O Convite</SectionTitle>
        <p className="invitation-copy"><strong>Szilvia & Aldenor</strong> convidam você<br className="hidden sm:block" /> para o nosso casamento.</p>
      </section>

      <section className="date-section section-pad">
        <div className="date-display" aria-label="24 de outubro de 2026 às 15 horas">
          <span className="date-day">24</span><i />
          <span className="date-month">OUTUBRO</span><i />
          <span className="date-year">2026</span><i />
          <span className="date-time">15:00</span>
        </div>
        {countdown.complete ? (
          <p className="big-day">O grande dia chegou!</p>
        ) : (
          <div className="countdown" aria-label="Contagem decrescente para o casamento">
            {[
              [countdown.days, "DIAS"], [countdown.hours, "HORAS"],
              [countdown.minutes, "MINUTOS"], [countdown.seconds, "SEGUNDOS"],
            ].map(([value, label]) => (
              <div key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div>
            ))}
          </div>
        )}
      </section>

      <section className="agenda section-pad">
        <SectionTitle eyebrow="24 · 10 · 2026">Agenda do Dia</SectionTitle>
        <div className="agenda-grid">
          <article className="agenda-card">
            <span className="card-number">01</span>
            <CalendarDays aria-hidden="true" />
            <h3>Cerimónia Civil</h3>
            <p className="event-time"><Clock3 /> 15:00</p>
            <p className="event-place"><MapPin /> Hotel Polana</p>
            <p>Um momento especial para celebrar a união dos noivos.</p>
          </article>
          <article className="agenda-card">
            <span className="card-number">02</span>
            <CalendarDays aria-hidden="true" />
            <h3>Copo d’Água</h3>
            <p className="event-time"><Clock3 /> 16:00</p>
            <p className="event-place"><MapPin /> Hotel Polana</p>
            <p>Um momento para celebrar, brindar e compartilhar esta nova etapa com familiares e amigos.</p>
          </article>
        </div>
      </section>

      <section className="location section-pad">
        <MapPin className="location-icon" aria-hidden="true" />
        <SectionTitle>Onde será</SectionTitle>
        <h3>Hotel Polana</h3>
        <p>Maputo, Moçambique</p>
        <Button asChild size="lg" className="gold-button">
          <a href="https://www.google.com/maps/search/?api=1&query=Hotel+Polana+Maputo" target="_blank" rel="noreferrer"><MapPin /> Ver localização</a>
        </Button>
      </section>

      <section className="dress-code section-pad">
        <div className="dress-heading"><span /><p>Dress Code</p><span /></div>
        <h2>A paleta</h2>
        <p className="dress-copy">Escolha uma das cores da nossa paleta e celebre este dia conosco.</p>
        <div className="swatches">
          {[
            ["ROXO", "swatch-purple"], ["MAGENTA", "swatch-magenta"], ["ROSA-CHOQUE", "swatch-pink"],
            ["LARANJA-CLARO", "swatch-lightorange"], ["VERMELHO-ALARANJADO", "swatch-redorange"], ["LARANJA", "swatch-orange"],
            ["VERDE-ESCURO", "swatch-green"], ["AZUL", "swatch-blue"],
          ].map(([name, color], index) => (
            <div className={`swatch-item ${index === 6 ? "swatch-row-last" : ""}`} key={name}>
              <span className={`swatch ${color}`} aria-label={name} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rsvp section-pad">
        <SectionTitle eyebrow="R.S.V.P.">Confirme sua presença</SectionTitle>
        <p className="section-intro">Será uma alegria ter você conosco neste dia tão especial.</p>
        <RsvpSection />

      </section>

      <section className="gifts section-pad">
        <Heart className="gift-heart" aria-hidden="true" />
        <SectionTitle>Seu carinho é o nosso<br />maior presente</SectionTitle>
        <p>A sua presença será o nosso maior presente. Para quem desejar nos presentear de outra forma, poderá fazê-lo através dos seguintes canais:</p>
        <div className="phone-row">
          <a href="tel:870532960"><Phone /> 870532960</a>
          <Button variant="ghost" size="icon" onClick={copyPhone} aria-label="Copiar número"><Copy /></Button>
        </div>
        <p className="envelope-note">Ou através de envelope.</p>
      </section>

      <section className="final-section section-pad">
        <p>O grande dia chegou!</p>
        <span className="final-line" aria-hidden="true" />
        <h2>Szilvia <em>&</em> Aldenor</h2>
        <p>Esperamos por si para celebrar o nosso amor!</p>
        <Heart className="final-heart" fill="currentColor" aria-hidden="true" />
      </section>

      <footer><p>Com amor, <span>Szilvia & Aldenor</span></p><time dateTime="2026-10-24">24 de outubro de 2026</time><Heart fill="currentColor" /></footer>

      <Toaster position="top-center" richColors />
    </main>
  );
}