import { alpha } from "@mui/material";

// instead of always forcing a dark editor look.
export function useCodeColors(mode) {
  return mode === "dark"
    ? {
        bg: "#1e1e2e",
        chromeBorder: "rgba(255,255,255,0.08)",
        filename: "rgba(255,255,255,0.5)",
        comment: "#6a9955",
        keyword: "#569cd6",
        variable: "#4fc1ff",
        key: "#9cdcfe",
        string: "#ce9178",
        punctuation: "#d4d4d4",
        bioText: "#dcd7ce",
        bioBg: alpha("#ce9178", 0.08),
      }
    : {
        bg: "#fafafa",
        chromeBorder: "rgba(0,0,0,0.08)",
        filename: "rgba(0,0,0,0.45)",
        comment: "#008000",
        keyword: "#0000ff",
        variable: "#267f99",
        key: "#001080",
        string: "#a31515",
        punctuation: "#1e1e1e",
        bioText: "#3b3b3b",
        bioBg: alpha("#a31515", 0.05),
      };
}