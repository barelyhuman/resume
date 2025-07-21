import { hydrate ,prerender as ssr} from "preact-iso";
import { App } from "./app.jsx";
import "./index.css";

export const prerender = () => {
  return ssr(<App />);
};

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}
