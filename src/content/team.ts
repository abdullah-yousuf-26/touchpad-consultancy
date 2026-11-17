export type Consultant = {
  slug: string;
  name: string;
  role: string;
  image: string;
  summary: string;
  biography: string[];
  expertise: string[];
  education: string[];
  assignments: {
    title: string;
    description: string;
  }[];
  socials: {
    label: string;
    href: string;
  }[];
};

export const consultants: Consultant[] = [
  {
    slug: "amreen-afrosa",

    name: "Amreen Afrosa",

    role: "Team Lead – Consulting & Advisory Services",

    image: "/assets/team/amreen-afrosa.jpeg",

    summary:
      "Development professional specializing in grant proposals, research, monitoring and evaluation, donor coordination, and safeguarding.",

    biography: [
      "Amreen Afrosa leads Consulting & Advisory Services at TouchPad Consultancy. Her responsibilities include project planning, assignment delivery, quality assurance, coordination of multidisciplinary teams, and client and partner relationships.",

      "Her professional background includes grant writing, monitoring and evaluation, communications, and program documentation at Good Neighbors Bangladesh. She has supported the development of project proposals, concept notes, budgets, and funding application materials, including background research and feasibility and sustainability assessments.",

      "Her proposal-development experience includes coordination with international support offices and contributions to submissions for UN agencies, FCDO, USAID, Japan MOFA, and the Embassy of Japan.",

      "As a National Safeguarding Focal Point, she facilitated PSEAH training and awareness activities, reviewed safeguarding policies, promoted safe programming, and led teams investigating SEAH incidents. Her earlier experience also includes research and literature review with SED Foundation and teaching Bangladesh Studies at the European University of Bangladesh.",
    ],

    expertise: [
      "Grant Proposal Development",
      "Research & Analytical Studies",
      "Project Feasibility & Sustainability",
      "Monitoring & Evaluation",
      "Donor Coordination",
      "Project Documentation & Reporting",
      "PSEAH & Safeguarding",
      "SEAH Investigations",
      "Stakeholder Engagement",
      "Data & Information Management",
    ],

    education: [
      "Professional Masters in International Relations — University of Dhaka, 2018",
      "Bachelor of Social Science in Political Science — Jagannath University, 2015",
      "Foundations of SEAH Investigations, Tier 1 — CHS Alliance, 2024",
      "PSEA Training of Trainers: Saying No to Sexual Misconduct — PSEA Network Cox’s Bazar, 2024",
      "Grant Acquisition and Management — Good Neighbors Bangladesh, 2023",
      "Training on Local Fundraising — Good Neighbors Bangladesh, Bangkok, 2025",
    ],

    assignments: [
      {
        title: "Grant Proposal & Funding Application Support",
        description:
          "Developed proposals, concept notes, budgets, and supporting documentation, with background research and donor coordination through the Grant Writing Team at Good Neighbors Bangladesh.",
      },
      {
        title: "Safeguarding Training & Investigation Support",
        description:
          "Facilitated PSEAH awareness and training, reviewed relevant policies, and led SEAH investigation teams as National Safeguarding Focal Point.",
      },
      {
        title: "Monitoring, Documentation & Reporting",
        description:
          "Supported project monitoring, program data management, evaluation activities, reporting, and documentation of program outcomes.",
      },
    ],

    // Add her approved professional links when available.
            socials: [
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/amreen-afrosa-402069172/",
        },
        ],
  },

  {
    slug: "fariha-abedin",

    name: "Fariha Abedin",

    // Expertise description, not a confirmed TouchPad job title.
    role: "Adult Education, Gender & Community Advocacy",

    image: "/assets/team/fariha-abedin.jpeg",

    summary:
      "Educator and nonprofit professional with experience in university teaching, gender and social justice research, inclusive learning, and community advocacy.",

    biography: [
      "Fariha Abedin combines experience in adult education, research, training development, and community advocacy across Bangladesh and Canada. Her work emphasizes accessible communication, inclusion, and respect for lived experience.",

      "Her Canadian experience includes supporting women facing gender-based violence, housing insecurity, and other challenges at YWCA Hamilton. She has assisted participants with applications, appointments, referrals, and access to community resources while maintaining confidential documentation.",

      "Her work at Burlington Children’s Centre, Kids and Company includes child education, participation in EDI initiatives, documentation, and communication with families and allied professionals. At Mission Services in Hamilton, she developed anti-racism and anti-oppression training materials through research, interviews, and collaboration.",

      "Previously, she served as Senior Lecturer, Student Counsellor, and EDI Committee Member at East West University. She taught law, developed accessible teaching materials, provided academic guidance, and coordinated student and volunteer activities.",

    ],

    expertise: [
      "Adult Education & Facilitation",
      "Training & Learning Resource Development",
      "Gender & Social Justice",
      "Equity, Diversity & Inclusion",
      "Anti-Racism & Anti-Oppression",
      "Research & Knowledge Translation",
      "Community Engagement & Advocacy",
      "Program & Event Coordination",
      "Legal Research & Human Rights",
      "Volunteer Leadership",
    ],

    education: [
      "Master of Arts in Gender and Social Justice — McMaster University, 2020–2021",
      "Master of Laws (LLM) — University of Dhaka, 2013–2014",
      "Bachelor of Laws (LLB) — University of Dhaka, 2008–2012",
      "Applied Suicide Intervention Skills Training (ASIST), 2025",
      "Gender Diversity Training, 2024",
      "Nonviolent Crisis Intervention, 2022",
      "Equity Diversity and Inclusion Training , 2021",
    ],

    assignments: [
      {
        title: "Anti-Racism & Anti-Oppression Learning Resources",
        description:
          "Developed training materials, presentations, and reports for staff and community members at Mission Services in Hamilton, using research, interviews, and mentor input.",
      },
      {
        title: "University Teaching & Student Support",
        description:
          "Taught law and human rights concepts, prepared accessible learning materials, provided academic guidance, and coordinated student activities at East West University.",
      },
      {
        title: "Gender, Climate & Environmental Research",
        description:
          "Contributed to research, event organization, facilitation, and volunteer coordination through SED Foundation and the East West University Green Icon Chapter.",
      },
    ],

    // Add her approved professional links when available.
    socials: [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fariha-abedin-211742a3/",
  },
],
  },
];

export function getConsultant(slug: string) {
  return consultants.find(
    (consultant) => consultant.slug === slug
  );
}