export function formatBlogDate(iso: string) {
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function splitTitleEmphasis(title: string) {
  const match = title.match(/^(.*)<em>(.*?)<\/em>(.*)$/i);
  if (!match) return null;
  return {
    before: match[1],
    emphasis: match[2],
    after: match[3],
  };
}
