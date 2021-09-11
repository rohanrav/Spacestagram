import styled from "styled-components";

const Heading = styled.h3`
  ${({ theme }) => `
        font-family: ${theme.font.header};
        color: ${theme.color.headingText};
    `}
`;

export default Heading;
