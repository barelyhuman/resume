import { Item } from "./Item";

function RenderEducation({
  institution,
  studyType,
  city,
  startDate,
  endDate,
  score,
  courses,
}) {
  return (
    <>
      <Item
        title={institution}
        subtitle={studyType}
        location={city}
        startDate={startDate}
        endDate={endDate}
      />
      {!score ? null : (
        <ul>
          <li>
            <div class="score">{{ score }}</div>
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
