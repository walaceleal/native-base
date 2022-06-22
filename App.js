import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Ex1 } from "./src/Ex1";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ex2 } from "./src/Ex2";

export default function App() {
  // Define the config
  const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
  };

  // extend the theme
  const customTheme = extendTheme({ config });

  return (
    <NativeBaseProvider theme={customTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Ex2 />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}