import { styled } from "styled-components";
import { ITodos } from "../../api/todos";
import { TodoItem } from "./TodoItem";
import { FC } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  background: rgb(39 169 237 / 10%);
  box-shadow: 0 0 100px 20px rgb(39 169 237 / 10%);
`;

interface IProps {
  isLoading: boolean;
  data: ITodos[];
}

const renderTotos = (isLoading: boolean, data: ITodos[]) =>
  !isLoading && data !== undefined ? (
    data.map((todo: ITodos) => {
      return (
        <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
      );
    })
  ) : (
    <p>Loading....</p>
  );

export const TodoList: FC<IProps> = ({ isLoading, data }) => {
  return <Container>{renderTotos(isLoading, data)}</Container>;
};
