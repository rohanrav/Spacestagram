import styled from "styled-components";
import { Alert } from "react-bootstrap";
import theme from "../theme/theme";

const SAlert = styled(Alert)`
  color: ${theme.color.accent};
  background-color: ${theme.color.primary};
  font-family: ${theme.font.header};
  border: none;
`;

export default SAlert;
