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
//   abstract  : paper abstract (plain text, optional)
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
    abstract: "The minimum approval mechanism (MAM) was introduced by Masuda et al. (2014) as a mechanism aimed at mitigating free riding in the social dilemma context of a public good game. The MAM is a two-stage mechanism which theoretically achieves the socially optimum level of public good provision, according to various equilibrium concepts (e.g., backward elimination of weakly dominated strategies, level-k, or minimax regret). We study the robustness of this mechanism to the introduction of endowment heterogeneity. We explore, theoretically and experimentally, how endowment inequalities affect the effectiveness of the MAM at improving the level of provision. We find that the mechanism is still Pareto-improving under endowment heterogeneity, but that its efficiency diminishes as inequality is increased. Our experimental findings indicate a significant weakening of the mechanism under endowment inequalities, surpassing our theoretical predictions. A close examination of individual behaviors reveals a significant drop in contributions compared to the uniform case, prompted by even minor inequalities. Intriguingly, our findings challenge conventional assumptions by showing that inequality aversion drives contributions in a public good game with endowment disparities only under certain assumptions. We explore the impact of beliefs about the contributions of advantaged players as potential motivations through guilt aversion and Kantian preferences.",
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
    title: "Economics in the Era of Open Science: A New Momentum for Reproducibility",
    authors: "Bayle, G., D. Dubois & M. Willinger*",
    journal: "Revue économique 76, Issue 5 · 2025",
    abstract: "The reproducibility crisis, first highlighted by Ioannidis (2005) and confirmed by numerous studies, has raised concerns about the reliability of scientific findings. Although economics displays a relatively high replication rate, it remains vulnerable to publication bias, p-hacking, and the file-drawer effect. Open science offers solutions to strengthen the credibility of research. Three levers are essential: open access to publications, data, and code; pre-registration and registered reports to limit analytical biases; and the systematic replication of studies. By examining their mechanisms and challenges, we emphasize their impact on scientific reliability. The adoption of these practices marks a turning point toward a more robust and cumulative science, but it requires changes in academic incentives, institutional support, and collective commitment to ensure the reproducibility of research.",
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
    abstract: "We study the effectiveness of delegation as a conflict resolution mechanism for managing common pool resources (CPR). Delegation involves empowering stakeholders to make collective decisions on behalf of resource users. We investigate, theoretically and experimentally, a delegation approval mechanism (DAM) in a three-player common-pool resource (CPR) game in which players can vote for extractions. In case of disapproval, in stage 2, one player is randomly selected to choose authoritatively the uniform extraction for the group, putting the disapproval arbitration at an endogenous level. Backwards elimination of weakly dominated strategies (BEWDS) predicts the socially optimum extraction under unanimity, but not under majority. Our experimental findings show that the DAM strongly reduces extractions and that most selected delegates choose the optimal extraction.",
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
    journal: "Submitted · 2026",
    abstract: "The adoption of sustainable land-use systems (SLUS) remains low among smallholder farmers in Sub-Saharan Africa, mainly due to immediate costs and risks outweighing short-term benefits. This study examines how different payments for environmental services (PES) mechanisms can incentivize SLUS adoption among smallholder farmers in Zimbabwe, assuming a critical mass adoption would enhance environmental services. Using a framed lab-in-the-field experiment with 588 farmers, we modeled SLUS adoption as a threshold public good game and compared three PES mechanisms: individual payments unconditional on reaching an adoption threshold, collective payments conditional on reaching adoption threshold, and a combined approach incorporating both payment types. We also investigated policy framing effects on adoption decisions and explored prosocial and risk preferences' role in decision-making. Results show only the combined payment scheme successfully achieved the SLUS adoption threshold. When the same payment structure was implemented without explicit explanation of the additional payment, contributions dropped to control group levels, highlighting policy framing's crucial role. Social preferences and risk attitudes showed minimal correlation with adoption decisions, although farmers exhibiting other-regarding preferences in the dictator game contributed more to the threshold public good game. These findings advance our understanding of PES design by demonstrating that combining individual and collective payments can overcome coordination challenges in SLUS adoption, while emphasizing clear communication in program implementation.",
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
    abstract: "Future generations have no agency in today's decisions, making their well-being a defining challenge of our time. Climate change, biodiversity loss, and resource depletion all depend on trade-offs between immediate gains and long-term sustainability. These dilemmas are often attributed to shortsightedness. We show instead that the critical obstacle lies within generations themselves: coordination failures among contemporaries can undermine sustainability even when individuals care about the future. Using a lab-in-the-field intergenerational goods game with a threshold-based regeneration rule, we compare settings with a single decision maker per generation to ones with three contemporaries deciding simultaneously without communication. When individuals act alone, resources are almost always preserved; when contemporaries must coordinate, conservation collapses. Our models explain this pattern by combining intergenerational altruism with beliefs about others' restraint: pessimistic expectations erode altruistic motives, driving overextraction. These insights have direct implications for climate governance and natural resource management, where failures in coordination today can be as detrimental as lack of concern for the future.",
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
    journal: "Under revision in Journal of Economic Psychology · 2026",
    abstract: "There is a long-standing debate as to whether violations of rational choice axioms reflect normative deviations from the theory or simply mistakes. We contribute to this debate by reproducing and replicating Nielsen and Rehbeck's (2022) experimental study, with a new focus on heterogeneity across axioms. We conduct a three-part analysis comprising a direct computational reproduction, a robustness reproduction, and a high-powered preregistered replication (N = 451) focusing on the Independence of Irrelevant Alternatives (IIA). We find robust evidence that individuals express a desire to follow canonical axioms, but perceive violations as mistakes only for a subset of them—specifically, IIA and Transitivity. In contrast, we find no evidence that violations of Independence, First-Order Stochastic Dominance, Branching, or Consistency are perceived as mistakes. We discuss these findings through the lens of cognitive complexity, suggesting that individuals may fail to recognize violations of more demanding axioms even when prompted.",
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
    journal: "Under revision in American Journal of Agricultural Economics · 2026",
    abstract: "We study how spatial connectivity and fragmented ownership affect the management of mobile common-pool resources. We develop a dynamic two-patch model of a mobile renewable resource: it predicts that (i) management efficiency in a given patch declines when the neighboring patch is managed by multiple agents rather than a single owner, and (ii) greater resource mobility amplifies inefficiencies at the global scale, especially under mixed ownership. We test these predictions in a preregistered laboratory experiment with 294 participants by varying mobility rates and ownership structures. Consistent with theory, shared management in one patch reduces efficiency at the local scale (in the adjacent patch) through spillover effects, and higher resource mobility further erodes efficiency at the global scale. Using group extraction trajectories, we identify three robust behavioral patterns: early over-extractors, mid-period preemptive groups, and late preservers. Mixed ownership and higher mobility shift the distribution toward early over-extraction and away from late conservation. Beyond these institutional and ecological effects, cognitive ability is strongly associated with more forward-looking extraction paths and higher payoffs.",
    meta: "Contribution: CTEAW",
    topics: ["sd", "mp"],
    status: "review",
    links: [
      { label: "Working paper", url: "https://hal.inrae.fr/hal-05462551v1", style: "default" },
    ],
  },

  {
    num: "",
    title: "Managing spatially-connected natural resources: Property rights allocation do matter for efficiency, equity and sustainability",
    authors: "Bayle, G.*, N. Quérou, D. Dubois, M. Beaud & M. Willinger",
    journal: "Submitted · 2026",
    meta: "Contribution: CTEAW",
    topics: ["sd", "mp"],
    status: "review",
    links: [],
  },

  // ── ON-GOING PROJECTS ──────────────────────────────────────

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
    title: "Dishonesty: A field experiment on motivations, levers and policies",
    authors: "Bayle, G.* & M.C. Villeval",
    journal: "",
    meta: "Contribution: CTEAW",
    topics: ["pn", "mp"],
    status: "ongoing",
    links: [],
  },

  {
    num: "",
    title: "Political views and discrimination",
    authors: "Bayle, G.*, L. Neyse & M.C. Villeval",
    journal: "",
    meta: "Contribution: CTEAW",
    topics: ["pn"],
    status: "ongoing",
    links: [],
  },

  {
    num: "",
    title: "Detrimental outcomes of geoengineering for African vegetation estimated from volcanic eruption",
    authors: "Kitasho, N.*, C. Corona, A. Bayle*, G. Bayle, S. Di Falco, G. Lynam, S. Guillet, M. Stoffel",
    journal: "",
    meta: "Contribution: CW",
    topics: ["id", "mp"],
    status: "ongoing",
    links: [],
  },

  {
    num: "",
    title: "Gender Bias in Risky Job Assignments: Managerial Decisions and Workers' Responses",
    authors: "Bayle, G., Q. Cavalan & A. Hopfensitz",
    journal: "",
    meta: "",
    topics: ["pn"],
    status: "ongoing",
    links: [],
  },

  {
    num: "",
    title: "Bargaining under social dilemmas and risk",
    authors: "V. Pham*, G. Bayle, C. Senichault & Y. Kamijo",
    journal: "",
    meta: "Contribution: CTEAW",
    topics: ["sd", "pn"],
    status: "ongoing",
    links: [],
  },

];
