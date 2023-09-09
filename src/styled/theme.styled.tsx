import { createTheme } from "@mui/material/styles";
export const lightTheme = createTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
    },
    palette: {
        mode: "light",
        primary: {
            main: "rgba(0,0,0,0.8)",
        },
        secondary: {
            main: "rgba(0,0,0,0.8)",
        },
        info:{
            main:"#1070CF"
        },
        background:{
            paper:"rgba(245, 245, 245, 1)",
            default:"rgba(255,255,255,1)",
        },
        text:{
            secondary:"rgba(110, 107, 123, 1)",
            primary:"rgba(0,0,0,0.8)",
        }
    },
});

export const darkTheme = createTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
    },
    palette: {
        mode: "dark",
        primary: {
            main: "rgba(255,255,255,1)",
        },
        secondary: {
            main: "rgba(255,255,255,1)",
        },
        info:{
            main:"#1e1e1e"
        },
        background:{
            default:"rgba(0,0,0,1)",
        },
        text:{
            secondary:"rgba(110, 107, 123, 1)",
            primary: "rgba(255,255,255,1)",
        }
    }
});
