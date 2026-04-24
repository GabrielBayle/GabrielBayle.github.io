// ============================================================
//  PAPERS DATA FILE
//  Edit this file to add, remove or update papers.
//  Do NOT edit research.html — it reads from here automatically.
// ============================================================

// --- TOPIC DEFINITIONS ---
// To add a new topic: add an entry below with a unique key, label and color.
const TOPICS = {
  sd: { label: "Social Dilemmas",            color: "#3a6ea8" },
  pn: { label: "Preferences & Norms",        color: "#7a5a9e" },
  mp: { label: "Mechanism & Policy Design",  color: "#2e8b6e" },
  mr: { label: "Methodology & Replication",  color: "#b05a20" },
  id: { label: "Interdisciplinary",          color: "#c0404a" },
};

// --- STATUS DEFINITIONS ---
// To add a new status: add an entry below with a unique key and label.
const STATUSES = {
  published: { label: "Published" },
  review:    { label: "Under review / Submitted" },
  ongoing:   { label: "On-going projects" },
};

// --- PAPERS ---
// Each paper has:
//   num       : display number e.g. "[3]" — leave "" for unumbered
//   title     : paper title
//   authors   : author list (use * for corresponding author)
//   journal   : journal / venue / status line
//   meta      : contribution, conferences, awards (HTML allowed)
//   topics    : array of topic keys from TOPICS above
//   status    : one status key from STATUSES above
//   links     : array of { label, url, style }
//               style can be "default" or "oa" (open access, green)
//
// DISPLAY ORDER: papers appear in the order listed here, grouped by status.
// Status display order follows STATUSES key order above.

