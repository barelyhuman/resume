import { getValueIfDiffFromPrevious } from "./formatters";
import { Item } from "./Item";

export function Work({ resume }) {
  const { work } = resume;

  if (!(work && work.length)) {
    return <></>;
  }

  return (
    <section id="work">
      <h2>Work Experience</h2>
      {work.map(
        (
          {
            position,
            location,
            startDate,
            endDate,
            startDate2,
            endDate2,
            highlights = [],
          },
          index,
        ) => {
          return (
            <>
              <Item
                title={getValueIfDiffFromPrevious(
                  resume.work,
                  index,
                  "company",
                )}
                subtitle={position}
                location={location}
                startDate={startDate}
                endDate={endDate}
                startDate2={startDate2}
                endDate2={endDate2}
              />
              <ul class="highlights">
                {highlights.map((d) => (
                  <li>{d}</li>
                ))}
              </ul>
            </>
          );
        },
      )}
    </section>
  );
}
