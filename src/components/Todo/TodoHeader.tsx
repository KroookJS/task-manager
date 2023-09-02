import { FC, useState } from "react";
import { styled } from "styled-components";
import { ITodoItem } from "../../types";

const TitleBox = styled.div`
  display: flex;
  align-items: flex-start;
  max-height: 55px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 18.2px;
  color: #3D8FEC;


  text-align: start;
  text-indent: 19px;

  position: relative;
  left: -16px;
  top: -1px;
  
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
`;

export const TodoHeader: FC<ITodoItem> = ({ completed, title }) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleTodo = (): void => {
    setIsCompleted(!isCompleted);
  };

  return (
    <TitleBox>
      <input
        type="checkbox"
        style={{ zIndex: 99, background: "#fff" }}
        checked={isCompleted}
        onChange={toggleTodo}
        className={isCompleted ? "activeCheck" : ""}
        name="checkbox-checked"
      />
      <Title>{title}</Title>
    </TitleBox>
  );
};
