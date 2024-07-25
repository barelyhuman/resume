export function RenderURL({ url }) {
  const withoutProto = url.replace(/.*?:\/\//g, "");
  return <a href={url}>{withoutProto}</a>;
}
