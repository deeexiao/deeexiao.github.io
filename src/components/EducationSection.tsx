"use client";

interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

const education: Education[] = [
  {
    id: "eindhoven",
    institution: "Eindhoven University of Technology — Researcher",
    degree: "Support Design-based learning for teacher",
    period: "Nov 2018 - Now"
  },
  {
    id: "denmark",
    institution: "Technical University of Denmark — Exchange student",
    degree: "Design and Innovation",
    period: "Sep 2017 - Jan 2018"
  },
  {
    id: "jiangnan",
    institution: "Jiangnan University — MA",
    degree: "UX Design and Experience",
    period: "Sep 2015 - Jun 2018"
  },
  {
    id: "sichuan",
    institution: "Sichuan Normal University — BA",
    degree: "Industrial Design",
    period: "Sep 2011 - Jun 2015"
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="section pt-12">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">👩‍🚀 Education/Research</h1>
        <div className="bg-muted p-8 rounded-lg">
          <ul className="space-y-8">
            {education.map((edu) => (
              <li key={edu.id} className="border-b border-secondary pb-6 last:border-0 last:pb-0">
                <h3 className="text-xl font-medium mb-1">{edu.institution}</h3>
                <p className="italic text-accent mb-1">{edu.degree}</p>
                {edu.id === "sichuan" && (
                  <p className="italic text-accent mb-1">Transferred from Fine-Art</p>
                )}
                <p className="text-sm text-accent">{edu.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 