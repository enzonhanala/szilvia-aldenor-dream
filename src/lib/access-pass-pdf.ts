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
  const tableMatch = guest.table.match(/^Mesa\s+(\d+)\s+—\s+(.+)$/);
  const tableNumber = tableMatch?.[1]?.padStart(2, "0") ?? guest.table;
  const tableName = tableMatch?.[2] ?? "";

  doc.setFillColor(...CREAM);
  doc.rect(0, 0, W, 190, "F");

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.45);
  doc.rect(6, 6, W - 12, 178);
  doc.setLineWidth(0.15);
  doc.rect(8, 8, W - 16, 174);

  doc.setTextColor(...GOLD);
  doc.setFont("times", "italic");
  doc.setFontSize(22);
  doc.text("Szilvia & Aldenor", center, 23, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text("C A R T Ã O   D E   A C E S S O", center, 32, { align: "center" });

  doc.setLineWidth(0.3);
  doc.line(center - 17, 37, center - 3, 37);
  doc.line(center + 3, 37, center + 17, 37);
  doc.setFont("times", "normal");
  doc.setFontSize(6);
  doc.text("◆", center, 38.2, { align: "center" });

  let y = 49;
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

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.25);
  doc.line(16, y - 2, W - 16, y - 2);
  doc.setTextColor(...GOLD);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(6.5);
  doc.text("MESA", 31, y + 5, { align: "center" });
  doc.text("CÓDIGO DE ACESSO", 74, y + 5, { align: "center" });

  doc.setTextColor(...CHOCOLATE);
  doc.setFont("times", "normal");
  doc.setFontSize(18);
  doc.text(tableNumber, 31, y + 15, { align: "center" });
  if (tableName) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    doc.text(tableName.toUpperCase(), 31, y + 21, { align: "center" });
  }

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.3);
  doc.rect(53, y + 8, 42, 16);
  doc.setTextColor(...CHOCOLATE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(guest.code, 74, y + 18.5, { align: "center" });
  y += 34;

  doc.setLineWidth(0.25);
  doc.line(16, y - 3, W - 16, y - 3);
  block("DATA", ["24 de Outubro de 2026"], 11);
  block("HORÁRIO", ["15:00"], 11);
  block("LOCAL", ["Hotel Polana"], 11);

  doc.setTextColor(...GOLD);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(6.5);
  doc.text("Apresente este cartão na entrada do evento", center, 177, { align: "center" });

  doc.save(passFileName(guest));
}
