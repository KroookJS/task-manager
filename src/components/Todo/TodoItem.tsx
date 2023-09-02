import { FC } from "react";
import { styled } from "styled-components";
import { TodoHeader } from "./TodoHeader";
import { TodoBody } from "./TodoBody";
import { TodoFooter } from "./TodoFooter";
import { ITodoItem } from "../../types";

const LiContent = styled.div`
  list-style: none;
  padding: 7px 5px;
  background: #f4f8ff;
  border-radius: 7px;
  width: 253px;
  border: 1px solid #cbd5e6ed;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 11px;

  box-shadow: 0 0 2px 2px #d0daeb;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale3d(1.08, 1.08, 08);
  }
`;

export const TodoItem: FC<ITodoItem> = ({ title, completed }) => {
  return (
    <LiContent>
      <TodoHeader completed={completed} title={title} />
      <TodoBody />
      <TodoFooter />
    </LiContent>
  );
};
