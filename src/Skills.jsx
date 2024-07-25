function RenderKeywords({ keywords = [] }) {
  return keywords.map((d, ind, src) => {
    const isLast = ind === src.length - 1;
    return (
      <>
        {d}
        {!isLast ? ", " : ""}
      </>
    );
  });
}
function RenderSkill({ name, keywords = [] }) {
  if (!name) {
    return <></>;
  }
  return (
    <>
      <strong>{name}</strong>
      {keywords.length ? (
        <>
          {": "}
          <RenderKeywords keywords={keywords} />
        </>
      ) : null}
    </>
  );
}
export function Skills({ resume }) {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul class="item">
        {resume.skills.map(({ name, keywords = [] }) => {
          return (
            <li>
              <RenderSkill name={name} keywords={keywords} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
