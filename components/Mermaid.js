import { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({ startOnLoad: true });

export default function Mermaid({ chart }) {
  useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
}
