// ============================================================
//  TEACHING DATA FILE
//  Edit this file to add, remove or update teaching entries.
//  Do NOT edit teaching.html — it reads from here automatically.
// ============================================================

// --- ROLE DEFINITIONS ---
// Display order follows key order here.
const ROLES = {
  lecturer:  { label: "Lecturer" },
  assistant: { label: "Teaching Assistant" },
};

// --- COURSES ---
// Each course has:
//   title    : course title
//   role     : one key from ROLES above
//   level    : e.g. "PhD students", "Master Degree", "Bachelor Degree"
//   years    : e.g. "2022–2026"
//   context  : who runs the course, institution (optional)
//   description : full text shown in the expanded card (HTML allowed)
//
// DISPLAY ORDER: courses appear in the order listed here, grouped by role.

const COURSES = [

  // ── LECTURER ───────────────────────────────────────────────

  {
    title: "Machine Learning and Water Management",
    role: "lecturer",
    level: "PhD students",
    years: "2022–2026",
    context: 'Invited lecturer in the PhD students-level course "Games and economic models for the analysis of common pool resources (CPR). Applications to water management" by Katrin Erdlenbuch and Stefano Farolfi.',
    description: "I introduce Machine Learning, focusing on Reinforcement Learning. We explore how these methodologies can be used to study complex economic systems, such as water management.",
  },

  {
    title: "Replicability and Open Science",
    role: "lecturer",
    level: "PhD students",
    years: "2024–2025",
    context: "Invited lecturer in the Doctoral College of Montpellier and the University of Montpellier.",
    description: `<p>Session 1: We explore the challenges and importance of reproducibility in research through the lens of a young researcher, using examples of unreproducible studies. We discuss strategies for young researchers to enhance the quality and validation of both new and existing studies, highlighting the roles of preregistration and ethics committees. We conclude by considering how early-career scientists can actively participate in and adapt to new standards in the replication movement.</p>
<p style="margin-top:0.75rem">Session 2: Invited lecture to produce a video diffused to PhD students and researchers of the University of Montpellier.</p>`,
  },

  {
    title: "Social Dilemmas in Experimental Economics",
    role: "lecturer",
    level: "Master Degree",
    years: "2023–2024",
    context: 'Invited lecturer in the Master Degree course "Topics in Experimental and Behavioral Economics" by Marc Willinger.',
    description: "I introduce Social Dilemmas in Public good games and Common Pool resources and a variety of mechanisms studied in Experimental Economics: Punishment, Redistribution, Compensation, and Approval Mechanisms.",
  },

  // ── TEACHING ASSISTANT ─────────────────────────────────────

  {
    title: "Data Analysis and Factor Analysis",
    role: "assistant",
    level: "Bachelor Degree",
    years: "2022–2023",
    context: "Teaching Assistant for the Bachelor degree course of Pr. Thierry Blayac, University of Montpellier.",
    description: "We studied theoretically and empirically the use of Factor Analysis (PCA, MCA, Determinant and Hierarchical Analyses) and K-means.",
  },

];
