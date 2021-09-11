import styled from "styled-components";
import theme from "../theme/theme";

const LinkButton = styled.button`
  padding: 5px 15px 5px 15px;
  font-family: ${theme.font.header};
  border-radius: 10px;
  background-color: #1d1d1d;
  color: ${theme.color.defaultText};
  border: none;
  transition: 0.2s;

  &:hover {
    background-color: ${theme.color.defaultText};
    color: #1d1d1d;
  }
`;

export default LinkButton;
