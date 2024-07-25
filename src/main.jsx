import { hydrate } from "preact";
import { App } from "./app.jsx";
import renderToString from "preact-render-to-string";
import "./index.css";

export const prerender = () => {
  return renderToString(<App />);
};

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}
