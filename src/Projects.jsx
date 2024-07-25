import { getValueIfDiffFromPrevious } from "./formatters";
import { Item } from "./Item";

export function Projects({ resume }) {
  const { projects } = resume;

  if (!(projects && projects.length)) {
    return <></>;
  }

  return (
    <section id="work">
      <h2>Projects</h2>
      {projects.map(
        ({ roles = [], url, startDate, endDate, highlights = [] }, index) => {
          return (
            <>
              <Item
                title={getValueIfDiffFromPrevious(
                  resume.projects,
                  index,
                  "name"
                )}
                location={url}
                // subtitle={roles.join(", ")}
                startDate={startDate}
                endDate={endDate}
              />
              <ul class="highlights">
                {highlights.map((d) => (
                  <li>{d}</li>
                ))}
              </ul>
              <div className="clearfix"></div>
            </>
          );
        }
      )}
    </section>
  );
}
