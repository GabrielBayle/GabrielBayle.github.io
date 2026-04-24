// ============================================================
//  EVENTS DATA FILE
//  Edit this file to add, remove or update events.
//  Do NOT edit events.html — it reads from here automatically.
// ============================================================

// --- CATEGORY DEFINITIONS ---
const CATEGORIES = {
  upcoming:      { label: "Upcoming",               color: "#2e8b6e" },
  talk:          { label: "Talks & Conferences",    color: "#3a6ea8" },
  visit:         { label: "Visits",                 color: "#7a5a9e" },
  news:          { label: "News",                   color: "#b05a20" },
};

// --- EVENTS ---
// Each event has:
//   title       : event title
//   category    : one key from CATEGORIES above
//   date        : display string e.g. "May 2026" or "2024"
//   year        : integer, used for grouping (use 9999 for upcoming)
//   description : text or HTML
//
// DISPLAY ORDER: upcoming first, then by year descending, then order listed here.

const EVENTS = [

  // ── UPCOMING ───────────────────────────────────────────────

  {
    title: "Lyon-Berlin Workshop on Behavioral Research and Meta-Science",
    category: "upcoming",
    date: "May 7, 2026",
    year: 9999,
    description: "Workshop held at GATE, Lyon (seminar room).",
  },

  {
    title: "ASFEE 2026",
    category: "upcoming",
    date: "2026",
    year: 9999,
    description: "French Association of Experimental Economics Conference in Lille, France.",
  },

  // ── 2025 ───────────────────────────────────────────────────

  {
    title: "CREST and GATE Workshops 2025",
    category: "talk",
    date: "2025",
    year: 2025,
    description: "Presented a recent working paper in two great workshops: CREST ESSEC Waseda Workshop in Paris and GATE International Workshop in Lyon.<br><br>Talk: <em>Intragenerational conflict undermines cooperation with the future.</em>",
  },

  {
    title: "GATE-Lab Seminars 2025",
    category: "news",
    date: "2025",
    year: 2025,
    description: "Co-organized the GATE-Lab seminars with Quentin Cavalan, our experimental and behavioral economics seminar. We invited: Binglin Gong (ECNU), Simon Merz (WCGE), Arno Apffelstaedt (U. Cologne), Jialong Wu (Shandong U.), Ginevra Del Mastio (IMT Lucca), Romain Espinosa (CIRED).<br><br>Many more speakers are scheduled for next year!",
  },

  {
    title: "TMD 2025 — Team and Multi-agent Dynamics Workshop",
    category: "talk",
    date: "2025",
    year: 2025,
    description: "The 3rd Team and Multi-agent Dynamics International workshop in Montpellier, France. A wonderful opportunity to join a multidisciplinary conference and learn from researchers in mathematics, physics, biology and more.<br><br>Talk: <em>Examining behaviors in complex settings: A Reinforcement Learning approach of a combined Common Pool Resource and Public Good game.</em>",
  },

  {
    title: "ASFEE 2025 · WEAI-IAREP 2025 · ESA Europe 2025",
    category: "talk",
    date: "2025",
    year: 2025,
    description: "Three conferences in which I presented my job market paper.<br><br>Talk: <em>Four ways to share a pie: Identifying distributional preferences with machine learning.</em>",
  },

  {
    title: "ESSCA Workshop — Open Science",
    category: "talk",
    date: "2025",
    year: 2025,
    description: "Invited to this workshop to discuss Open Science, Replication, Preregistration and Registered Reports.",
  },

  {
    title: "Visit at GREDEG",
    category: "visit",
    date: "2025",
    year: 2025,
    description: "Invited by the GREDEG experimental team to discuss the EXPLAIN project and my job market paper.<br><br>Talk: <em>Four ways to share a pie: Identifying distributional preferences with machine learning.</em>",
  },

  {
    title: "New Position at CNRS/GATE",
    category: "news",
    date: "2025",
    year: 2025,
    description: "After completing my PhD in November, I started a new position as Postdoctoral Fellow and Research Engineer at CNRS and GATE in Lyon, working alongside Marie-Claire Villeval and Iane Vallanzasca on two major projects:<br><br>— Developing a new French experimental platform to support large-scale experiments and enhance reproducibility in experimental economics.<br>— Continuing research in behavioral and experimental economics, with a focus on social dilemmas and distributional preferences.",
  },

  // ── 2024 ───────────────────────────────────────────────────

  {
    title: "PhD Defense",
    category: "news",
    date: "November 2024",
    year: 2024,
    description: "After 3 years, I defended my PhD thesis <em>\"Distributional preferences and approval mechanisms in social dilemmas\"</em>, supervised by Marc Willinger. Jury: Marie-Claire Villeval, François Cochard, Katrin Erdlenbruch and Yukihiko Funaki.",
  },

  {
    title: "Public Events 2024 — Fête de la Science · Nuit des Chercheuses · Festival Vas-savoir?!",
    category: "news",
    date: "2024",
    year: 2024,
    description: "Co-organized three public science outreach events with my lab. We proposed two activities in Montpellier: an experiment on the management of intergenerational common pool resources and the transmission of conservation preferences between parents and children, and several posters about Experimental Economics, Marine Submersion and Moral Dilemmas.",
  },

  {
    title: "CREST-Waseda Workshop 2024",
    category: "talk",
    date: "2024",
    year: 2024,
    description: "Invited to give a talk at the CREST-Waseda Workshop in Experimental Economics, Applied Mathematics and Finance.<br><br>Talk: <em>Four ways to share a pie: Identifying distributional preferences with machine learning.</em>",
  },

  {
    title: "IAREP-SABE 2024",
    category: "talk",
    date: "2024",
    year: 2024,
    description: "Conference of the IAREP and SABE associations in Behavioral Economics and Economic Psychology in Dundee, UK.<br><br>Talk: <em>Four ways to share a pie: Identifying distributional preferences with machine learning.</em><br><br>Awarded the <strong>IAREP/SABE/Elsevier Best Student Paper 2024</strong> for this work.",
  },

  {
    title: "1st CEE-M Workshop on Artificial Intelligence in Research",
    category: "news",
    date: "July 9, 2024",
    year: 2024,
    description: "Organized a workshop on \"Artificial Intelligence in Academic Research\" at the Center for Environmental Economics of Montpellier (CEE-M). Speakers: Dimitri Dubois (CEE-M), Ayato Kitadai (Engineering Tokyo University), Madalina Croitorou (LIRMM), Ganesh Gowrishankar (LIRMM). Concluded with a collaborative session on using AI in research.",
  },

  {
    title: "ASFEE 2024",
    category: "talk",
    date: "2024",
    year: 2024,
    description: "French Association of Experimental Economics Conference in Grenoble, France.<br><br>Talk: <em>Efficiency of the Minimum Approval Mechanism with heterogeneous players: a Public Goods experiment.</em>",
  },

  {
    title: "Replication Games — Institute for Replication",
    category: "talk",
    date: "2024",
    year: 2024,
    description: "Participated in a replication study organized by Abel Brodeur, Anna Dreber (Institute for Replication), Paulo Crosetto and Margaux Sinceux (GAEL). Conducted a computational and experimental replication of an influential AER paper with Dimitri Dubois and Simon Varaine (CEE-M).",
  },

  {
    title: "Visiting the University of Waseda",
    category: "visit",
    date: "Early 2024",
    year: 2024,
    description: "Invited by Professor Yukihiko Funaki, I visited Waseda University in Tokyo, Japan as a Research Fellow. Initiated two collaborations: an experiment in Cooperative Game Theory with Yukihiko Funaki, and an experiment on Dynamic Common Pool Resources and Bargaining with Vinh Pham and Yoshio Kamijo.<br><br>Participated in the Waseda Game Theory and Experimental Economics Workshop (Tokyo) and the JSPS core to core CEFM Kyoto Workshop (Ritsumeikan University, Kyoto).<br><br>Talk at Waseda: <em>Efficiency of the Minimum Approval Mechanism with heterogeneous players.</em><br>Talk at Ritsumeikan: <em>Relativism, Competitiveness or Self-interest? Experimental evidence of four types of individuals.</em>",
  },

  {
    title: "CEE-M Workshop on Power Analysis",
    category: "news",
    date: "2024",
    year: 2024,
    description: "Co-hosted with Felipe Trillos a workshop on Power Analysis in experimental design. Covered fundamentals and implementation in R, with feedback from Pr. Anna Dreber (SSE), Arnaud Tognetti (CEE-M) and Sébastien Duchêne (MBS). A general guide with R code is forthcoming.",
  },

  {
    title: "PhD Seminar CEE-M 2024",
    category: "news",
    date: "2024",
    year: 2024,
    description: "Co-organized the CEE-M PhD Lunch Talk with Adrien Coiffard. Invited: Bertille Picard (AMSE), Jingru Wang (Waseda University), Aurélien Lafrogne (CEE-M), Lise Peragin (LEDa), Gabriel Bayle (CEE-M), Maël Jammes (CEE-M), Violette Pincon (CEE-M), Tom Bry-Chevalier (BETA).",
  },

  // ── 2023 ───────────────────────────────────────────────────

  {
    title: "Fête de la Science 2023",
    category: "news",
    date: "October 2023",
    year: 2023,
    description: "The Fête de la science 2023 \"Sport and Science\" (October 6–16, France). We proposed two activities in Montpellier and Dijon: an experiment on Overconfidence and Competitiveness in Sport, and several posters about nudging pro-environmental behaviors.",
  },

  {
    title: "CEE-M Internal Workshop on Artificial Intelligence",
    category: "news",
    date: "Summer 2023",
    year: 2023,
    description: "Organized an internal CEE-M workshop on using AI in research (literature reviews, proofreading, coding) and its future impact on academia. Topics discussed by Dimitri Dubois, Marc Willinger and Gabriel Bayle.",
  },

  {
    title: "ESA World 2023",
    category: "talk",
    date: "2023",
    year: 2023,
    description: "Economic Science Association Conference in Lyon, France.<br><br>Talk: <em>Solving Conflicts over Common-pool Resources through Stakeholder Delegation.</em>",
  },

  {
    title: "ASFEE 2023",
    category: "talk",
    date: "2023",
    year: 2023,
    description: "French Association of Experimental Economics Conference in Montpellier, France.<br><br>Talk: <em>Solving Conflicts over Common-pool Resources through Stakeholder Delegation.</em>",
  },

  {
    title: "IAREP-SABE 2023",
    category: "talk",
    date: "2023",
    year: 2023,
    description: "IAREP and SABE Conference in Lyon, France.<br><br>Talk: <em>Solving Conflicts over Common-pool Resources through Stakeholder Delegation.</em>",
  },

  {
    title: "PhD Seminar CEE-M 2023",
    category: "news",
    date: "2023",
    year: 2023,
    description: "Co-organized the CEE-M PhD Lunch Talk with Adrien Coiffard. Invited: Auriane Meilland (CIRED), Tuan Vinh Pham (Waseda University), Guillaume Bataille (AMSE), Rose Deperrois (CEE-M), Gabriel Bayle (CEE-M), Claudia Kelsall (CEE-M), Amandine Belard (G-EAU, CIRAD), Antoine Lacombe (AMSE) and Julia Wahtra (SLU).",
  },

  // ── 2022 ───────────────────────────────────────────────────

  {
    title: "ASFEE 2022",
    category: "talk",
    date: "2022",
    year: 2022,
    description: "French Association of Experimental Economics Conference in Lyon, France.<br><br>Talk: <em>Solving Conflicts over Common-pool Resources through Stakeholder Delegation.</em>",
  },

  {
    title: "PhD Seminar CEE-M 2022",
    category: "news",
    date: "2022",
    year: 2022,
    description: "Co-organized the CEE-M PhD Lunch Talk with Gabriella Demarchi and Adrien Coiffard. Invited: Giulia Vaglietti (BETA), Ondine Berland (AgroParisTech), Katie Devenich (Bangor University), Aurélien Lafrogne (CEE-M), Clara Kögel (OCDE Innovation), Léa Crépin (Paris Saclay), Anna Massfeller (Bonn University), Camille Salesse (CEE-M), Julia Girard (CEE-M), Pauline Kergall (MRE) and Gabriela Demarchi (CEE-M).",
  },

];
