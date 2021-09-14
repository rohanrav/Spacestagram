import styled from "styled-components";

const HorizontalRule = styled.hr`
  ${({ color = "#3c4650", height = "5px" }) => `
    background-color: ${color};
    opacity: 0.75;
    margin: 0 0 5px 0;

    &:not([size]) {
        height: ${height};
    }
  `}
`;

export default HorizontalRule;
