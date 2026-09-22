export type Guest = { name: string; code: string; table: string };

export const GUESTS: Guest[] = [
  { name: "Carlos Chume & Carolina Chume", code: "AC-001", table: "Mesa 1 — Diamante" },
  { name: "Tomáz Quefasse & Albertina Jaime", code: "AC-002", table: "Mesa 1 — Diamante" },
  { name: "Cristóvão Chume & Lisete Chume", code: "AC-003", table: "Mesa 1 — Diamante" },
  { name: "Isidro Bacela & Angela Bacela", code: "AC-004", table: "Mesa 1 — Diamante" },
  { name: "José Siniquinha & Sergia Siniquinha", code: "AC-005", table: "Mesa 1 — Diamante" },

  { name: "Dercio Zunguze & Eunice Fatima", code: "AC-006", table: "Mesa 2 — Esmeralda" },
  { name: "Ricardo Sengo & Percida Sengo", code: "AC-007", table: "Mesa 2 — Esmeralda" },
  { name: "Benamor Mascarenhas & Zostein", code: "AC-008", table: "Mesa 2 — Esmeralda" },
  { name: "Apogeu Siniquinha & Irondina Siniquinha", code: "AC-009", table: "Mesa 2 — Esmeralda" },
  { name: "Inácio Rodrigues & Gilda Rodrigues", code: "AC-010", table: "Mesa 2 — Esmeralda" },

  { name: "Judite Artur", code: "AC-011", table: "Mesa 3 — Alexandrite" },
  { name: "Laura Tique", code: "AC-012", table: "Mesa 3 — Alexandrite" },
  { name: "Tania", code: "AC-013", table: "Mesa 3 — Alexandrite" },
  { name: "Tucha Tique", code: "AC-014", table: "Mesa 3 — Alexandrite" },
  { name: "Ricardina Poco", code: "AC-015", table: "Mesa 3 — Alexandrite" },
  { name: "Vanda Marina & Lili Vaila", code: "AC-016", table: "Mesa 3 — Alexandrite" },
  { name: "Paula Magaia & Antonio Magaia", code: "AC-017", table: "Mesa 3 — Alexandrite" },
  { name: "Ginoca", code: "AC-018", table: "Mesa 3 — Alexandrite" },

  { name: "Esmenia Mualeia", code: "AC-019", table: "Mesa 4 — Safira" },
  { name: "Albertina Pedro", code: "AC-020", table: "Mesa 4 — Safira" },
  { name: "Dario Pires & Marlen Pires", code: "AC-021", table: "Mesa 4 — Safira" },
  { name: "Calisto Macuacua & Rosalina Macuacua", code: "AC-022", table: "Mesa 4 — Safira" },
  { name: "Gloria Chume & Emilton Nhalicale", code: "AC-023", table: "Mesa 4 — Safira" },
  { name: "Roberto Chume & Angela Chume", code: "AC-024", table: "Mesa 4 — Safira" },

  { name: "Natacha Zefanias & Carvalho Junior", code: "AC-025", table: "Mesa 5 — Rubi" },
  { name: "Tela Maroquim & Stayler Maroquim", code: "AC-026", table: "Mesa 5 — Rubi" },
  { name: "Fernanda Mualeia", code: "AC-027", table: "Mesa 5 — Rubi" },
  { name: "Cleide Mualeia & Salimo Salimo", code: "AC-028", table: "Mesa 5 — Rubi" },
  { name: "Leonel Chume & Linda Chume", code: "AC-029", table: "Mesa 5 — Rubi" },
  { name: "Neusa Rodrigues", code: "AC-030", table: "Mesa 5 — Rubi" },

  { name: "Astrogildo Chume & Gertrudes Maimbo", code: "AC-031", table: "Mesa 6 — Diamante Azul" },
  { name: "Clayton Quefasse & Felismina", code: "AC-032", table: "Mesa 6 — Diamante Azul" },
  { name: "Helton Quefasse & Nelva Quefasse", code: "AC-033", table: "Mesa 6 — Diamante Azul" },
  { name: "Maria Inacia", code: "AC-034", table: "Mesa 6 — Diamante Azul" },
  { name: "Eva Vanessa", code: "AC-035", table: "Mesa 6 — Diamante Azul" },
  { name: "Samuel", code: "AC-036", table: "Mesa 6 — Diamante Azul" },
  { name: "Zarina", code: "AC-037", table: "Mesa 6 — Diamante Azul" },

  { name: "Claudia Chirindja", code: "AC-038", table: "Mesa 7 — Diamante Rosa" },
  { name: "Cecilia Eliseu", code: "AC-039", table: "Mesa 7 — Diamante Rosa" },
  { name: "Arlinda Eliseu", code: "AC-040", table: "Mesa 7 — Diamante Rosa" },
  { name: "Neila Cabir", code: "AC-041", table: "Mesa 7 — Diamante Rosa" },
  { name: "Anisia & Imran Esmael", code: "AC-042", table: "Mesa 7 — Diamante Rosa" },
  { name: "Halima Fernando & Nuno Uinge", code: "AC-043", table: "Mesa 7 — Diamante Rosa" },
  { name: "Belarmino Micas & Angela Micas", code: "AC-044", table: "Mesa 7 — Diamante Rosa" },

  { name: "Candida", code: "AC-045", table: "Mesa 8 — Água Marinha" },
  { name: "Cristiano Nhavotso & Hortencia Guambe", code: "AC-046", table: "Mesa 8 — Água Marinha" },
  { name: "Felizarda Doutor", code: "AC-047", table: "Mesa 8 — Água Marinha" },
  { name: "Raquelija Doutor", code: "AC-048", table: "Mesa 8 — Água Marinha" },
  { name: "Isaura Doutor", code: "AC-049", table: "Mesa 8 — Água Marinha" },
  { name: "Sintia", code: "AC-050", table: "Mesa 8 — Água Marinha" },
  { name: "Azarias Huo", code: "AC-051", table: "Mesa 8 — Água Marinha" },
  { name: "Sonia Hotel Polana", code: "AC-052", table: "Mesa 8 — Água Marinha" },
  { name: "Esperança Mussagy", code: "AC-053", table: "Mesa 8 — Água Marinha" },

  { name: "Guivina Quefasse", code: "AC-054", table: "Mesa 9 — Turmalina" },
  { name: "Almera Quefasse & Celso Benz", code: "AC-055", table: "Mesa 9 — Turmalina" },
  { name: "Maxweel Quefasse", code: "AC-056", table: "Mesa 9 — Turmalina" },
  { name: "Yuran Quefasse", code: "AC-057", table: "Mesa 9 — Turmalina" },
  { name: "Fabiana Quefasse", code: "AC-058", table: "Mesa 9 — Turmalina" },
  { name: "Janet Quefasse", code: "AC-059", table: "Mesa 9 — Turmalina" },
  { name: "Moises Quefasse", code: "AC-060", table: "Mesa 9 — Turmalina" },
  { name: "Helder Quefasse", code: "AC-061", table: "Mesa 9 — Turmalina" },
  { name: "Kátia Quefasse", code: "AC-062", table: "Mesa 9 — Turmalina" },

  { name: "Edson Homuana", code: "AC-063", table: "Mesa 10 — Topázio" },
  { name: "Rogerio Mafambana", code: "AC-064", table: "Mesa 10 — Topázio" },
  { name: "Elvis Timbana", code: "AC-065", table: "Mesa 10 — Topázio" },
  { name: "Rodrigue Cumbe & Marcia Maria", code: "AC-066", table: "Mesa 10 — Topázio" },
  { name: "Viriato Youg", code: "AC-067", table: "Mesa 10 — Topázio" },
  { name: "Edson Mapedje", code: "AC-068", table: "Mesa 10 — Topázio" },
  { name: "Marcela Bila & Valter", code: "AC-069", table: "Mesa 10 — Topázio" },
  { name: "Cristina", code: "AC-070", table: "Mesa 10 — Topázio" },

  { name: "Lohiwa", code: "AC-071", table: "Mesa 11 — Zircão" },
  { name: "Neto", code: "AC-072", table: "Mesa 11 — Zircão" },
  { name: "Micaela", code: "AC-073", table: "Mesa 11 — Zircão" },
  { name: "Simba", code: "AC-074", table: "Mesa 11 — Zircão" },
  { name: "Babinha", code: "AC-075", table: "Mesa 11 — Zircão" },
  { name: "Ganild", code: "AC-076", table: "Mesa 11 — Zircão" },
  { name: "Inacio", code: "AC-077", table: "Mesa 11 — Zircão" },
];

export const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

export function searchGuests(query: string): Guest[] {
  const q = normalize(query);
  if (q.length < 2) return [];
  return GUESTS.filter((guest) => {
    const name = normalize(guest.name);
    return (
      name.includes(q) ||
      name
        .split(/[\s&]+/)
        .some((part) => part.startsWith(q))
    );
  }).slice(0, 12);
}
