from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, KeepTogether, ListFlowable, ListItem, PageBreak, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "zak-goldberg-cv.pdf"

INK = colors.HexColor("#1D1C27")
INDIGO = colors.HexColor("#4C35FF")
LIME = colors.HexColor("#D8FF4E")
MUTED = colors.HexColor("#5C5A68")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CvName", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=25, leading=28, textColor=INK, spaceAfter=4))
styles.add(ParagraphStyle(name="CvTitle", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10, leading=14, textColor=INDIGO, spaceAfter=5))
styles.add(ParagraphStyle(name="CvContact", parent=styles["Normal"], fontName="Helvetica", fontSize=8.5, leading=12, textColor=MUTED, spaceAfter=12))
styles.add(ParagraphStyle(name="CvSection", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=INDIGO, spaceBefore=11, spaceAfter=4, uppercase=True))
styles.add(ParagraphStyle(name="CvSummary", parent=styles["Normal"], fontName="Helvetica", fontSize=9.1, leading=13, textColor=INK, spaceAfter=7))
styles.add(ParagraphStyle(name="CvRole", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=INK, spaceBefore=8, spaceAfter=1))
styles.add(ParagraphStyle(name="CvRoleMeta", parent=styles["Normal"], fontName="Helvetica", fontSize=8.4, leading=11, textColor=MUTED, spaceAfter=4))
styles.add(ParagraphStyle(name="CvBullet", parent=styles["Normal"], fontName="Helvetica", fontSize=8.4, leading=11.4, leftIndent=12, firstLineIndent=-7, textColor=INK, spaceAfter=2))
styles.add(ParagraphStyle(name="CvSkill", parent=styles["Normal"], fontName="Helvetica", fontSize=8.5, leading=12, textColor=INK, spaceAfter=4))

def p(text, style):
    return Paragraph(text, styles[style])

def bullets(items):
    return ListFlowable([ListItem(p(item, "CvBullet"), leftIndent=0) for item in items], bulletType="bullet", start="circle", leftIndent=12, bulletFontSize=5, bulletOffsetY=2, spaceAfter=1)

def role(company, title, dates, items):
    return KeepTogether([p(f"{company} | {title}", "CvRole"), p(dates, "CvRoleMeta"), bullets(items)])

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(INK)
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, 0.43 * inch, letter[0] - doc.rightMargin, 0.43 * inch)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.28 * inch, "ZAK GOLDBERG | CURIOSITY BACKED BY EXECUTION")
    canvas.drawRightString(letter[0] - doc.rightMargin, 0.28 * inch, f"PAGE {doc.page}")
    canvas.restoreState()

