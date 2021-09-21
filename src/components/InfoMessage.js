import styled from "styled-components";
import theme from "../theme/theme";

import { Alert } from "react-bootstrap";

const InfoMessage = styled(Alert)`
  color: ${theme.color.accent};
  background-color: ${theme.color.primary};
  font-family: ${theme.font.header};
  border: none;
`;

export default InfoMessage;
