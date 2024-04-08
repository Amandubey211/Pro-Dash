// themesSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPalette: "dark", // Default palette
  palettes: {
    telegram: {
      primary: "#0088cc", //side bar, profile card, statics,loginpanel,
      colorScheme: "telegram", // input focus
      secondary: "#121d24", //dashboard background
      accent: "#4B5267", // profile card  link box bg
      accent2: "#C6C6C6", // proflie card link bg
    },
    whatsapp: {
      primary: "#25D366",
      colorScheme: "whatsapp",
      secondary: "#4B5267",
      accent: "#128C7E",
      accent2: "#ECE5DD", // Additional accent color for WhatsApp
    },
    instagram: {
      primary: "#833AB4",
      colorScheme: "instagram",
      secondary: "#4B5267",
      accent: "#F56040",
      accent2: "#262626", // Additional accent color for Instagram
    },
    dark: {
      primary: "#293645",
      colorScheme: "gray",
      secondary: "#121d24",
      accent: "#334254",
      accent2: "#edf2f7", // Additional accent color for Dark theme
    },
    light: {
      primary: "#ffff",
      colorScheme: "gray",
      secondary: "black",
      accent: "#334254",
      accent2: "#edf2f7", // Additional accent color for Dark theme
    },
  },
};

const themesSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    selectPalette(state, action) {
      state.currentPalette = action.payload;
    },
  },
});

export const { selectPalette } = themesSlice.actions;

export default themesSlice.reducer;
