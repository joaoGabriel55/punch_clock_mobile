import React from "react";
import Template from "../template/template";
import { FontAwesome5 } from "@expo/vector-icons";

import { Container, Message } from "./no-content.styles";
import theme from "../../styles/theme";

const NoContent = ({ message }) => {
  return (
    <Template>
      <Container>
        <FontAwesome5
          name="exclamation-circle"
          size={24}
          color={theme.colors.disabledText}
        />
        <Message>{message}</Message>
      </Container>
    </Template>
  );
};

export default NoContent;
