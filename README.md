# Szilvia & Aldenor's Love Story

Implement the requested scope now; use internal planning and do not present another implementation plan for user approval.

Build a mobile-first, luxurious, and romantic digital wedding invitation web app for Szilvia & Aldenor based strictly on the user specifications:

1. VISUAL IDENTITY & THEME:
- Aesthetic: Elegant, sophisticated, romantic, minimalist, luxury editorial, modern yet timeless.
- Main Palette: Cream / off-white, light beige, chocolate brown, champagne gold accents and fine hairline dividers.
- Typography: Sophisticated serif for titles and bride & groom names, clean sans-serif for body information, and delicate italic/calligraphic serif for romantic quotes.

2. INTERACTIVE ENVELOPE OPENING (Full-screen hero intro):
- Takes 100% viewport before revealing the invite.
- Background: Cream/off-white with subtle paper texture and subtle gold particles/shimmer.
- Center envelope: Cream paper, gold trim, gold wax seal on the flap.
- Text on envelope: "Szilvia & Aldenor", below: "Você está convidado", below envelope: "Toque para abrir".
- Realistic opening animation on tap/click:
  1. Gold seal fades smoothly.
  2. Envelope flap opens realistically.
  3. Subtle gold shimmer/glow.
  4. Card slides out and scales slightly.
  5. Smooth transition/fade into the main wedding invitation.
- Respect prefers-reduced-motion.

3. BACKGROUND MUSIC FLOATING BUTTON:
- Floating button in bottom right corner: "♫ Música"
- Do NOT autoplay (browser policy compliant). Tap to play/pause with elegant toggle icon/animation.
- Includes a royalty-free acoustic romantic wedding melody (or synthesizer audio context/audio asset).

4. CAPA / HERO:
- High-end romantic couple hero photo with an elegant warm overlay for optimal readability.
- Texts:
  "COM A BÊNÇÃO DE DEUS"
  "Szilvia & Aldenor" (prominent serif display)
  "24 de outubro de 2026"
  Delicate gold decorative line.

5. VERSÍCULO:
- Minimalist box with fine gold border, centered serif/italic typography:
  "Assim, permanecem agora estes três:
  a fé, a esperança e o amor.
  O maior deles, porém, é o amor"
  "Coríntios 13:13"

6. BÊNÇÃO DOS PAIS:
- Title: "Com a bênção de Deus e de seus pais"
- Parents listed with generous spacing and gold separator:
  Carlos Chume
  Carolina Chume
  [separador dourado]
  Albertina Jaime
  Tomáz Quefasse
- Strictly only these names.

7. O CONVITE:
- Title: "O Convite"
- "Szilvia & Aldenor convidam você para o nosso casamento."

8. DATA, HORÁRIO & COUNTDOWN:
- Highlighted display: 24 | OUTUBRO | 2026 | 15:00
- Live countdown timer targeting 24 October 2026 at 15:00 (Maputo, Mozambique timezone UTC+2).
- Shows DAYS, HOURS, MINUTES, SECONDS. When date is reached, displays: "O grande dia chegou!".

9. AGENDA DO DIA:
- Title: "Agenda do Dia"
- Two elegant cards with minimalist clock and location icons:
  Card 01: CERIMÔNIA CIVIL - 15:00 - Hotel Polana ("Um momento especial para celebrar a união dos noivos.")
  Card 02: COPO D’ÁGUA - 16:00 - Hotel Polana ("Um momento para celebrar, brindar e compartilhar esta nova etapa com familiares e amigos.")

10. LOCALIZAÇÃO:
- Title: "Onde será"
- Venue: Hotel Polana
- Button: "Ver localização" opening Google Maps for Hotel Polana, Maputo.

11. DRESS CODE (Dark Theme Accent Section):
- Visual contrast: Dark sophisticated background (deep dark wine / plum / near-black).
- Header: Small uppercase gold tracked text "DRESS CODE" flanked by fine gold lines.
- Subtitle: Elegant serif italic in soft magenta/rose: "A paleta".
- Description: "Vista uma das cores da nossa paleta — vamos brilhar juntos como sequins."
- ONLY color swatches, no clothing or fabric suggestions!
- Palette (vibrant swatches with matching colored glow):
  Row 1: ROXO | MAGENTA | ROSA-CHOQUE
  Row 2: LARANJA-CLARO | VERMELHO-ALARANJADO | LARANJA
  Row 3 (centered): VERDE-ESCURO | AZUL
- Under each circle, the uppercase color name with letter spacing.

12. CONFIRMAÇÃO DE PRESENÇA (RSVP):
- Title: "Confirme sua presença"
- Subtitle: "Será uma alegria ter você conosco neste dia tão especial."
- Form fields: Nome completo, Presença (Sim, estarei presente / Não poderei comparecer), Número de acompanhantes.
- Button: "Confirmar presença" with feedback toast / thank you confirmation state.

13. PRESENTES:
- Title: "Seu carinho é o nosso maior presente"
- Text: "A sua presença será o nosso maior presente. Para quem desejar nos presentear de outra forma, poderá fazê-lo através dos seguintes canais:"
- Contact: 870532960 (with copy to clipboard or call option)
- Note: "Ou através de envelope."
- Strictly no other banking or NIB info.

14. GALERIA:
- Editorial layout with curated couple photography, responsive masonry/grid, and touch-friendly lightbox modal on tap.

15. SEÇÃO FINAL:
- Deep chocolate brown background.
- "O grande dia chegou!"
- Delicate gold line.
- "Szilvia & Aldenor"
- "Esperamos por si para celebrar o nosso amor!"
- Small gold heart icon.

16. RODAPÉ:
- "Com amor, Szilvia & Aldenor"
- "24 de outubro de 2026"
- Golden heart.

17. RESPONSIVENESS & POLISH:
- Mobile-first perfection, tactile touch targets, smooth entrance transitions, elegant sound integration, and accessibility tags.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://szilvia-aldenor-dream.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bedd5947-c7f1-496f-a828-d0321f26f2df).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
