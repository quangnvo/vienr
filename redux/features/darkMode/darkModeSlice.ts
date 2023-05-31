import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DarkModeType = {
    isDark: boolean;
};

const initialState = {
    isDark: false,
} as DarkModeType;

export const darkMode = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        checkIsDark: (state) => {
            const darkThemeInLocalStorage = localStorage.getItem("theme")
            if (darkThemeInLocalStorage === "light" || !darkThemeInLocalStorage) {
                state.isDark = false
            } else {
                state.isDark = true
            }
        },
    },
});

export const { checkIsDark } = darkMode.actions;

export default darkMode.reducer;
