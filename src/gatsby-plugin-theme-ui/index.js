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
}
