import { RenderMail } from "./common/RenderMail";
import { RenderURL } from "./common/RenderURL";

export function Basics({ resume }) {
  const { name, email, phone, location, website, summary } = resume.basics;
  return (
    <section id="basics">
      <h1>{name}</h1>
      <div class="contact centered">
        {email ? (
          <span class="vertical-separator">
            <RenderMail address={email} />
          </span>
        ) : null}
        {phone ? <span class="vertical-separator">{phone}</span> : null}
        {location ? (
          <span class="vertical-separator">
            {location.city}, {location.countryCode}
          </span>
        ) : null}
        {website ? (
          <span class="vertical-separator">{<RenderURL url={website} />}</span>
        ) : null}
      </div>
      {summary ? (
        <div class="summary">
          <h2>Summary</h2>
          <p>{summary}</p>
        </div>
      ) : null}
    </section>
  );
}
