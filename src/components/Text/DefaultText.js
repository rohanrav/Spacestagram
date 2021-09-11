import styled from "styled-components";

const DefaultText = styled.h3`
  ${({ theme }) => `
        font-family: ${theme.font.default};
        color: ${theme.color.defaultText};
    `}
`;

export default DefaultText;
