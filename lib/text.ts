const SMALL = new Set([
  "a", "an", "the", "and", "but", "or", "nor", "for", "of", "in", "on", "at", "to", "by",
  "up", "as", "per", "via", "off", "from", "with", "into", "onto", "than",
]);

/** Title case: capitalise each word except short prepositions, articles and conjunctions (first and last words always capitalised). */
export function tc(text: string): string {
  const parts = text.split(/(\s+)/);
  const wordIdx = parts.map((p, i) => (/\S/.test(p) ? i : -1)).filter((i) => i >= 0);
  const first = wordIdx[0];
  const last = wordIdx[wordIdx.length - 1];
  return parts
    .map((p, i) => {
      if (!/\S/.test(p)) return p;
      const prev = wordIdx[wordIdx.indexOf(i) - 1];
      const afterBreak = prev !== undefined && /[.:?!]$/.test(parts[prev]);
      const m = p.match(/^([^A-Za-z0-9]*)(.*?)([^A-Za-z0-9]*)$/);
      if (!m) return p;
      const [, pre, core, post] = m;
      if (!core) return p;
      if (/[A-Z0-9]/.test(core.slice(1))) return p; // WhatsApp, WASSCE, Q&A, L.A. etc.
      const lower = core.toLowerCase();
      if (SMALL.has(lower) && i !== first && i !== last && !afterBreak) return pre + lower + post;
      const cap = core
        .split("-")
        .map((s) => (s ? s[0].toUpperCase() + s.slice(1) : s))
        .join("-");
      return pre + cap + post;
    })
    .join("");
}
