import { FC } from "react";
import { styled } from "styled-components";
import { IButton, IPropsButton } from "../../types";

const Button = styled.button<IPropsButton>`
  border: none;
  padding: 1px 6px 2px 6px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 4px;

  color: ${(props) => (props.color ? props.color : "#616C82")};
  background: ${(props) => (props.bg ? props.bg : "background: #b233a6")};

  transition: 0.2s ease-out;
  &:active {
    transform: scale3d(1.2, 1.2, 1.2);
  }
`;

export const BtnTodo: FC<IButton> = ({ children, bg, color }) => {
  return (
    <Button bg={bg} color={color}>
      {children}
    </Button>
  );
};
