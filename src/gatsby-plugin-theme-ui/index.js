import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.red[9],
  },
  styles: {
    ...tailwind.styles,
  },
  buttons: {
    ...tailwind.buttons,
    primary: {
      ...tailwind.buttons.primary,
      bg: "primary",
      transition: "all 0.225s ease-in-out",
      "&:hover": {
        bg: tailwind.colors.red[8],
        cursor: "pointer",
      },
      "&:disabled": {
        opacity: 0.65,
      },
    },
  },
}
