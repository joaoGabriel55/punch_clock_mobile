import { ThemeProvider } from "styled-components/native";
import theme from "@styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import Toast from "../components/toast/toast";

const CustomRender = (ui, options) => {
  return render(
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {ui}
        <Toast />
      </NavigationContainer>
    </ThemeProvider>,
    options
  );
};

export { CustomRender as render };
export * from "@testing-library/react-native";
