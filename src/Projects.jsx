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
        ({ roles = [], description,url, startDate, endDate, highlights = [] }, index) => {
          return (
            <div style={{flexDirection:"column","display":"flex"}}>
              <Item
                title={getValueIfDiffFromPrevious(
                  resume.projects,
                  index,
                  "name",
                )}
                location={url}
                // subtitle={roles.join(", ")}
                startDate={startDate}
                endDate={endDate}
              />
              <p class="m-0 p-0 mt-1">
                {description}
              </p>
              <ul class="highlights">
                {highlights.map((d) => (
                  <li>{d}</li>
                ))}
              </ul>
              <div className="clearfix"></div>
            </div>
          );
        },
      )}
    </section>
  );
}
