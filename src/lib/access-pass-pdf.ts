import type { Guest } from "./guests";

const CREAM: [number, number, number] = [252, 248, 240];
const GOLD: [number, number, number] = [176, 141, 87];
const CHOCOLATE: [number, number, number] = [61, 42, 32];

export function passFileName(guest: Guest) {
  const slug = guest.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " ")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `Cartao-Acesso-${slug}.pdf`;
}

export async function downloadAccessPass(guest: Guest) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: [105, 190] });
  const W = 105;
  const center = W / 2;

  doc.setFillColor(...CREAM);
  doc.rect(0, 0, W, 190, "F");

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.6);
  doc.rect(6, 6, W - 12, 178);
  doc.setLineWidth(0.2);
  doc.rect(8.5, 8.5, W - 17, 173);

  doc.setTextColor(...GOLD);
  doc.setFont("times", "italic");
  doc.setFontSize(20);
  doc.text("Szilvia & Aldenor", center, 24, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.text("C A R T Ã O   D E   A C E S S O", center, 31, { align: "center" });

  doc.setLineWidth(0.3);
  doc.line(center - 15, 35, center + 15, 35);

  let y = 47;
  const block = (label: string, lines: string[], size = 13) => {
    doc.setTextColor(...GOLD);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    doc.text(label, center, y, { align: "center" });
    y += 6;
    doc.setTextColor(...CHOCOLATE);
    doc.setFont("times", "normal");
    doc.setFontSize(size);
    for (const line of lines) {
      const wrapped = doc.splitTextToSize(line, W - 26) as string[];
      for (const w of wrapped) {
        doc.text(w, center, y, { align: "center" });
        y += size * 0.45 + 1.5;
      }
    }
    y += 5;
  };

  block("CONVIDADO", guest.name.split(" & "), 14);
  block("MESA", [guest.table], 12);

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.4);
  doc.rect(18, y - 4, W - 36, 18);
  doc.setTextColor(...GOLD);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(6.5);
  doc.text("CÓDIGO DE ACESSO", center, y + 1, { align: "center" });
  doc.setTextColor(...CHOCOLATE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(guest.code, center, y + 10, { align: "center" });
  y += 24;

  block("DATA", ["24 de Outubro de 2026"], 12);
  block("HORÁRIO", ["15:00"], 12);
  block("LOCAL", ["Hotel Polana"], 12);

  doc.setTextColor(...GOLD);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(6.5);
  doc.text("Apresente este cartão na entrada do evento", center, 177, { align: "center" });

  doc.save(passFileName(guest));
}
