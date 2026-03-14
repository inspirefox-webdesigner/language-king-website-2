import React from "react";
import { parseTextWithLinks } from "../utils/parseTextWithLinks";

const RenderText = ({ text }) => {
  const parts = parseTextWithLinks(text || "");

  return (
    <>
      {parts.map((part, index) => {
        if (part.type === "link") {
          return (
            <a
              key={index}
              href={part.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#FFFFFF",
                textDecoration: "underline",
                marginRight: 4,
              }}
            >
              {part.label}
            </a>
          );
        }

        return <span key={index}>{part.text}</span>;
      })}
    </>
  );
};

export default RenderText;