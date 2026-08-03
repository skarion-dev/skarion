import PathwayTemplate from "@/components/Pathways/PathwayTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology & Data — Skarion Career Pathway",
  description:
    "Break into software engineering, data analytics, QA, cloud systems, cybersecurity, and applied AI. Skarion targets specialized tech roles where international talent is in demand.",
};

const ICON = (d: string) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d={d}
      stroke="#122461"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TechnologyDataPage() {
  return (
    <PathwayTemplate
      id="technology-data"
      title="Technology & Data"
      subtitle="Software, analytics, cloud, and cybersecurity roles in specialized industries — where the competition is lower and the demand is real."
      heroDescription="The tech industry is saturated at the generalist level, but specialized niches — GIS automation, industry-specific data pipelines, infrastructure tech, and applied AI — are underserved. We position you for roles where your technical skills meet genuine employer need, not just another applicant in a stack of thousands."
      stats={[
        { value: "25+", label: "Tech placements" },
        { value: "6+", label: "Industry verticals" },
        { value: "$65K–$95K", label: "Typical starting salary" },
        { value: "100%", label: "Remote-friendly roles" },
      ]}
      coreAreas={[
        {
          icon: ICON(
            "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ),
          title: "Software & Backend Development",
          description:
            "Build production-ready backend services, APIs, and automation tools. Focus on languages and frameworks that specialized employers actually hire for — not just tutorial stacks.",
        },
        {
          icon: ICON(
            "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ),
          title: "Data & Business Analytics",
          description:
            "Transform raw data into actionable insights. Learn SQL, Python, and BI tools like Power BI and Tableau — applied to real business contexts, not academic exercises.",
        },
        {
          icon: ICON(
            "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ),
          title: "GIS Automation & Development",
          description:
            "Automate geospatial workflows with Python, arcpy, and FME. Build tools that eliminate manual GIS processes for utilities, telecom, and government clients.",
        },
        {
          icon: ICON(
            "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ),
          title: "Cloud & Cybersecurity",
          description:
            "Deploy and secure cloud infrastructure on AWS, Azure, or GCP. Build security frameworks, manage IAM, and implement compliance standards for enterprise clients.",
        },
        {
          icon: ICON(
            "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          ),
          title: "QA & Test Engineering",
          description:
            "Design test strategies, build automation frameworks with Selenium/Cypress, and ensure software quality for mission-critical systems in regulated industries.",
        },
        {
          icon: ICON(
            "M13 10V3L4 14h7v7l9-11h-7z"
          ),
          title: "Applied AI & Machine Learning",
          description:
            "Apply AI/ML to industry-specific problems — predictive maintenance, document classification, spatial analytics — where domain knowledge is as important as the algorithms.",
        },
      ]}
      roles={[
        {
          title: "Data Analyst / BI Analyst",
          salary: "$60K – $80K",
          description:
            "Build dashboards, run SQL queries, and deliver data-driven insights that inform business decisions across operations, finance, and engineering teams.",
        },
        {
          title: "Backend Software Engineer",
          salary: "$75K – $100K",
          description:
            "Design and build REST APIs, microservices, and data pipelines using Python, Java, or Node.js for specialized industry applications.",
        },
        {
          title: "QA / Automation Engineer",
          salary: "$65K – $85K",
          description:
            "Create and maintain test automation frameworks, write test plans, and ensure software reliability for enterprise and infrastructure tech products.",
        },
        {
          title: "Cloud Systems Administrator",
          salary: "$70K – $90K",
          description:
            "Manage cloud infrastructure on AWS/Azure, handle CI/CD pipelines, monitor system health, and ensure security compliance.",
        },
        {
          title: "GIS Developer",
          salary: "$65K – $85K",
          description:
            "Build custom GIS tools, automate spatial workflows, and develop web mapping applications for utility, telecom, and government clients.",
        },
        {
          title: "Cybersecurity Analyst",
          salary: "$70K – $95K",
          description:
            "Monitor security events, conduct vulnerability assessments, manage IAM policies, and implement security frameworks for enterprise environments.",
        },
      ]}
      skillGroups={[
        {
          category: "Programming Languages",
          skills: [
            "Python",
            "JavaScript / TypeScript",
            "Java",
            "SQL",
            "R",
            "Bash / Shell",
          ],
        },
        {
          category: "Data & Analytics",
          skills: [
            "Power BI",
            "Tableau",
            "Pandas / NumPy",
            "Apache Spark",
            "ETL Pipelines",
            "Data Modeling",
          ],
        },
        {
          category: "Cloud & DevOps",
          skills: [
            "AWS",
            "Azure",
            "Docker",
            "Kubernetes",
            "Terraform",
            "CI/CD (Jenkins / GitHub Actions)",
          ],
        },
        {
          category: "Testing & QA",
          skills: [
            "Selenium",
            "Cypress",
            "Jest",
            "Postman",
            "JMeter",
            "Test Strategy Design",
          ],
        },
        {
          category: "Security",
          skills: [
            "IAM / RBAC",
            "SIEM Tools",
            "Vulnerability Scanning",
            "NIST / SOC 2",
            "Network Security",
          ],
        },
        {
          category: "Frameworks & Tools",
          skills: [
            "React / Next.js",
            "Node.js",
            "Django / Flask",
            "REST APIs",
            "GraphQL",
            "Git",
          ],
        },
      ]}
      steps={[
        {
          step: "01",
          title: "Free Technical Assessment",
          description:
            "We evaluate your programming skills, technical background, and career goals to identify the specific niche where you'll have the best shot at placement.",
        },
        {
          step: "02",
          title: "Focused Skill Building",
          description:
            "Targeted training on the exact tools, frameworks, and workflows your target employers use — no filler courses, just what gets you hired.",
        },
        {
          step: "03",
          title: "Portfolio & Profile Positioning",
          description:
            "We build your GitHub portfolio, optimize your LinkedIn, rewrite your resume for ATS systems, and prepare you for technical interviews.",
        },
        {
          step: "04",
          title: "Managed Job Campaign",
          description:
            "We run targeted applications, leverage our employer network, prepare you for each interview, and negotiate offers — you pay only after placement.",
        },
      ]}
      idealFor={[
        "You have a CS, IT, data science, or related technical degree — from any country.",
        "You're an international graduate on OPT or STEM OPT looking for your first U.S. tech role.",
        "You have programming skills but need to target a specific niche rather than competing in the general market.",
        "You want to work in tech but in a less-saturated vertical — infrastructure tech, GIS, or specialized enterprise software.",
        "You're ready to invest in focused training and want a team handling your job search and applications.",
      ]}
      faqs={[
        {
          question: "Do I need a computer science degree?",
          answer:
            "Not always. We've placed candidates with backgrounds in engineering, mathematics, GIS, and other technical fields. What matters is your ability to learn and apply technical skills — we assess this during your free consultation.",
        },
        {
          question: "Is this for junior or senior roles?",
          answer:
            "Primarily entry-level to mid-level positions. If you're a senior engineer, this pathway may not be the right fit — but we'll be honest about that during your assessment.",
        },
        {
          question: "Can I choose my specialization?",
          answer:
            "We'll recommend the best niche based on your background and market demand. You'll have input, but our goal is to place you — so we focus on where the demand is highest for your profile.",
        },
        {
          question: "Are remote roles available?",
          answer:
            "Many tech roles in our network offer remote or hybrid options. We'll match you based on your preferences and what employers are offering — but flexibility with location increases your options significantly.",
        },
        {
          question: "What if I already have work experience?",
          answer:
            "Great — that often accelerates your timeline. We'll assess what gaps (if any) need closing and may move you directly into profile positioning and job search.",
        },
        {
          question: "How is this different from a bootcamp?",
          answer:
            "Bootcamps teach skills but leave you to job search alone. We provide training AND run your entire job campaign — targeted applications, interview prep, and employer introductions. And you don't pay the placement fee until you're hired.",
        },
      ]}
      otherPathways={[
        {
          title: "Engineering & Infrastructure",
          href: "/pathways/engineering-infrastructure",
          description:
            "Telecom & OSP, GIS, civil infrastructure, CAD, permitting, and construction engineering — our flagship pathway with the most placements.",
        },
        {
          title: "Business & Operations",
          href: "/pathways/business-operations",
          description:
            "Accounting, financial analysis, business systems, supply chain coordination, and corporate operations roles.",
        },
      ]}
    />
  );
}
