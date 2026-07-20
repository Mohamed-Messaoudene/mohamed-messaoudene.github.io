declare module '@mui/material/styles' {
  interface PaletteColor {
    text?: string;
  }

  interface SimplePaletteColorOptions {
    text?: string;
  }

  interface TypeBackground {
    bgcolor?: string;
    bgcolor1?: string;
    bgcolor2?: string;
  }

  interface CodePalette {
    bg: string;
    chromeBorder: string;
    filename: string;
    comment: string;
    keyword: string;
    variable: string;
    key: string;
    string: string;
    punctuation: string;
    bioText: string;
    bioBg: string;
  }

  interface Palette {
    code: CodePalette;
  }

  interface PaletteOptions {
    code?: Partial<CodePalette>;
  }
}

export {};