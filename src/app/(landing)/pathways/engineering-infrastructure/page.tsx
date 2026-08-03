import PathwayTemplate from "@/components/Pathways/PathwayTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering & Infrastructure — Skarion Career Pathway",
  description:
    "Break into Telecom & OSP, GIS, civil infrastructure, CAD, permitting, and construction engineering. Skarion's flagship pathway with direct hiring relationships and proven placements.",
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

export default function EngineeringInfrastructurePage() {
  return (
    <PathwayTemplate
      id="engineering-infrastructure"
      badge="Flagship Pathway"
      title="Engineering & Infrastructure"
      subtitle="Our most established pathway — with direct hiring relationships, real placements, and the strongest employer demand."
      heroDescription="Telecom and fiber networks are expanding rapidly across the U.S. Utilities, municipalities, and carriers need trained engineers and designers now. We target less-saturated roles in OSP engineering, GIS, CAD design, permitting, and project engineering — fields where qualified international talent is genuinely welcome."
      stats={[
        { value: "70+", label: "Professionals placed" },
        { value: "~120", label: "Days avg. to placement" },
        { value: "90%", label: "Placement rate" },
        { value: "$55K–$85K", label: "Typical starting salary" },
      ]}
      coreAreas={[
        {
          icon: ICON(
            "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          ),
          title: "Telecom & OSP Engineering",
          description:
            "Design outside-plant fiber and copper networks. Learn pole loading, route engineering, strand mapping, and construction-ready deliverables for ISPs and carriers.",
        },
        {
          icon: ICON(
            "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ),
          title: "GIS & Geospatial Analysis",
          description:
            "Map, analyze, and visualize spatial data for infrastructure planning. Master ArcGIS Pro, QGIS, and geospatial databases used by utilities and telecom firms.",
        },
        {
          icon: ICON(
            "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          ),
          title: "Utility & Civil Support",
          description:
            "Support utility engineering teams with infrastructure assessments, make-ready engineering, and compliance documentation for power and communications networks.",
        },
        {
          icon: ICON(
            "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"
          ),
          title: "CAD & Design Drafting",
          description:
            "Produce construction-ready engineering drawings in AutoCAD, Civil 3D, and MicroStation. Create plan sets, cross-sections, and detail sheets for infrastructure projects.",
        },
        {
          icon: ICON(
            "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ),
          title: "Permitting & Regulatory",
          description:
            "Navigate municipal, state, and federal permitting processes. Handle right-of-way applications, NEPA compliance, environmental reviews, and regulatory submissions.",
        },
        {
          icon: ICON(
            "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ),
          title: "Construction & Project Engineering",
          description:
            "Coordinate field crews, manage project timelines, track budgets, and oversee quality control for large-scale infrastructure deployments and network builds.",
        },
      ]}
      roles={[
        {
          title: "OSP Engineer",
          salary: "$60K – $85K",
          description:
            "Design outside-plant fiber and copper routes, produce construction drawings, and coordinate with field teams on network deployments.",
        },
        {
          title: "GIS Analyst / Specialist",
          salary: "$55K – $75K",
          description:
            "Maintain and analyze geospatial data for utility networks, create maps and visual reports, and automate GIS workflows for infrastructure planning.",
        },
        {
          title: "CAD Designer / Drafter",
          salary: "$50K – $70K",
          description:
            "Produce engineering plan sets, cross-section details, and as-built documentation using AutoCAD, Civil 3D, or MicroStation.",
        },
        {
          title: "Project Engineer",
          salary: "$65K – $90K",
          description:
            "Manage project scopes, timelines, and budgets for infrastructure builds. Coordinate between engineering, construction, and client teams.",
        },
        {
          title: "Permitting Coordinator",
          salary: "$50K – $65K",
          description:
            "Prepare and submit permit applications, coordinate with municipalities, and track regulatory compliance across project portfolios.",
        },
        {
          title: "Utility / Civil Engineer",
          salary: "$60K – $80K",
          description:
            "Support utility make-ready engineering, pole loading analysis, and infrastructure assessments for power and communications networks.",
        },
      ]}
      skillGroups={[
        {
          category: "Design & Drafting",
          skills: [
            "AutoCAD",
            "Civil 3D",
            "MicroStation",
            "Bluebeam Revu",
            "Google Earth Pro",
          ],
        },
        {
          category: "GIS & Geospatial",
          skills: [
            "ArcGIS Pro",
            "QGIS",
            "ArcGIS Online",
            "Geodatabases",
            "Python (arcpy)",
            "FME",
          ],
        },
        {
          category: "Telecom / OSP",
          skills: [
            "Fiber Optic Design",
            "Pole Loading (O-Calc / PoleForeman)",
            "Strand Mapping",
            "FTTH / FTTP",
            "Splicing Plans",
          ],
        },
        {
          category: "Project Management",
          skills: [
            "MS Project",
            "Smartsheet",
            "Budget Tracking",
            "RFI / Submittal Management",
            "Field Coordination",
          ],
        },
        {
          category: "Regulatory & Compliance",
          skills: [
            "ROW Permitting",
            "NEPA Compliance",
            "Municipal Codes",
            "Environmental Reviews",
            "Safety Standards",
          ],
        },
        {
          category: "Collaboration",
          skills: [
            "Microsoft 365",
            "SharePoint",
            "Technical Writing",
            "Client Communication",
            "Cross-team Coordination",
          ],
        },
      ]}
      steps={[
        {
          step: "01",
          title: "Free Career Assessment",
          description:
            "We evaluate your engineering background, visa status, and goals to determine if this pathway is realistic for you — completely free, no strings attached.",
        },
        {
          step: "02",
          title: "Specialized Training",
          description:
            "Hands-on training in OSP design, GIS, CAD, or project engineering — taught by industry professionals who know exactly what employers expect.",
        },
        {
          step: "03",
          title: "Profile & Resume Positioning",
          description:
            "We reframe your credentials for U.S. hiring managers — ATS-optimized resume, LinkedIn overhaul, portfolio preparation, and interview coaching.",
        },
        {
          step: "04",
          title: "Managed Job Search & Placement",
          description:
            "We run your entire job search — targeted applications, direct employer introductions, interview prep, and offer negotiation. You pay only after placement.",
        },
      ]}
      idealFor={[
        "You have an engineering, civil, electrical, or GIS background — from any country.",
        "You're an international graduate on OPT, STEM OPT, or with another valid work authorization.",
        "You want to enter the U.S. telecom, infrastructure, or utility industry but aren't sure where to start.",
        "You're willing to invest in focused training to close specific skill gaps before job searching.",
        "You want a team managing your job search, applications, and interviews — not doing it alone.",
      ]}
      faqs={[
        {
          question: "Do I need a civil or electrical engineering degree?",
          answer:
            "Not necessarily. Many of our placed candidates come from mechanical, industrial, or general engineering backgrounds. If you have core engineering fundamentals, we can bridge the gap with specialized training.",
        },
        {
          question: "How long does the training take?",
          answer:
            "Training is typically 4–8 weeks depending on your starting level. Candidates with relevant experience may move faster. The goal is to get you employer-ready, not to run the clock.",
        },
        {
          question: "Is this pathway OPT / STEM OPT friendly?",
          answer:
            "Yes. Many of our placements in this pathway have been international graduates on OPT and STEM OPT. We target employers who are experienced with international hires, though we never guarantee specific visa outcomes.",
        },
        {
          question: "What does 'pay after placement' mean exactly?",
          answer:
            "Our placement fee applies only after you've accepted a job offer and started working, as defined in your signed agreement. Training may have separate terms — we'll explain everything upfront during your consultation.",
        },
        {
          question: "Do you guarantee job placement?",
          answer:
            "No. We're transparent about this. We provide the best possible training, profile positioning, and managed job search — but no company can guarantee a specific outcome. Our track record speaks for itself.",
        },
        {
          question: "Where are these jobs located?",
          answer:
            "Primarily across the U.S. — many telecom and utility roles are in growing metro areas or regions with major infrastructure builds. Some roles offer hybrid or remote options, but most require on-site presence.",
        },
      ]}
      otherPathways={[
        {
          title: "Technology & Data",
          href: "/pathways/technology-data",
          description:
            "Software, backend, data analytics, GIS automation, QA, cloud/cybersecurity, and applied AI in specialized industries.",
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
