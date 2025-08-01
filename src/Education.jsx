import { Item } from "./Item";

function RenderEducation({
  institution,
  studyType,
  area,
  city,
  startDate,
  endDate,
  score,
  courses,
}) {
  // Combine studyType and area for subtitle
  const subtitle = area ? `${studyType} in ${area}` : studyType;
  return (
    <>
      <Item
        title={institution}
        subtitle={subtitle}
        location={city}
        startDate={startDate}
        endDate={endDate}
      />
      {!score ? null : (
        <ul>
          <li>
            <div class="score">{score}</div>
          </li>
        </ul>
      )}
      {!courses.length ? null : (
        <ul class="courses">
          {courses.map((d) => (
            <li>{d}</li>
          ))}
        </ul>
      )}
    </>
  );
}
export function Education({ resume }) {
  const education = resume.education;
  if (!education?.length) return <></>;

  return (
    <section id="education">
      <h2>Education</h2>
      {education.map((d) => {
        return <RenderEducation {...d} />;
      })}
    </section>
  );
}
