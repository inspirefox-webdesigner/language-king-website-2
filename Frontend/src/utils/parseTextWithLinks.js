export const parseTextWithLinks = (text = "") => {
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: "text",
        text: text.slice(lastIndex, match.index),
      });
    }

    parts.push({
      type: "link",
      label: match[1],
      url: match[2],
    });

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({
      type: "text",
      text: text.slice(lastIndex),
    });
  }

  return parts;
};