import "../styles/globals.css";
import { useEffect } from "react";
import mermaid from "mermaid";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
