import React from "react";
import ReactToast, {
  BaseToast,
  ErrorToast,
  InfoToast,
} from "react-native-toast-message";

const text1Style = {
  fontSize: 18,
  fontWeight: "600",
};

const style = { width: "auto" };

const toastConfig = {
  success: (props) => (
    <BaseToast {...props} text1Style={text1Style} style={style} />
  ),
  error: (props) => (
    <ErrorToast {...props} text1Style={text1Style} style={style} />
  ),
  info: (props) => (
    <InfoToast {...props} text1Style={text1Style} style={style} />
  ),
};

const Toast = () => <ReactToast config={toastConfig} />;

export default Toast;
