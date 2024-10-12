import { createTheme } from "@mui/material";
import { red, purple } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#10547b',
        },
        secondary: {
            main: '#543884',
        },
        error: {
            main: red.A400,
        },
    },
})