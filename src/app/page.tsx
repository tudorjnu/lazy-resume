import React from "react"

import resumeData from "./resume.json"

export function SidePannel() {
  return (
    <aside className="side-pannel flex w-1/4 min-w-[200px] flex-col items-center justify-between bg-white p-6 shadow-lg">
      My Side Pannel
    </aside>
  )
}

export function Separator() {
  return <hr className="my-1 border-t border-gray-300" />
}

export function SectionSeparator() {
  return <hr className="my-1 border-t border-gray-300" />
}

export function BasicsSection({ data }: { data: any }) {
  const basics = data.basics
  return (
    <div className="flex flex-col justify-stretch">
      <p className="text-lg font-bold">
        {basics.name} | {basics.label}
      </p>
      <Separator />
      <ul className="flex list-none flex-row justify-around py-0">
        <li> {basics.phone} </li>
        <li> {basics.email} </li>
        <li> {basics.url} </li>
      </ul>
      <Separator />
      <p> {basics.summary} </p>
    </div>
  )
}

export function WorkSection({ data }: { data: any }) {
  return (
    <div className="flex flex-col justify-stretch">
      <ul>
        {data.work.map((work: any, index: number) => (
          <li key={index} className="mb-4">
            <h3 className="font-bold">
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                {work.name}
              </a>
            </h3>
            <p>
              <strong>{work.position}</strong> ({work.startDate} -{" "}
              {work.endDate})
            </p>
            {work.highlights && work.highlights.length > 0 && (
              <div>
                <h4 className="font-semibold">Courses:</h4>
                <ul className="ml-4">
                  {work.highlights.map((course: string, idx: number) => (
                    <li key={idx} className="mx-1">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-UK", {
    year: "numeric",
    month: "short",
  })
}

export function Section({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-2 flex flex-col justify-stretch font-semibold">
      <h2>{name}</h2>
      <SectionSeparator />
      {children}
    </div>
  )
}

export function EducationSection({ data }: { data: any }) {
  return (
    <div className="flex flex-col justify-stretch">
      <ul>
        {data.education.map((education: any, index: number) => (
          <li key={index} className="mb-4">
            <h3 className="font-bold">
              <a href={education.url} target="_blank" rel="noopener noreferrer">
                {education.institution}
              </a>
            </h3>
            <div className="flex flex-row justify-between">
              <p className="text-sm">
                {education.studyType} in {education.area}
              </p>
              <p className="italic text-gray-700">
                {formatDate(education.startDate)} -{" "}
                {formatDate(education.endDate)}
              </p>
            </div>
            <p>Score: {education.score}</p>
            {education.courses && education.courses.length > 0 && (
              <div>
                <h4 className="font-semibold">Courses:</h4>
                <ul className="ml-4">
                  {education.courses.map((course: string, idx: number) => (
                    <li key={idx} className="mx-1">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function VolunteerSection({ data }: { data: any }) {
  // Check if the data and volunteer array are available
  if (!data || !Array.isArray(data.volunteer)) {
    return <div>No volunteer experience available</div>
  }

  return (
    <div className="flex flex-col justify-stretch">
      <ul>
        {data.volunteer.map((volunteer: any, index: number) => (
          <li key={index} className="mb-4">
            <h3 className="font-bold">
              <a href={volunteer.url} target="_blank" rel="noopener noreferrer">
                {volunteer.organization}
              </a>
            </h3>
            <p>
              <strong>{volunteer.position}</strong> ({volunteer.startDate} -{" "}
              {volunteer.endDate})
            </p>
            <p>{volunteer.summary}</p>
            {volunteer.highlights && volunteer.highlights.length > 0 && (
              <div>
                <h4 className="font-semibold">Highlights:</h4>
                <ul className="ml-4">
                  {volunteer.highlights.map(
                    (highlight: string, idx: number) => (
                      <li key={idx} className="">
                        {highlight}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function AwardSection({ data }: { data: any }) {
  return <div className="flex flex-col justify-stretch">My work Section</div>
}

export function CertificateSection({ data }: { data: any }) {
  return <div className="flex flex-col justify-stretch">My work Section</div>
}

export function PublicationsSection({ data }: { data: any }) {
  // Check if the data and publications array are available
  if (!data || !Array.isArray(data.publications)) {
    return <div>No publications available</div>
  }

  return (
    <div className="flex flex-col justify-stretch">
      <ul>
        {data.publications.map((publication: any, index: number) => (
          <li key={index} className="mb-4">
            <h3 className="font-bold">
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {publication.name}
              </a>
            </h3>
            <p>
              <strong>Published by:</strong> {publication.publisher}
            </p>
            <p>
              <strong>Release Date:</strong> {publication.releaseDate}
            </p>
            <p>{publication.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SkillsSection({
  data,
  fontSize,
}: {
  data: any
  fontSize: number
}) {
  return (
    <div
      className="flex flex-col justify-stretch"
      style={{ fontSize: `${fontSize}px` }}
    >
      <ul>
        {data.skills.map((skill: any, index: number) => (
          <li key={index} className="mb-2">
            <strong>{skill.name}</strong> - {skill.level}
            <ul className="ml-4 flex flex-row">
              {skill.keywords.map((keyword: string, idx: number) => (
                <li key={idx} className="mx-1">
                  {keyword}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function LanguagesSection({ data }: { data: any }) {
  return <div className="flex flex-col justify-stretch">My work Section</div>
}

export function InterestsSection({ data }: { data: any }) {
  // Check if the data and interests array are available
  if (!data || !Array.isArray(data.interests)) {
    return <div>No interests available</div>
  }

  return (
    <div className="flex flex-col justify-stretch">
      <ul>
        {data.interests.map((interest: any, index: number) => (
          <li key={index} className="mb-4">
            <h3 className=" font-bold">{interest.name}</h3>
            {interest.keywords && interest.keywords.length > 0 && (
              <ul className="ml-4">
                {interest.keywords.map((keyword: string, idx: number) => (
                  <li key={idx} className="">
                    {keyword}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ReferencesSection({ data }: { data: any }) {
  return <div className="flex flex-col justify-stretch">My work Section</div>
}

export function ProjectsSection({ data }: { data: any }) {
  return <div className="flex flex-col justify-stretch">My work Section</div>
}

export function Resume({ data, fontSize }: { data: any; fontSize: number }) {
  return (
    <div
      className="flex h-[297mm] w-[210mm] flex-col  justify-stretch bg-white p-6 shadow-lg"
      style={{
        fontSize: `${fontSize}px`,
      }}
    >
      <BasicsSection data={data} fontSize={fontSize} />
      <SectionSeparator />
      <Section name="Skills">
        <SkillsSection data={data} fontSize={fontSize} />
      </Section>
      <SectionSeparator />
      <EducationSection data={data} fontSize={fontSize} />
      <SectionSeparator />
      <WorkSection data={data} fontSize={fontSize} />
      <SectionSeparator />
      <VolunteerSection data={data} fontSize={fontSize} />
      <SectionSeparator />
      <PublicationsSection data={data} fontSize={fontSize} />
      <SectionSeparator />
      <InterestsSection data={data} fontSize={fontSize} />
    </div>
  )
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-row bg-neutral-50 p-0">
      <SidePannel />

      {/* Main content area, grows to take the remaining space */}
      <main className="flex flex-1 items-start justify-center p-6">
        <Resume data={resumeData} fontSize={11} />
      </main>
    </div>
  )
}
