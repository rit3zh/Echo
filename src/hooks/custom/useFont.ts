import { useFonts } from "expo-font";

export enum Fonts {
  Circular = "Circular",
  CircularNormal = "CircularNormal",
}

export function useInitialFonts() {
  const [fontsLoaded] = useFonts({
    Circular: require("../../fonts/CircularSpotifyText-Bold.otf"),
    CircularNormal: require("../../fonts/CircularSpotifyText-Medium.otf"),
  });

  return fontsLoaded;
}