def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(str(OUTPUT), pagesize=letter, leftMargin=0.67 * inch, rightMargin=0.67 * inch, topMargin=0.58 * inch, bottomMargin=0.66 * inch, title="Zak Goldberg - CV", author="Zak Goldberg")
    story = [
        p("Zak Goldberg", "CvName"),
        p("SOFTWARE BUILDER | SYSTEMS THINKER | TECHNICAL LEADER", "CvTitle"),
        p("San Francisco Bay Area | zak.goldberg@gmail.com | linkedin.com/in/zak-goldberg", "CvContact"),
        HRFlowable(width="100%", thickness=1.4, color=INK, spaceAfter=9),
        p("Summary", "CvSection"),
        p("Software builder with experience across backend engineering, large-scale operations, technical program management, and engineering leadership. I find the real problem, understand system constraints, and build durable fixes. Current practice includes Java, distributed systems, operational reliability, and human-agent engineering systems.", "CvSummary"),
        p("Core Strengths", "CvSection"),
        p("Backend and distributed systems | APIs, persistence, concurrency, and automated testing | Operational reliability and incident response | Technical strategy and cross-functional execution | Human-agent engineering: Claude, Codex, OpenCode, reusable skills, agents, and quality gates", "CvSkill"),
        p("Human-agent engineering systems", "CvSection"),
        p("Design shared context, workflows, autonomy boundaries, and quality checks that let engineers and coding agents contribute reliably across the software-development lifecycle.", "CvSkill"),
        p("Experience", "CvSection"),
        role("Salesforce", "Software Engineer", "February 2025 - Present | San Francisco Bay Area", [
            "Design and deliver reliability-critical backend improvements for a real-time infrastructure-protection platform, including persistence architecture, production issue resolution, and safe phased rollouts.",
            "Integrated existing operational APIs with a partner-facing operations interface, enabling operators to manage configurations directly; built payload-validation API support for safe, reliable submissions.",
            "Diagnosed and redesigned concurrency-sensitive persistence behavior to reduce lock contention while preserving consistency and operational safety.",
            "Built a human-agent engineering workflow adopted by 10+ engineers that connects a library with its consuming application and encodes Git, local dependency overrides, builds, tests, and automated review - reducing manual handoffs before engineer review.",
        ]),
        role("Amazon Web Services", "Software Development Manager", "December 2021 - May 2024 | Santa Clara, CA", [
            "Managed and grew a 12-engineer team responsible for backend services supporting a globally used internal work-management platform.",
            "Set technical and product direction, roadmaps, operational practices, and growth plans while balancing delivery, reliability, and technical debt.",
            "Established practices for roadmap communication, mentorship, and cross-team knowledge sharing; scaled a successful quarterly team forum to the broader organization.",
            "Hired, coached, and developed engineers while leading recruiting, interviews, and candidate-close conversations; grew the team from 4 to 12 engineers in 12 months.",
            "Created a mentorship program that connected 13 engineers with mentors across the organization.",
        ]),
        role("Amazon Web Services", "Senior Technical Program Manager", "July 2020 - December 2021 | Seattle, WA", [
            "Led cross-functional software programs from requirements and design through testing, security review, and on-time delivery; coordinated 4-9 developers and multiple partner-team dependencies.",
            "Delivered an asset-visibility program spanning 250K+ assets, two new services, third-party integrations, and three internal-service integrations.",
            "Led development of a workforce registration platform piloted at two sites and later scaled across AWS data centers.",
            "Led planning for a development team supporting third-party software integration, including a three-year architecture and integration plan.",
        ]),
        PageBreak(),
        p("Earlier Experience", "CvSection"),
        role("Amazon Web Services", "Technical Program Manager", "March 2018 - July 2020 | Seattle, WA", [
            "Led development of internal coordination software that became a global single source of truth for data-center build and testing processes.",
            "Created a product-management intake program and improved an operational ordering process, reducing support tickets by 80%.",
            "Evaluated and recommended third-party software after coordinating requirements, vendor evaluation, security, legal, and financial analysis across executive stakeholders.",
        ]),
        role("Amazon Web Services", "Program Manager, Capacity Planning", "March 2016 - March 2018 | Seattle, WA", [
            "Planned supply and provided demand guidance for roughly half of server landings across AWS's global network; built SQL and spreadsheet tools to make demand variability and cluster health legible to leaders.",
            "Created metrics and process-improvement mechanisms that helped assess constrained situations, align adjacent teams, and guide future development strategies.",
        ]),
        role("Amazon", "Program Manager, Strategic Vendor Services", "June 2014 - March 2016 | Seattle, WA", [
            "Partnered with vendors on forecasting, financial analysis, supply-chain management, marketing campaigns, and product launches on the Amazon platform.",
            "Built long-term operating relationships by translating data and marketplace dynamics into practical commercial decisions.",
        ]),
        p("Education", "CvSection"),
        p("<b>University of Virginia</b> | BS, Civil &amp; Environmental Engineering; BA, Economics | December 2013", "CvSkill"),
        p("Technical Practice", "CvSection"),
        p("<b>Software systems:</b> Java, backend and distributed systems, REST APIs, persistence, concurrency, automated testing, observability, and incident response.", "CvSkill"),
        p("<b>Human-agent engineering:</b> Claude, Codex, and OpenCode; reusable skills, agents, documentation systems, and quality gates that make useful context easier to find and apply while improving the system through use.", "CvSkill"),
        p("<b>Cross-functional delivery:</b> technical strategy, roadmap planning, requirements, stakeholder alignment, mentoring, and translating operational needs into practical software outcomes.", "CvSkill"),
    ]
    doc.build(story, onFirstPage=footer, onLaterPages=footer)

if __name__ == "__main__":
    main()
