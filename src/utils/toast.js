import Toast from "react-native-toast-message";

export const TOAST_POSITION = {
  TOP: "top",
  BOTTOM: "bottom",
};

export const TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
};

export const showToast = ({
  type = TOAST_TYPES.INFO,
  position = TOAST_POSITION.TOP,
  text,
  onPress = () => {},
  onPressAndHide = () => {},
  onHide = () => {},
}) => {
  Toast.show({
    type: type,
    text1: text,
    position,
    onPress: () => {
      if (onPressAndHide) {
        onPressAndHide();
        Toast.hide();
      } else {
        onPress();
      }
    },
    onHide,
  });
};
