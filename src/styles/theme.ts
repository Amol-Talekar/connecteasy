export interface Sizes {
  XXS: number | string;
  XS: number | string;
  S: number | string;
  M: number | string;
  ML: number | string;
  L: number | string;
  XL: number | string;
  XXL: number | string;
}

export const screenSizes: Partial<Sizes> = {
  XXS: 360,
  XS: 480,
  S: 640,
  M: 768,
  ML: 820,
  L: 1024,
  XL: 1280,
  XXL: 1440,
};

export const fontSizes: Sizes = {
  XXS: "14px",
  XS: "16px",
  S: "18px",
  M: "24px",
  ML: "28px",
  L: "32px",
  XL: "36px",
  XXL: "48px",
};

export interface Colors {
  white: string;
  black: string;
  success: string;
  inprogress: string;
  failure: string;
  orange: string;
  red: string;
}
export const colors: Colors = {
  white: "#ffffff",
  black: "#000000",
  success: "#78FFBE",
  inprogress: "#FFFA7A",
  failure: "#FF9090",
  orange: "#FFA500",
  red: "#FF0000",
};

export const theme = colors;

export enum Themes {
  BASIC,
  LIGHT,
}

/* export const getTheme = (theme: Themes) => {
    switch (theme) {
        case Themes.BASIC:
            return basicTheme
        case Themes.LIGHT:
            return lightTheme
        default:
            return basicTheme
    }
} */
