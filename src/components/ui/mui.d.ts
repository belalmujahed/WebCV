// src/types/mui.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        tertiary: Palette['primary']; // Or specify exact structure if different
        outline: string;
        outlineVariant: string;
        // Add other custom top-level palette properties if needed, e.g.,
        // brandColor: PaletteColor;
    }

    interface PaletteOptions {
        tertiary?: PaletteOptions['primary']; // Make it optional for PaletteOptions
        outline?: string;
        outlineVariant?: string;
        // brandColor?: PaletteColorOptions;
    }

    // If you also want to add new color variations (e.g., 'tertiary' as a string literal)
    // to be usable directly in props like `color="tertiary"`, you'd do:
    interface SimplePaletteColorOptions {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
    }

    interface PaletteColor {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
    }

    // If you want to augment the theme with new properties not just colors, e.g. a new spacing unit
    // interface ThemeOptions {
    //   customSpacing?: number;
    // }
    // interface Theme {
    //   customSpacing: number;
    // }
}

// If you want to allow 'tertiary' as a string literal in components' 'color' prop
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: true;
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        tertiary: true;
    }
}

// Add more components as needed if you use color="tertiary" on them
// declare module '@mui/material/Typography' {
//   interface TypographyPropsColorOverrides {
//     tertiary: true;
//   }
// }
