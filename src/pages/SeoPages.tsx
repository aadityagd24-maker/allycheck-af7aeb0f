import { Navigate, useParams } from "react-router-dom";
import SeoServicePage from "@/components/SeoServicePage";

const pages: Record<string, any> = {
  "wcag-audit": {
    title: "WCAG Accessibility Audit Services",
    subtitle: "Enterprise-grade WCAG 2.2 AA accessibility audits for SaaS platforms preparing for procurement reviews, legal due diligence, and EAA compliance.",
    metaDescription: "Manual WCAG 2.2 AA accessibility audits for SaaS companies. Human-led testing, VPAT documentation, remediation guidance, and procurement-ready reporting.",
    intro: "Most accessibility failures are not discovered by automated scanners. Enterprise procurement teams increasingly require manual WCAG validation, keyboard testing, and documented accessibility evidence before approving vendor contracts.",
    overviewLabel: "WCAG Compliance",
    overviewTitle: "Accessibility audits built for real enterprise scrutiny.",
    overviewBody: "AllyCheck performs manual WCAG accessibility audits using screen readers, keyboard-only workflows, semantic analysis, focus management reviews, and assistive technology testing. The goal is not superficial compliance language. The goal is operational accessibility evidence.",
    bullets: ["Manual WCAG 2.2 AA testing","Keyboard navigation validation","Screen reader testing","Procurement-ready reporting"],
    processTitle: "How enterprise accessibility audits actually work",
    processBody: "Accessibility compliance is a documentation and operational process, not a plugin installation exercise.",
    processSteps: [{title:"Scope",body:"We identify user journeys, application states, and high-risk flows."},{title:"Manual Testing",body:"Auditors test interactive components against WCAG success criteria."},{title:"Reporting",body:"Clients receive issue documentation and remediation guidance."}],
    faqTitle: "WCAG Audit FAQs",
    faqs: [{q:"What standards are tested?",a:"Audits are aligned with WCAG 2.2 AA criteria and common procurement requirements."},{q:"Are automated scans enough?",a:"No. Automated tools typically identify only a fraction of accessibility issues."}],
    ctaLabel: "Book a Compliance Call"
  },
  "vpat-certification": {
    title: "VPAT Certification & Documentation",
    subtitle: "VPAT 2.5 documentation and accessibility conformance reporting for enterprise procurement workflows.",
    metaDescription: "VPAT certification services for SaaS companies. Accessibility conformance reports aligned with procurement expectations.",
    intro: "Many enterprise buyers now require VPAT documentation before security, legal, and procurement reviews can move forward.",
    overviewLabel: "VPAT Services",
    overviewTitle: "Documentation procurement teams actually review.",
    overviewBody: "AllyCheck prepares VPAT documentation based on manual audit findings and accessibility verification workflows.",
    bullets: ["VPAT 2.5 reporting","Accessibility conformance language","Enterprise procurement support","Developer remediation guidance"],
    processTitle: "A documentation-first accessibility workflow",
    processBody: "Strong accessibility documentation reduces procurement friction and legal uncertainty.",
    processSteps: [{title:"Audit Review",body:"Audit findings are mapped to accessibility standards."},{title:"Documentation",body:"VPAT language is drafted using verified findings."},{title:"Delivery",body:"Clients receive procurement-ready accessibility documentation."}],
    faqTitle: "VPAT FAQs",
    faqs: [{q:"What is a VPAT?",a:"A VPAT is a standardized accessibility reporting template used during procurement reviews."},{q:"Can a VPAT be created without manual testing?",a:"That approach creates legal and procurement risk."}],
    ctaLabel: "Discuss VPAT Requirements"
  },
  "eaa-compliance": {
    title: "European Accessibility Act Compliance",
    subtitle: "Accessibility compliance support for SaaS companies affected by the European Accessibility Act.",
    metaDescription: "European Accessibility Act consulting and WCAG compliance support for SaaS businesses entering EU procurement and enterprise sales environments.",
    intro: "The European Accessibility Act is changing accessibility expectations across enterprise software procurement and digital product compliance.",
    overviewLabel: "EAA Compliance",
    overviewTitle: "Compliance preparation for enterprise-facing SaaS products.",
    overviewBody: "Organizations operating in European markets increasingly require accessibility evidence before onboarding vendors and software providers.",
    bullets: ["WCAG 2.2 AA alignment","Accessibility documentation","Enterprise procurement readiness","Manual compliance reviews"],
    processTitle: "Compliance begins with operational visibility",
    processBody: "Accessibility risk management requires repeatable review processes and defensible documentation.",
    processSteps: [{title:"Risk Mapping",body:"We identify accessibility exposure across core workflows."},{title:"Audit",body:"Manual testing identifies non-conformance patterns."},{title:"Remediation",body:"Engineering guidance supports accessibility fixes."}],
    faqTitle: "EAA Compliance FAQs",
    faqs: [{q:"Does the EAA affect SaaS products?",a:"Many digital products sold into European enterprise environments are increasingly affected by accessibility expectations."},{q:"Is WCAG required for EAA readiness?",a:"WCAG standards are commonly used as the operational benchmark."}],
    ctaLabel: "Review Accessibility Exposure"
  }
};

export default function SeoPages() {
  const { slug } = useParams();

  if (!slug || !pages[slug]) {
    return <Navigate to="/" replace />;
  }

  return <SeoServicePage {...pages[slug]} />;
}
