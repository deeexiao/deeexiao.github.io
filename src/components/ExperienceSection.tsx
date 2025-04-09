"use client";

interface Experience {
  id: string;
  title: string;
  role: string;
  period: string;
}

const experiences: Experience[] = [
  {
    id: "memoon",
    title: "Freelancer at MEMOON",
    role: "Founder & Part-time Teacher (Problem-based learning)",
    period: "Apr 2023 - Jan 2024"
  },
  {
    id: "hanfu",
    title: "UX Design — Hanfu project (APP)",
    role: "UX Design (Part-time project)",
    period: "Sep 2019 - Jan 2021"
  },
  {
    id: "weplanet",
    title: "VI Internship —— WePlanet （童行）",
    role: "VI Design & Photograph",
    period: "Mar 2017 - Aug 2017"
  },
  {
    id: "pfizer",
    title: "Service design project —— Leruimei/Pfizer（乐瑞美/辉瑞）",
    role: "UX Research & Service Design & Event Planning",
    period: "Sep 2016 - Oct 2017"
  },
  {
    id: "aurora",
    title: "Co-working space project —— Aurora（震旦）",
    role: "UX Research & Strategy",
    period: "Jun 2016 - Sep 2016"
  },
  {
    id: "duwei",
    title: "UI internship —— Duwei Tech. （度维科技）",
    role: "Visual Design",
    period: "Jan 2016 - Jun 2016"
  },
];

const otherProjects = [
  "UI Design — Web3 Gamefi project (APP)",
  "Volunteer VI designer — Sweet Potato Chinese Music (Logo/Posters)",
  "Course Researcher — Online PBL APP for Children"
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section pt-12">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">👩‍🚀 Working/Projects</h1>
        <div className="bg-muted p-8 rounded-lg">
          <ul className="space-y-8">
            {experiences.map((exp) => (
              <li key={exp.id} className="border-b border-secondary pb-6 last:border-0 last:pb-0">
                <h3 className="text-xl font-medium mb-1">{exp.title}</h3>
                <p className="italic text-accent mb-1">{exp.role}</p>
                <p className="text-sm text-accent">{exp.period}</p>
              </li>
            ))}
            <li className="pt-4">
              <h3 className="text-xl font-medium mb-4">Other part-time projects</h3>
              <ul className="space-y-2">
                {otherProjects.map((project, index) => (
                  <li key={index} className="italic text-accent">{project}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
} 