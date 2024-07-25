export function RenderMail({ address }) {
  return <a href={`mailto:${address}`}>{address}</a>;
}
