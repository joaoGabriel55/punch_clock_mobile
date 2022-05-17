import Toast from "@components/toast/toast";
import MainNavigator from "@navigation/main-navigator";
import theme from "@styles/theme";
import { SafeAreaView, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <MainNavigator />
          <Toast />
        </SafeAreaView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
