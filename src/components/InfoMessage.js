import styled from "styled-components";
import { Alert } from "react-bootstrap";
import theme from "../theme/theme";

const SAlert = styled(Alert)`
  color: #f5f5f5;
  background-color: #3c4650;
  font-family: ${theme.font.header};
  border: none;
`;

export default SAlert;
