export type Guest = { name: string; code: string; table: string };

export const GUESTS: Guest[] = [
  { name: "Carlos Chume & Carolina Chume", code: "AC-001", table: "Mesa 1 — Diamante" },
  { name: "Tomáz Quefasse & Albertina Jaime", code: "AC-002", table: "Mesa 1 — Diamante" },
  { name: "Cristóvão Chume & Lisete Chume", code: "AC-003", table: "Mesa 1 — Diamante" },
  { name: "Isidro Bacela & Angela Bacela", code: "AC-004", table: "Mesa 1 — Diamante" },
  { name: "José Siniquinha & Sergia Siniquinha", code: "AC-005", table: "Mesa 1 — Diamante" },

  { name: "Dercio Zunguze & Eunice Fatima", code: "AC-006", table: "Mesa 2 — Esmeralda" },
  { name: "Ricardo Sengo & Percida Sengo", code: "AC-007", table: "Mesa 2 — Esmeralda" },
  { name: "Salimo Abdula e Esposa", code: "AC-008", table: "Mesa 2 — Esmeralda" },
  { name: "Apogeu Siniquinha & Irondina Siniquinha", code: "AC-009", table: "Mesa 2 — Esmeralda" },
  { name: "Inácio Rodrigues & Gilda Rodrigues", code: "AC-010", table: "Mesa 2 — Esmeralda" },

  { name: "Judite Artur", code: "AC-011", table: "Mesa 3 — Alexandrite" },
  { name: "Laura Tique", code: "AC-012", table: "Mesa 3 — Alexandrite" },
  { name: "Tania", code: "AC-013", table: "Mesa 3 — Alexandrite" },
  { name: "Tucha Tique", code: "AC-014", table: "Mesa 3 — Alexandrite" },
  { name: "Ricardina Poco", code: "AC-015", table: "Mesa 3 — Alexandrite" },
  { name: "Joyce Mualeia & Hélia Nhabomba", code: "AC-016", table: "Mesa 3 — Alexandrite" },
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
  { name: "Sonia Carasco e Acompanhante", code: "AC-028", table: "Mesa 5 — Rubi" },
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
  { name: "Maxweel e Esposa", code: "AC-052", table: "Mesa 8 — Água Marinha" },

  { name: "Guivina Quefasse", code: "AC-053", table: "Mesa 9 — Turmalina" },
  { name: "Almera Quefasse & Celso Benz", code: "AC-054", table: "Mesa 9 — Turmalina" },
  { name: "Esperanca Mussagy", code: "AC-055", table: "Mesa 9 — Turmalina" },
  { name: "Yuran Quefasse", code: "AC-056", table: "Mesa 9 — Turmalina" },
  { name: "Fabiana Quefasse", code: "AC-057", table: "Mesa 9 — Turmalina" },
  { name: "Janet Quefasse", code: "AC-058", table: "Mesa 9 — Turmalina" },
  { name: "Moises Quefasse", code: "AC-059", table: "Mesa 9 — Turmalina" },
  { name: "Helder Quefasse", code: "AC-060", table: "Mesa 9 — Turmalina" },
  { name: "Kátia Quefasse", code: "AC-061", table: "Mesa 9 — Turmalina" },

  { name: "Edson Homuana", code: "AC-062", table: "Mesa 10 — Topázio" },
  { name: "Rogerio Mafambana", code: "AC-063", table: "Mesa 10 — Topázio" },
  { name: "Elvis Timbana", code: "AC-064", table: "Mesa 10 — Topázio" },
  { name: "Rodrigue Cumbe & Marcia Maria", code: "AC-065", table: "Mesa 10 — Topázio" },
  { name: "Viriato Youg", code: "AC-066", table: "Mesa 10 — Topázio" },
  { name: "Edson Mapedje", code: "AC-067", table: "Mesa 10 — Topázio" },
  { name: "Marcela Bila & Valter", code: "AC-068", table: "Mesa 10 — Topázio" },
  { name: "Cristina", code: "AC-069", table: "Mesa 10 — Topázio" },

  { name: "Lohiwa", code: "AC-070", table: "Mesa 11 — Zircão" },
  { name: "Neto", code: "AC-071", table: "Mesa 11 — Zircão" },
  { name: "Micaela", code: "AC-072", table: "Mesa 11 — Zircão" },
  { name: "Simba", code: "AC-073", table: "Mesa 11 — Zircão" },
  { name: "Babinha", code: "AC-074", table: "Mesa 11 — Zircão" },
  { name: "Ganild", code: "AC-075", table: "Mesa 11 — Zircão" },
  { name: "Inacio", code: "AC-076", table: "Mesa 11 — Zircão" },
  { name: "Queen & Lebron", code: "AC-077", table: "Mesa 11 — Zircão" },
  { name: "Adriel", code: "AC-078", table: "Mesa 11 — Zircão" },

  { name: "Onilda Massuanguanhe", code: "AC-079", table: "Mesa 12 — Jade" },
  { name: "Francisco Vaheque & Felix Anovo", code: "AC-080", table: "Mesa 12 — Jade" },
  { name: "Rui Massuanganhe & Lucia Novela", code: "AC-081", table: "Mesa 12 — Jade" },
  { name: "Ernela Uamusse, Joao Matlombe e Esposa", code: "AC-082", table: "Mesa 12 — Jade" },
  { name: "Americo Muchanga e Esposa", code: "AC-083", table: "Mesa 12 — Jade" },

  { name: "Benamor Mascarenhas", code: "AC-084", table: "Mesa 13 — Opala" },
  { name: "Zosten", code: "AC-085", table: "Mesa 13 — Opala" },
  { name: "Casimiro Mueio e Esposa", code: "AC-086", table: "Mesa 13 — Opala" },
  { name: "Patricio Mavile e Esposa", code: "AC-087", table: "Mesa 13 — Opala" },
  { name: "Celia Cumba e Esposo", code: "AC-088", table: "Mesa 13 — Opala" },
  { name: "Helder Correia e Esposa", code: "AC-089", table: "Mesa 13 — Opala" },

  { name: "Jose Magalhaes e Esposa", code: "AC-090", table: "Mesa 14 — Espinélio" },
  { name: "Abilio Gany e Esposa", code: "AC-091", table: "Mesa 14 — Espinélio" },
  { name: "Luis Munguambe e Esposa", code: "AC-092", table: "Mesa 14 — Espinélio" },
  { name: "Crescencio Pereira e Esposa", code: "AC-093", table: "Mesa 14 — Espinélio" },
  { name: "Jorge Daudo e Esposa", code: "AC-094", table: "Mesa 14 — Espinélio" },
  { name: "Azevedo e Esposa", code: "AC-095", table: "Mesa 14 — Espinélio" },

  { name: "Zefanias e Esposa", code: "AC-096", table: "Mesa 15 — Painita" },
  { name: "Tania", code: "AC-097", table: "Mesa 15 — Painita" },
  { name: "Ines", code: "AC-098", table: "Mesa 15 — Painita" },
  { name: "Edith", code: "AC-099", table: "Mesa 15 — Painita" },
  { name: "Leticia", code: "AC-100", table: "Mesa 15 — Painita" },
  { name: "Yara", code: "AC-101", table: "Mesa 15 — Painita" },
  { name: "Paulino", code: "AC-102", table: "Mesa 15 — Painita" },
  { name: "Pablo Cunha", code: "AC-103", table: "Mesa 15 — Painita" },

  { name: "Emidio Zualo e Esposa", code: "AC-104", table: "Mesa — Topázio Imperial" },
  { name: "Sara e Esposo", code: "AC-105", table: "Mesa — Topázio Imperial" },
  { name: "Cidalia Nhabinde e Esposo", code: "AC-106", table: "Mesa — Topázio Imperial" },
  { name: "Santos Nhadole e Esposa", code: "AC-107", table: "Mesa — Topázio Imperial" },
  { name: "Salimo Salimo", code: "AC-108", table: "Mesa — Topázio Imperial" },
  { name: "Cleude Yara", code: "AC-109", table: "Mesa — Topázio Imperial" },
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