const PAPERS = [

  // ── PUBLISHED ──────────────────────────────────────────────

  {
    num: "[3]",
    title: "Efficiency of the Minimum Approval Mechanism with heterogeneous players",
    authors: "Bayle, G.* & M. Willinger",
    journal: "Journal of Public Economic Theory 27, Issue 4 · 2025",
    meta: "Contribution: CTEAW · Conferences: ASFEE2024 (France), GTE Waseda Workshop 2024 (Japan)",
    topics: ["sd", "mp", "pn"],
    status: "published",
    links: [
      { label: "Open access",           url: "https://doi.org/10.1111/jpet.70043",                              style: "oa" },
      { label: "Supplementary materials", url: "https://github.com/GabrielBayle/Heterogeneous-AM_SuppMat",       style: "default" },
    ],
  },

  {
    num: "[2]",
    title: "L'économie à l'ère de la science ouverte : un nouvel élan pour la reproductibilité",
    authors: "Bayle, G., D. Dubois & M. Willinger*",
    journal: "Revue économique 76, Issue 5 · 2025",
    meta: "Contribution: CW",
    topics: ["mr"],
    status: "published",
    links: [
      { label: "Open access", url: "https://shs.cairn.info/revue-revue-economique-2025-5-page-733?lang=fr", style: "oa" },
    ],
  },

  {
    num: "[1]",
    title: "Solving Conflicts over Common-pool Resources through Stakeholder Delegation",
    authors: "Bayle, G.*, S. Farolfi, E. Lavaine & M. Willinger",
    journal: "Journal of Economic Behavior and Organization 227, 106702 · 2024",
    meta: "Contribution: CTEAW · Conferences: ASFEE2022, ESAWorld2023, ASFEE2023, IAREP-SABE2023 (France)",
    topics: ["sd", "mp"],
    status: "published",
    links: [
      { label: "Paper",                  url: "https://doi.org/10.1016/j.jebo.2024.106702",                    style: "default" },
      { label: "Preprint",               url: "https://hal.science/hal-04682703v1",                            style: "default" },
      { label: "Supplementary materials", url: "https://github.com/GabrielBayle/Solving-conflicts_SuppMat",    style: "default" },
    ],
  },

  // ── UNDER REVIEW / SUBMITTED ───────────────────────────────

  {
    num: "",
    title: "Individual, Collective, or Both? Payment mechanisms and adoption of sustainable land-use systems",
    authors: "Belard, A.*, S. Farolfi, G. Bayle, N. Hambulo, T. Pedzisa, F. Gérard & D. Jourdain",
    journal: "Under review in World Development · 2025",
    meta: "Contribution: CTEW",
    topics: ["sd", "mp"],
    status: "review",
    links: [
      { label: "Working paper", url: "https://hal.inrae.fr/hal-05235382", style: "default" },
    ],
  },

  {
    num: "",
    title: "Intragenerational conflict undermines cooperation with the future",
    authors: "Bayle, G.*, V. Pinçon, G. Barragan-Jason, C. Bazart, L. Ibanez, S. Roussel, A. Syssau-Vaccarella, D. Dubois & M. Willinger",
    journal: "Under review in Nature Communications · 2025",
    meta: "Contribution: CTEAW",
    topics: ["sd", "pn"],
    status: "review",
    links: [
      { label: "Working paper", url: "https://doi.org/10.21203/rs.3.rs-8121236/v1", style: "default" },
    ],
  },

  {
    num: "",
    title: "Reconsidering mistakes: Reproduction and replication of Nielsen and Rehbeck (2022)",
    authors: "Bayle, G.*, D. Dubois & S. Varaine",
    journal: "Submitted · 2025",
    meta: "Contribution: CEAW",
    topics: ["mr", "pn"],
    status: "review",
    links: [
      { label: "Working paper", url: "https://shs.hal.science/hal-05474766v1", style: "default" },
    ],
  },

  {
    num: "",
    title: "Spatial externalities and fragmented property rights in mobile renewable resources",
    authors: "Bayle, G.*, N. Quérou, D. Dubois, M. Beaud, A. Lefebvre, M. Willinger",
    journal: "Under review in Journal of Environmental Economics and Management",
    meta: "Contribution: CTEAW",
    topics: ["sd", "mp"],
    status: "review",
    links: [
      { label: "Working paper", url: "https://hal.inrae.fr/hal-05462551v1", style: "default" },
    ],
  },

  // ── ON-GOING PROJECTS ──────────────────────────────────────

  {
    num: "",
    title: "Dishonesty: A series of field experiments on motivations, levers and policies",
    authors: "Bayle, G.* & M.C. Villeval",
    journal: "",
    meta: "Contribution: CTEAW",
    topics: ["pn", "mp"],
    status: "ongoing",
    links: [],
  },

  {
    num: "",
    title: "Four ways to share a pie: Identifying distributional preferences with machine learning",
    authors: "Bayle, G.*",
    journal: "",
    meta: "Conferences: IAREP-SABE2024 (Scotland), CREST-Waseda Workshop 2024 (Japan), ASFEE2025 (France), WEAI-IAREP2025 (US), ESA2025 (Czechia)<br><span style=\"color:#b07a10;font-weight:500\">★ IAREP/SABE/Elsevier Best Student Paper 2024</span>",
    topics: ["pn", "sd", "mp", "mr"],
    status: "ongoing",
    links: [],
  },

  {
    num: "",
    title: "Detrimental outcomes of geoengineering for African vegetation estimated from volcanic eruption",
    authors: "Kitasho, N., C. Corona, A. Bayle, G. Bayle*, S. Di Falco, G. Lynam, S. Guillet, M. Stoffel",
    journal: "",
    meta: "Contribution: CW",
    topics: ["id", "mp"],
    status: "ongoing",
    links: [],
  },

  {
    num: "",
    title: "Bargaining under social dilemmas and risk",
    authors: "Bayle, G.*, V. Pham, Y. Kamijo",
    journal: "",
    meta: "Contribution: CTEAW",
    topics: ["sd", "pn"],
    status: "ongoing",
    links: [],
  },

];
