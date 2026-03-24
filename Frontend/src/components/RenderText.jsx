import React from "react";
import { parseTextWithLinks } from "../utils/parseTextWithLinks";

const RenderText = ({ text, linkColor = "#838383" }) => {
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
                color: linkColor,
                textDecoration: "underline",
                marginRight: 4,
              }}
            >
              {part.label}
            </a>
          );
        }

        if (part.type === "italic") {
          return (
            <span
              key={index}
              style={{ fontStyle: "italic", color: "#838383" }}
            >
              {part.text}
            </span>
          );
        }

        return <span key={index}>{part.text}</span>;
      })}
    </>
  );
};

export default RenderText;