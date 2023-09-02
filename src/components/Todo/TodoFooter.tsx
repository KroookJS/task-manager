import { styled } from "styled-components";
import { BtnTodo } from "../ui/BtnTodo";
import { ArrouSvg } from "../ui/svg/ArrouSvg";
import { AvatarSvg } from "../ui/svg/AvatarSvg";

const FooteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 8px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 5px;
`;

export const TodoFooter = () => {
  return (
    <FooteContainer>
      <ButtonBox>
        <BtnTodo bg="#B233A6" color="#fff">
          Enili title
        </BtnTodo>

        <BtnTodo bg="#EBEEF6" color="#616C82">
          Front-end
        </BtnTodo>
        <ArrouSvg />
      </ButtonBox>

      <AvatarSvg />
    </FooteContainer>
  );
};
