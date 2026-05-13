import { Navigate, useParams } from "react-router-dom";
import SeoServicePage from "@/components/SeoServicePage";

const sharedFaqs = [
  {
    q: "Are automated accessibility scanners enough?",
    a: "No. Automated accessibility scanners cannot reliably validate interaction flows, assistive technology behavior, keyboard navigation quality, or semantic accessibility issues.",
  },
  {
    q: "Do enterprise procurement teams request accessibility evidence?",
    a: "Increasingly yes. Accessibility documentation and WCAG alignment are becoming standard procurement requirements in many enterprise environments.",
  },
];

const pages: Record<string, any> = {
  "wcag-audit": {
    title: "WCAG Accessibility Audit Services",
    subtitle: "Enterprise-grade WCAG 2.2 AA accessibility audits for SaaS platforms preparing for procurement reviews and accessibility compliance programs.",
    metaDescription: "Manual WCAG accessibility audit services for SaaS companies. Human-led testing, screen reader validation, remediation guidance, and accessibility documentation.",
    intro: "Accessibility failures are increasingly becoming procurement blockers, legal exposure points, and operational risks for enterprise-facing software vendors.",
    overviewLabel: "WCAG Compliance",
    overviewTitle: "Manual accessibility audits built for enterprise review.",
    overviewBody: "AllyCheck performs manual WCAG accessibility audits using keyboard workflows, screen readers, semantic analysis, and assistive technology validation.",
    bullets: ["WCAG 2.2 AA reviews","Keyboard navigation testing","Assistive technology validation","Accessibility remediation guidance"],
    processTitle: "Accessibility review beyond automated scans",
    processBody: "Manual accessibility testing identifies issues that scanners frequently miss.",
    processSteps: [{ title: "Discovery", body: "User journeys and workflows are mapped." }, { title: "Testing", body: "Manual accessibility testing validates interactions." }, { title: "Reporting", body: "Clients receive remediation guidance and issue documentation." }],
    faqTitle: "WCAG Accessibility FAQs",
    faqs: sharedFaqs,
    ctaLabel: "Book a Compliance Call"
  },
  "vpat-certification": {
    title: "VPAT Certification Services",
    subtitle: "VPAT documentation and accessibility conformance reporting for enterprise procurement workflows.",
    metaDescription: "VPAT certification and accessibility documentation services for enterprise SaaS companies.",
    intro: "VPAT documentation is increasingly requested during enterprise procurement and vendor evaluation processes.",
    overviewLabel: "VPAT Documentation",
    overviewTitle: "Accessibility documentation procurement teams understand.",
    overviewBody: "Accessibility reporting requires evidence-backed documentation aligned with real audit findings and accessibility verification workflows.",
    bullets: ["VPAT 2.5 reporting","Accessibility documentation","Enterprise procurement support","Remediation prioritization"],
    processTitle: "Documentation supported by real accessibility review",
    processBody: "Strong accessibility reporting depends on validated audit evidence.",
    processSteps: [{ title: "Review", body: "Audit findings are mapped to accessibility standards." }, { title: "Drafting", body: "Accessibility documentation is prepared." }, { title: "Delivery", body: "Clients receive procurement-ready reporting." }],
    faqTitle: "VPAT FAQs",
    faqs: sharedFaqs,
    ctaLabel: "Discuss VPAT Requirements"
  },
  "eaa-compliance": {
    title: "European Accessibility Act Compliance",
    subtitle: "Accessibility compliance guidance for SaaS companies affected by the European Accessibility Act.",
    metaDescription: "European Accessibility Act consulting and WCAG compliance support for enterprise SaaS companies.",
    intro: "The European Accessibility Act is accelerating accessibility expectations across enterprise software procurement.",
    overviewLabel: "EAA Compliance",
    overviewTitle: "Accessibility readiness for European enterprise markets.",
    overviewBody: "Organizations increasingly require accessibility evidence before onboarding digital vendors and SaaS platforms.",
    bullets: ["Accessibility risk reviews","WCAG alignment","Enterprise procurement readiness","Manual accessibility verification"],
    processTitle: "Accessibility readiness requires operational review",
    processBody: "Accessibility compliance involves governance, testing, and documentation workflows.",
    processSteps: [{ title: "Assessment", body: "Accessibility exposure is reviewed." }, { title: "Testing", body: "Manual audits identify accessibility issues." }, { title: "Remediation", body: "Engineering guidance supports fixes." }],
    faqTitle: "European Accessibility Act FAQs",
    faqs: sharedFaqs,
    ctaLabel: "Review Accessibility Exposure"
  },
  "accessibility-consulting": {
    title: "Accessibility Consulting Services",
    subtitle: "Accessibility consulting for enterprise SaaS teams preparing for procurement reviews and remediation initiatives.",
    metaDescription: "Accessibility consulting services for enterprise software companies and SaaS platforms.",
    intro: "Accessibility consulting increasingly intersects with procurement operations, legal review, and engineering workflows.",
    overviewLabel: "Accessibility Strategy",
    overviewTitle: "Accessibility guidance beyond checkbox compliance.",
    overviewBody: "Consulting engagements focus on remediation planning, operational accessibility maturity, and enterprise compliance preparation.",
    bullets: ["Accessibility strategy","Remediation prioritization","Operational accessibility guidance","Compliance workflows"],
    processTitle: "Accessibility programs require operational alignment",
    processBody: "Long-term accessibility maturity depends on sustainable internal workflows.",
    processSteps: [{ title: "Assessment", body: "Accessibility exposure and operational gaps are reviewed." }, { title: "Planning", body: "Remediation priorities are structured." }, { title: "Support", body: "Teams receive implementation guidance." }],
    faqTitle: "Accessibility Consulting FAQs",
    faqs: sharedFaqs,
    ctaLabel: "Discuss Accessibility Strategy"
  },
  "wcag-2-2-aa": {
    title: "WCAG 2.2 AA Compliance Guidance",
    subtitle: "Manual WCAG 2.2 AA accessibility testing and compliance guidance for enterprise digital products.",
    metaDescription: "WCAG 2.2 AA compliance support and accessibility review services for SaaS applications.",
    intro: "WCAG 2.2 AA is increasingly treated as the practical accessibility benchmark in procurement and accessibility review workflows.",
    overviewLabel: "WCAG Standards",
    overviewTitle: "Understanding operational WCAG accessibility compliance.",
    overviewBody: "WCAG accessibility work involves semantics, interaction patterns, keyboard support, assistive technologies, and remediation planning.",
    bullets: ["WCAG success criteria","Manual accessibility testing","Keyboard workflows","Assistive technology validation"],
    processTitle: "Accessibility standards require verification",
    processBody: "Real accessibility validation requires human testing workflows.",
    processSteps: [{ title: "Review", body: "Applications are mapped against WCAG criteria." }, { title: "Testing", body: "Manual accessibility testing validates usability." }, { title: "Documentation", body: "Accessibility issues are categorized and prioritized." }],
    faqTitle: "WCAG 2.2 AA FAQs",
    faqs: sharedFaqs,
    ctaLabel: "Review WCAG Readiness"
  },
  "screen-reader-testing": {
    title: "Screen Reader Accessibility Testing",
    subtitle: "Manual accessibility testing using NVDA, VoiceOver, keyboard workflows, and assistive technology validation.",
    metaDescription: "Screen reader accessibility testing for SaaS products using manual assistive technology workflows.",
    intro: "Screen reader accessibility testing remains one of the most important and least automated areas of accessibility review.",
    overviewLabel: "Assistive Technology",
    overviewTitle: "Accessibility testing with real assistive technologies.",
    overviewBody: "Automated scanners cannot reliably validate reading order, interaction usability, semantic accessibility, or assistive technology workflows.",
    bullets: ["NVDA testing","VoiceOver workflows","Keyboard navigation testing","Assistive technology review"],
    processTitle: "Assistive technology review requires human testing",
    processBody: "Accessibility failures often emerge only during real assistive technology interaction workflows.",
    processSteps: [{ title: "Workflow Mapping", body: "Critical user journeys are identified." }, { title: "Testing", body: "Assistive technologies are used to validate accessibility." }, { title: "Analysis", body: "Accessibility findings are documented." }],
    faqTitle: "Screen Reader Testing FAQs",
    faqs: sharedFaqs,
    ctaLabel: "Discuss Accessibility Testing"
  }
};

export default function SeoPages() {
  const { slug } = useParams();

  if (!slug || !pages[slug]) {
    return <Navigate to="/" replace />;
  }

  return <SeoServicePage {...pages[slug]} />;
}
