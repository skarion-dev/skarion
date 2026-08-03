import PathwayTemplate from "@/components/Pathways/PathwayTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business & Operations — Skarion Career Pathway",
  description:
    "Break into accounting, financial analysis, business systems, supply chain, and corporate operations. Skarion targets specialized business roles where international talent is in demand.",
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

export default function BusinessOperationsPage() {
  return (
    <PathwayTemplate
      id="business-operations"
      title="Business & Operations"
      subtitle="Accounting, finance, operations, and supply chain roles — in industries where structured thinkers and detail-oriented professionals thrive."
      heroDescription="Many international graduates with business, accounting, or MIS degrees struggle to break into U.S. corporate roles because they're competing in oversaturated general markets. We target specific operational niches — financial analysis for infrastructure firms, supply chain coordination for manufacturing, ERP administration — where your analytical background has real leverage."
      stats={[
        { value: "15+", label: "Professionals placed" },
        { value: "8+", label: "Industry sectors" },
        { value: "$50K–$75K", label: "Typical starting salary" },
        { value: "Growing", label: "Employer demand" },
      ]}
      coreAreas={[
        {
          icon: ICON(
            "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ),
          title: "Accounting & Financial Reporting",
          description:
            "Manage accounts payable/receivable, reconcile general ledgers, prepare financial statements, and support month-end close processes using U.S. GAAP standards.",
        },
        {
          icon: ICON(
            "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ),
          title: "Financial & Operational Analysis",
          description:
            "Build financial models, perform variance analysis, create forecasts, and deliver insights that drive operational decisions across departments and business units.",
        },
        {
          icon: ICON(
            "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          ),
          title: "Business Systems & MIS",
          description:
            "Administer and optimize ERP systems (SAP, Oracle, NetSuite), manage business intelligence tools, and bridge the gap between IT and business operations teams.",
        },
        {
          icon: ICON(
            "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          ),
          title: "Supply Chain & Logistics",
          description:
            "Coordinate procurement, inventory management, and logistics operations. Optimize supply chain workflows using data analysis and process improvement methodologies.",
        },
        {
          icon: ICON(
            "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ),
          title: "Project Coordination",
          description:
            "Support project managers with scheduling, resource tracking, status reporting, and stakeholder communications across engineering and operations teams.",
        },
        {
          icon: ICON(
            "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          ),
          title: "Corporate Operations",
          description:
            "Support executive teams with process improvement, cross-functional coordination, compliance tracking, and operational reporting in mid-size and enterprise organizations.",
        },
      ]}
      roles={[
        {
          title: "Financial Analyst",
          salary: "$55K – $75K",
          description:
            "Build financial models, perform budgeting and forecasting, conduct variance analysis, and present insights to leadership teams.",
        },
        {
          title: "Operations Coordinator",
          salary: "$45K – $60K",
          description:
            "Manage day-to-day operational workflows, track KPIs, coordinate between departments, and drive process improvements across business units.",
        },
        {
          title: "Supply Chain Analyst",
          salary: "$55K – $70K",
          description:
            "Analyze procurement data, optimize inventory levels, manage vendor relationships, and improve logistics efficiency using data-driven approaches.",
        },
        {
          title: "Project Coordinator",
          salary: "$50K – $65K",
          description:
            "Support project delivery by tracking timelines, managing documentation, coordinating resources, and facilitating team communications.",
        },
        {
          title: "Business Systems Analyst",
          salary: "$60K – $80K",
          description:
            "Bridge business needs and technology solutions by gathering requirements, configuring ERP systems, and optimizing business workflows.",
        },
        {
          title: "Junior Accountant",
          salary: "$48K – $62K",
          description:
            "Handle accounts payable/receivable, reconcile bank statements, assist with month-end close, and prepare journal entries under U.S. GAAP.",
        },
      ]}
      skillGroups={[
        {
          category: "Finance & Accounting",
          skills: [
            "U.S. GAAP",
            "Financial Modeling",
            "Budgeting & Forecasting",
            "Accounts Payable / Receivable",
            "QuickBooks / Sage",
          ],
        },
        {
          category: "Data & Analytics",
          skills: [
            "Advanced Excel / VBA",
            "Power BI",
            "SQL",
            "Data Visualization",
            "Statistical Analysis",
          ],
        },
        {
          category: "ERP & Business Systems",
          skills: [
            "SAP",
            "Oracle",
            "NetSuite",
            "Salesforce",
            "Microsoft Dynamics",
          ],
        },
        {
          category: "Operations & Supply Chain",
          skills: [
            "Lean / Six Sigma",
            "Inventory Management",
            "Logistics Coordination",
            "Procurement",
            "Process Mapping",
          ],
        },
        {
          category: "Project Management",
          skills: [
            "Agile / Scrum",
            "MS Project",
            "Smartsheet",
            "Jira",
            "Risk Management",
          ],
        },
        {
          category: "Professional Tools",
          skills: [
            "Microsoft 365",
            "SharePoint",
            "Google Workspace",
            "Business Writing",
            "Presentation Skills",
          ],
        },
      ]}
      steps={[
        {
          step: "01",
          title: "Free Background Assessment",
          description:
            "We evaluate your business education, experience, and career goals to identify the specific operational niche where you'll have the best chance of landing a role.",
        },
        {
          step: "02",
          title: "Targeted Skills Training",
          description:
            "Focused training on the exact tools, systems, and processes your target employers use — U.S. GAAP, ERP systems, or analytics platforms depending on your track.",
        },
        {
          step: "03",
          title: "Resume & Profile Optimization",
          description:
            "We reformat your international credentials for U.S. hiring managers — ATS-friendly resume, LinkedIn strategy, and interview preparation tailored to business roles.",
        },
        {
          step: "04",
          title: "Managed Placement Campaign",
          description:
            "We run targeted applications, connect you with employers in our network, coach you through interviews, and negotiate offers — you pay only after you're placed.",
        },
      ]}
      idealFor={[
        "You have a degree in business, accounting, finance, MIS, or a related field — from any country.",
        "You're an international graduate on OPT or STEM OPT looking for your first U.S. corporate role.",
        "You have strong analytical skills and attention to detail but need help navigating the U.S. job market.",
        "You're interested in operations, finance, or supply chain roles at mid-size companies or in specialized industries.",
        "You want a dedicated team handling your job search rather than applying to hundreds of generic postings alone.",
      ]}
      faqs={[
        {
          question: "Do I need a CPA or CFA certification?",
          answer:
            "Not for the roles we target. While certifications are valuable, many entry-level and early-career business roles don't require them. We focus on getting you placed first — you can pursue certifications while working.",
        },
        {
          question: "Is this only for accounting majors?",
          answer:
            "No. We place candidates from business administration, finance, MIS, economics, supply chain management, and related backgrounds. The key is having solid analytical and organizational skills.",
        },
        {
          question: "What industries do these roles fall in?",
          answer:
            "Our business placements span infrastructure, telecom, manufacturing, professional services, and corporate operations. We target industries where structured, detail-oriented professionals are consistently in demand.",
        },
        {
          question: "Are these entry-level positions only?",
          answer:
            "Primarily entry-level to early mid-level. If you have 3+ years of relevant U.S. experience, you may not need our training — but we'll be upfront about that during your assessment.",
        },
        {
          question: "Can I transition from a technical background?",
          answer:
            "Yes — engineers and technical professionals often make strong analysts and project coordinators. If your background is technical but you want to move into operations, we can help bridge that transition.",
        },
        {
          question: "What does the training look like?",
          answer:
            "Hands-on, focused training — typically 4–6 weeks — covering the specific tools, workflows, and U.S. business practices relevant to your target role. No filler content, just what employers expect.",
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
          title: "Technology & Data",
          href: "/pathways/technology-data",
          description:
            "Software, backend, data analytics, GIS automation, QA, cloud/cybersecurity, and applied AI in specialized industries.",
        },
      ]}
    />
  );
}
