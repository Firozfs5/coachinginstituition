export const EXAM_CATEGORIES = [
  {
    id: "govt-karnataka",
    name: "Government & Karnataka Exams",
    kannadaName: "ಕರ್ನಾಟಕ ಸರ್ಕಾರಿ ಹಾಗೂ ನಾಗರಿಕ ಸೇವೆಗಳ ಪರೀಕ್ಷೆಗಳು",
    icon: "ShieldAlert",
    description: "Prestigious administrative, executive, and non-technical state cadres conducted by KPSC and KEA.",
    exams: [
      {
        id: "kas",
        name: "KAS (Karnataka Administrative Service)",
        kannadaName: "ಕರ್ನಾಟಕ ಆಡಳಿತ ಸೇವೆ (ಕೆ.ಎ.ಎಸ್)",
        conductingBody: "KPSC (Karnataka Public Service Commission)",
        eligibility: "Bachelor's Degree in any discipline from a recognized University. Age: 21 to 38 years (with state reservation relaxations).",
        stages: [
          { name: "Prelims", desc: "Objective Paper 1 (General Studies) & Paper 2 (CSAT) - 400 Marks" },
          { name: "Mains", desc: "Descriptive Papers (Kannada, English, GS 1 to 4) - 1250 Marks" },
          { name: "Interview", desc: "Personality Test & Viva Voce - 50 Marks" }
        ],
        overview: "The most prestigious state civil service examination in Karnataka, selecting Assistant Commissioners (Group A), Tahsildars, Commercial Tax Officers, and Assistant Directors.",
        keySubjects: ["Karnataka History & Heritage", "Polity & Constitution", "State Economy & Budget", "Ethics & Public Administration"],
        coachingCourseId: "kas-foundation"
      },
      {
        id: "ias",
        name: "IAS / UPSC Civil Services",
        kannadaName: "ಯುಪಿಎಸ್‌ಸಿ ನಾಗರಿಕ ಸೇವೆಗಳ ಪರೀಕ್ಷೆ (ಐ.ಎ.ಎಸ್ / ಐ.ಪಿ.ಎಸ್)",
        conductingBody: "UPSC (Union Public Service Commission)",
        eligibility: "Graduate in any discipline. Age: 21 to 32 years (Relaxations for OBC/SC/ST).",
        stages: [
          { name: "Prelims", desc: "GS Paper 1 & CSAT (Qualifying 33%)" },
          { name: "Mains", desc: "9 Descriptive Papers (Essay, GS I-IV, Optional I-II, Language Papers)" },
          { name: "Personality Test", desc: "Interview at UPSC Bhavan, New Delhi (275 Marks)" }
        ],
        overview: "India's premier administrative examination for IAS, IPS, IFS, and IRS positions across the nation.",
        keySubjects: ["Indian & World History", "Polity & International Relations", "Economy & Ecology", "Ethics & Analytical Writing"],
        coachingCourseId: "ias-foundation"
      },
      {
        id: "psi",
        name: "PSI (Karnataka Police Sub-Inspector)",
        kannadaName: "ಕರ್ನಾಟಕ ಪೊಲೀಸ್ ಸಬ್-ಇನ್‌ಸ್ಪೆಕ್ಟರ್ (ಪಿ.ಎಸ್.ಐ)",
        conductingBody: "Karnataka State Police (KSP)",
        eligibility: "Any Degree. Age: 21 to 30 years (with category relaxations) + Physical Endurance & Measurement.",
        stages: [
          { name: "PST & ET", desc: "Physical Standard Test & Endurance Test (1600m run, Long Jump, Shotput)" },
          { name: "Paper 1 (Descriptive)", desc: "Essay Writing (20 Marks), Translation (20 Marks), Précis (10 Marks)" },
          { name: "Paper 2 (Objective)", desc: "General Studies & Mental Ability - 150 Marks" }
        ],
        overview: "Direct recruitment for executive Sub-Inspectors (Civil, CAR/DAR, KSISF, Wireless) in Karnataka Police Department.",
        keySubjects: ["English-Kannada Translation", "Essay Formulation", "Indian Constitution", "Mental Ability & Current Affairs"],
        coachingCourseId: "psi-pdo"
      },
      {
        id: "pdo",
        name: "PDO (Panchayat Development Officer)",
        kannadaName: "ಪಂಚಾಯತ್ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿ (ಪಿ.ಡಿ.ಒ)",
        conductingBody: "RDPR / KPSC Karnataka",
        eligibility: "Any Recognized Bachelor's Degree. Age: 18 to 35 years.",
        stages: [
          { name: "Paper 1", desc: "General Knowledge, Samanya Kannada, General English & Computer Literacy - 100 Qs" },
          { name: "Paper 2", desc: "Karnataka Panchayat Raj Act & Rural Development Schemes - 100 Qs" }
        ],
        overview: "Key administrative officer role at Gram Panchayat level responsible for rural governance and welfare implementation.",
        keySubjects: ["Karnataka Gram Swaraj & Panchayat Raj Act 1993", "Rural Schemes (MGNREGA, PMAY)", "Samanya Kannada"],
        coachingCourseId: "psi-pdo"
      },
      {
        id: "fda-sda",
        name: "FDA & SDA (First & Second Division Assistants)",
        kannadaName: "ಪ್ರಥಮ & ದ್ವಿತೀಯ ದರ್ಜೆ ಸಹಾಯಕರು (ಎಫ್.ಡಿ.ಎ / ಎಸ್.ಡಿ.ಎ)",
        conductingBody: "KPSC / KEA Karnataka",
        eligibility: "FDA: Any Degree. SDA: 10+2 / PUC. Age: 18 to 35 years.",
        stages: [
          { name: "Paper 1 (Language)", desc: "Samanya Kannada OR General English - 100 Marks" },
          { name: "Paper 2 (General Studies)", desc: "General Knowledge, State Affairs, History, Constitution & Aptitude - 100 Marks" }
        ],
        overview: "High-volume clerical and administrative entry roles across all state government secretariats and district departments.",
        keySubjects: ["Kannada Grammar (ವ್ಯಾಕರಣ)", "Karnataka Geography & History", "General Science", "Basic Aptitude"],
        coachingCourseId: "fda-sda"
      },
      {
        id: "kpsc-group-c",
        name: "KPSC Group C Non-Technical Posts",
        kannadaName: "ಕೆ.ಪಿ.ಎಸ್.ಸಿ ಗ್ರೂಪ್ 'ಸಿ' ಹುದ್ದೆಗಳು",
        conductingBody: "KPSC Karnataka",
        eligibility: "PUC / Diploma / Degree as per notification. Age: 18 to 35 years.",
        stages: [
          { name: "Paper 1", desc: "General Knowledge & Mental Ability - 100 Marks" },
          { name: "Paper 2", desc: "General Kannada (35), General English (35) & Computer Awareness (30) - 100 Marks" }
        ],
        overview: "Recruitment for Revenue Inspectors, Bill Collectors, Hostel Wardens, Junior Assistants and Accounts Clerks.",
        keySubjects: ["Samanya Kannada", "Basic Computer Knowledge", "General Studies", "Reasoning"],
        coachingCourseId: "fda-sda"
      },
      {
        id: "kea-exams",
        name: "KEA Recruitment Examinations",
        kannadaName: "ಕೆ.ಇ.ಎ ವಿವಿಧ ನಿಗಮ ಮಂಡಳಿಗಳ ನೇಮಕಾತಿ ಪರೀಕ್ಷೆಗಳು",
        conductingBody: "KEA (Karnataka Examinations Authority)",
        eligibility: "SSLC / PUC / Degree / Diploma based on specific Corporation post.",
        stages: [
          { name: "Single Stage OMR Examination", desc: "General Knowledge, Kannada, English, Computer Knowledge & Logical Aptitude" }
        ],
        overview: "Direct recruitment tests for Karnataka State Board & Corporation posts such as KEA, KPTCL, BESCOM, Food Corporation and Slum Clearance Board.",
        keySubjects: ["Karnataka Administration", "Language Proficiency", "Aptitude", "Current Events"],
        coachingCourseId: "fda-sda"
      }
    ]
  },
  {
    id: "banking-railway",
    name: "Banking & Railway Exams",
    kannadaName: "ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ರೈಲ್ವೆ ನೇಮಕಾತಿ ಪರೀಕ್ಷೆಗಳು",
    icon: "Landmark",
    description: "High-frequency nationwide opportunities in public sector banks and Indian Railways.",
    exams: [
      {
        id: "ibps-po-clerk",
        name: "IBPS PO & Clerk (Nationalized Banks)",
        kannadaName: "ಐ.ಬಿ.ಪಿ.ಎಸ್ ಪ್ರೊಬೇಷನರಿ ಅಧಿಕಾರಿ & ಕ್ಲಾರ್ಕ್",
        conductingBody: "IBPS (Institute of Banking Personnel Selection)",
        eligibility: "Any Degree. Age: 20-30 (PO), 20-28 (Clerk).",
        stages: [
          { name: "Prelims", desc: "Speed CBT: Quant (35), Reasoning (35), English (30) - 60 Minutes" },
          { name: "Mains", desc: "High-level Reasoning, DI, Banking Awareness, English & Descriptive (PO)" },
          { name: "Interview", desc: "PO Level Interview" }
        ],
        overview: "Recruitment across 11 nationalized public sector banks (Canara Bank, Union Bank, Bank of Baroda, etc.).",
        keySubjects: ["Data Interpretation", "Seating Arrangement Puzzles", "Banking Awareness", "Reading Comprehension"],
        coachingCourseId: "banking-ibps"
      },
      {
        id: "rrb-banking",
        name: "IBPS RRB (Karnataka Gramin Bank)",
        kannadaName: "ಕರ್ನಾಟಕ ಗ್ರಾಮೀಣ ಬ್ಯಾಂಕ್ (ಆರ್.ಆರ್.ಬಿ)",
        conductingBody: "IBPS",
        eligibility: "Any Degree with local language (Kannada) proficiency.",
        stages: [
          { name: "Prelims", desc: "Reasoning (40) + Quantitative Aptitude (40) - 45 Minutes" },
          { name: "Mains", desc: "Reasoning, Numerical Ability, Kannada/English, General Awareness, Computer" }
        ],
        overview: "Excellent opportunity for Karnataka aspirants to work in local rural and semi-urban bank branches with Kannada paper option.",
        keySubjects: ["Speed Maths", "Reasoning", "Computer Knowledge", "Rural Banking GK"],
        coachingCourseId: "banking-ibps"
      },
      {
        id: "rrb-ntpc",
        name: "RRB NTPC (Non-Technical Popular Categories)",
        kannadaName: "ರೈಲ್ವೆ ಎನ್.ಟಿ.ಪಿ.ಸಿ ನೇಮಕಾತಿ",
        conductingBody: "Railway Recruitment Boards (RRB)",
        eligibility: "12th Pass or Any Degree based on post. Age: 18-33 years.",
        stages: [
          { name: "CBT 1", desc: "General Awareness (40), Maths (30), Reasoning (30) - 90 Minutes" },
          { name: "CBT 2", desc: "Advanced General Awareness (50), Maths (35), Reasoning (35)" },
          { name: "Skill Test / CBAT", desc: "Typing Test or Aptitude Test based on Station Master / Clerk posts" }
        ],
        overview: "Lucrative Indian Railways central posts like Station Master, Goods Guard, Commercial Apprentice, and Traffic Assistant.",
        keySubjects: ["General Science", "Static GK & Railways", "Arithmetic", "Logical Reasoning"],
        coachingCourseId: "rrb-railway"
      },
      {
        id: "rrb-group-d",
        name: "RRB Group D & ALP",
        kannadaName: "ರೈಲ್ವೆ ಗ್ರೂಪ್ 'ಡಿ' ಮತ್ತು ಅಸಿಸ್ಟೆಂಟ್ ಲೋಕೋ ಪೈಲಟ್",
        conductingBody: "Railway Recruitment Cell / RRB",
        eligibility: "10th Pass + ITI or 10th Pass. Age: 18-33 years.",
        stages: [
          { name: "Computer Based Test (CBT)", desc: "Science (25), Maths (25), Reasoning (30), Current Affairs (20)" },
          { name: "Physical Efficiency Test (PET)", desc: "Weight carrying & Running benchmarks" }
        ],
        overview: "Large-scale railway recruitment across South Western Railway (Hubballi / Bangalore divisions) and all zones.",
        keySubjects: ["Physics, Chemistry, Biology (NCERT 10th)", "Basic Mathematics", "Reasoning"],
        coachingCourseId: "rrb-railway"
      }
    ]
  },
  {
    id: "defence-security",
    name: "Defence & Security Exams",
    kannadaName: "ರಕ್ಷಣಾ ಪಡೆಗಳು ಮತ್ತು ಅರೆಸೇನಾ ಪಡೆಗಳ ಪರೀಕ್ಷೆಗಳು",
    icon: "Crosshair",
    description: "Prestigious officer and cadre recruitments in Armed Forces, Paramilitary and Central Police.",
    exams: [
      {
        id: "nda",
        name: "NDA (National Defence Academy)",
        kannadaName: "ರಾಷ್ಟ್ರೀಯ ರಕ್ಷಣಾ ಅಕಾಡೆಮಿ (ಎನ್.ಡಿ.ಎ)",
        conductingBody: "UPSC",
        eligibility: "12th Appearing or Passed (Maths & Physics for Airforce/Navy). Unmarried, Age: 16.5 to 19.5 years.",
        stages: [
          { name: "Written Exam", desc: "Maths (300 Marks) + General Ability Test (GAT - 600 Marks)" },
          { name: "SSB Interview", desc: "5-Day Psychological, Group Testing & Personal Interview (900 Marks)" }
        ],
        overview: "Entry into premier joint services training institution for Army, Navy, and Air Force officers.",
        keySubjects: ["11th/12th Mathematics", "English Grammar", "Physics, Chemistry, World History"],
        coachingCourseId: "defence-nda-cds"
      },
      {
        id: "cds",
        name: "CDS (Combined Defence Services)",
        kannadaName: "ಕಂಬೈನ್ಡ್ ಡಿಫೆನ್ಸ್ ಸರ್ವೀಸಸ್ (ಸಿ.ಡಿ.ಎಸ್)",
        conductingBody: "UPSC",
        eligibility: "Graduation (Engineering for Airforce/Naval). Age: 19 to 24 years.",
        stages: [
          { name: "Written Exam", desc: "English (100), General Knowledge (100), Elementary Maths (100 - except OTA)" },
          { name: "SSB Interview", desc: "5-Day Officer Selection Assessment" }
        ],
        overview: "Written examination for entry into IMA Dehradun, INA Ezhimala, AFA Hyderabad, and OTA Chennai.",
        keySubjects: ["Elementary Mathematics", "English Comprehension", "General Science & Defense Affairs"],
        coachingCourseId: "defence-nda-cds"
      },
      {
        id: "ssc-gd-crpf",
        name: "SSC GD Constable & CRPF / CISF / BSF",
        kannadaName: "ಎಸ್.ಎಸ್.ಸಿ ಜಿ.ಡಿ ಕಾನ್‌ಸ್ಟೇಬಲ್ & ಸಿ.ಆರ್.ಪಿ.ಎಫ್",
        conductingBody: "SSC (Staff Selection Commission)",
        eligibility: "10th Pass. Age: 18 to 23 years.",
        stages: [
          { name: "CBT Exam", desc: "Reasoning (40), GK (40), Maths (40), Hindi/English (40) - Total 160 Marks" },
          { name: "PST / PET", desc: "Physical Standard and Running (5km for male, 1.6km for female)" }
        ],
        overview: "Recruitment for Paramilitary Forces (CRPF, BSF, CISF, ITBP, SSB, Assam Rifles). Conducted in Kannada as well.",
        keySubjects: ["General Intelligence", "Basic Arithmetic", "General Knowledge", "Language"],
        coachingCourseId: "defence-nda-cds"
      },
      {
        id: "lic-insurance",
        name: "LIC ADO / AAO & Insurance Exams",
        kannadaName: "ಎಲ್.ಐ.ಸಿ ಅಪ್ರೆಂಟಿಸ್ ಡೆವಲಪ್ಮೆಂಟ್ ಆಫೀಸರ್ & ಎ.ಎ.ಒ",
        conductingBody: "Life Insurance Corporation of India (LIC)",
        eligibility: "Bachelor's Degree in any discipline. Age: 21 to 30 years.",
        stages: [
          { name: "Prelims", desc: "Reasoning, Numerical Ability & English Language" },
          { name: "Mains", desc: "Reasoning, GK, Financial & Insurance Awareness + Descriptive" }
        ],
        overview: "Executive and administrative officer roles in India's leading public insurance corporations.",
        keySubjects: ["Insurance Market Principles", "Financial Awareness", "Reasoning Ability"],
        coachingCourseId: "banking-ibps"
      }
    ]
  },
  {
    id: "teaching",
    name: "Teaching Examinations",
    kannadaName: "ಶಿಕ್ಷಕರ ಅರ್ಹತಾ ಮತ್ತು ನೇಮಕಾತಿ ಪರೀಕ್ಷೆಗಳು",
    icon: "GraduationCap",
    description: "Mandatory qualification and recruitment examinations for primary and high school teachers in Karnataka.",
    exams: [
      {
        id: "karnataka-tet",
        name: "K-TET (Karnataka Teacher Eligibility Test)",
        kannadaName: "ಕರ್ನಾಟಕ ಶಿಕ್ಷಕರ ಅರ್ಹತಾ ಪರೀಕ್ಷೆ (ಕೆ-ಟಿಇಟಿ)",
        conductingBody: "School Education Department, Karnataka (CACL)",
        eligibility: "Paper 1: PUC + D.El.Ed / D.Ed. Paper 2: Degree + B.Ed. Qualifying score: 60% (55% for reserved).",
        stages: [
          { name: "Paper 1 (Class 1 to 5)", desc: "Child Development (30), Kannada (30), English (30), Maths (30), EVS (30) - 150 Qs" },
          { name: "Paper 2 (Class 6 to 8)", desc: "Child Development (30), Kannada (30), English (30), Social Science OR Maths-Science (60)" }
        ],
        overview: "Mandatory qualifying examination for all aspiring government and private school teachers in Karnataka.",
        keySubjects: ["Child Pedagogy & Psychology", "Samanya Kannada & Vyakarana", "Social Studies Content", "Maths & Science"],
        coachingCourseId: "tet-ctet"
      },
      {
        id: "ctet",
        name: "CTET (Central Teacher Eligibility Test)",
        kannadaName: "ಕೇಂದ್ರೀಯ ಶಿಕ್ಷಕರ ಅರ್ಹತಾ ಪರೀಕ್ಷೆ (ಸಿ-ಟಿಇಟಿ)",
        conductingBody: "CBSE (Central Board of Secondary Education)",
        eligibility: "D.El.Ed or B.Ed with minimum qualifying marks.",
        stages: [
          { name: "Paper 1 & Paper 2", desc: "150 Questions OMR/CBT with no negative marking across Pedagogy and Subject streams" }
        ],
        overview: "National benchmark qualification for Kendriya Vidyalayas (KVS), Navodaya Vidyalayas (NVS), and CBSE schools nationwide.",
        keySubjects: ["Pedagogical Concepts", "Language Comprehension", "Mathematics & EVS"],
        coachingCourseId: "tet-ctet"
      }
    ]
  },
  {
    id: "entrance",
    name: "Entrance & Professional Exams",
    kannadaName: "ಪ್ರವೇಶ ಮತ್ತು ವೃತ್ತಿಪರ ಪರೀಕ್ಷೆಗಳು",
    icon: "BookOpenCheck",
    description: "High-stakes entrance tests for postgraduate master's degrees, premier law schools and chartered accountancy.",
    exams: [
      {
        id: "pgcet",
        name: "Karnataka PGCET (MBA / MCA)",
        kannadaName: "ಕರ್ನಾಟಕ ಪಿ.ಜಿ-ಸೆಟ್ ಪ್ರವೇಶ ಪರೀಕ್ಷೆ",
        conductingBody: "KEA (Karnataka Examinations Authority)",
        eligibility: "Bachelor's degree of minimum 3 years duration with minimum 50% marks (45% for reserved).",
        stages: [
          { name: "Single Stage Exam", desc: "100 Multiple Choice Questions (100 Marks) - 120 Minutes" }
        ],
        overview: "State entrance test determining government merit seats in MBA & MCA programs across top universities and autonomous B-schools in Karnataka.",
        keySubjects: ["Proficiency in English", "General Knowledge", "Reasoning and General Intelligence", "Quantitative Analysis"],
        coachingCourseId: "pgcet-entrance"
      },
      {
        id: "clat",
        name: "CLAT (Common Law Admission Test)",
        kannadaName: "ಕ್ಲಾಟ್ ರಾಷ್ಟ್ರೀಯ ಕಾನೂನು ಪ್ರವೇಶ ಪರೀಕ್ಷೆ",
        conductingBody: "Consortium of National Law Universities (NLUs)",
        eligibility: "10+2 with 45% marks (40% for SC/ST).",
        stages: [
          { name: "Pen & Paper Test", desc: "120 Comprehension-based Multiple Choice Questions - 120 Minutes" }
        ],
        overview: "The gateway exam for 5-Year Integrated BA LLB / BBA LLB programs across 24 prestigious National Law Universities in India.",
        keySubjects: ["English Language", "Current Affairs & GK", "Legal Reasoning", "Logical Reasoning", "Quantitative Techniques"],
        coachingCourseId: "clat-ca-foundation"
      },
      {
        id: "ca-foundation",
        name: "ICAI CA Foundation",
        kannadaName: "ಸಿ.ಎ ಫೌಂಡೇಶನ್ ಪರೀಕ್ಷೆ (ICAI)",
        conductingBody: "The Institute of Chartered Accountants of India (ICAI)",
        eligibility: "Class 12th passed / registered with ICAI Board of Studies.",
        stages: [
          { name: "Paper 1 & 2 (Subjective)", desc: "Accounting & Business Laws" },
          { name: "Paper 3 & 4 (Objective)", desc: "Quantitative Aptitude & Business Economics" }
        ],
        overview: "The entry-level examination for India's prestigious Chartered Accountancy designation.",
        keySubjects: ["Financial Accounting Principles", "Business Laws & Commercial Knowledge", "Business Mathematics & Statistics", "Business Economics"],
        coachingCourseId: "clat-ca-foundation"
      }
    ]
  }
];

export const EXAMS_DATA = EXAM_CATEGORIES.flatMap((category) => {
  category.count = category.exams.length;
  return category.exams.map((exam) => ({
    ...exam,
    slug: exam.slug || `${exam.id}-exam`,
    category: category.id,
    categoryName: category.name,
    categoryIcon: category.icon,
    authority: exam.conductingBody || exam.authority || 'State / Central Agency',
    shortDesc: exam.overview || exam.shortDesc,
    fullDesc: exam.overview || exam.fullDesc,
    keyTopics: exam.keySubjects || exam.keyTopics || [],
    recommendedCourse: exam.coachingCourseId || exam.recommendedCourse || 'kas-ias-foundation'
  }));
});

export default EXAMS_DATA;
