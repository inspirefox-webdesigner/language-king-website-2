import React from "react";
import { parseTextWithLinks } from "./parseTextWithLinks";

const RenderText = ({ text }) => {
  const parts = parseTextWithLinks(text);

  return (
    <div style={{ display: "inline" }}>
      {parts.map((part, index) => {
        if (part.type === "link") {
          return (
            <a
              key={index}
              href={part.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#1e6cff",
                textDecoration: "underline",
                marginRight: 4,
              }}
            >
              {part.label}
            </a>
          );
        }
        return <span key={index}>{part.content}</span>;
      })}
    </div>
  );
};

export default RenderText;
