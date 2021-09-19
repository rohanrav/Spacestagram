import styled from "styled-components";

const LinkButton = styled.button`
  ${({ theme, inverted = false }) => `
    padding: 5px 15px 5px 15px;
    font-family: ${theme.font.header};
    border-radius: 10px;
    transition: 0.2s;
    background-color: ${
      inverted ? theme.color.defaultText : theme.color.btnBackground
    };
    border: ${inverted ? `2px solid ${theme.color.defaultText}` : "none"};
    color: ${inverted ? theme.color.btnBackground : theme.color.defaultText};

    &:hover {
      background-color: ${
        inverted ? theme.color.btnBackground : theme.color.defaultText
      };
      color: ${inverted ? theme.color.defaultText : theme.color.btnBackground};
      border: ${inverted ? `2px solid ${theme.color.defaultText}` : "none"};
    }
  `}
`;

export default LinkButton;
