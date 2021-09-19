import styled from "styled-components";
import theme from "../theme/theme";

const HorizontalRule = styled.hr`
  ${({ color = theme.color.primary, height = "5px" }) => `
    background-color: ${color};
    opacity: 0.75;
    margin: 0 0 5px 0;

    &:not([size]) {
        height: ${height};
    }
  `}
`;

export default HorizontalRule;
