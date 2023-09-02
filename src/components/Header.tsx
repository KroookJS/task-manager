import { styled } from "styled-components";
import { Logo } from "./ui/Logo";
import { AddSvg } from "./ui/svg/AddSvg";

const HederBox = styled.header`
  min-width: 257px;
  padding: 0 4px;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 0 100px 20px rgba(255, 255, 255, 0.2);
`;

const TextHeader = styled.h5`
  line-height: 18.2px;
  font-size: 13px;
  font-weight: 600;
  color: #50b810;
`;

const LenghtTodos = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #555555;
  line-height: 16.8px;
  width: 18px;
  height: 18px;

  border-radius: 5px;
  border: 1px solid #7b8aab;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const BoxFiter = styled.div`
  width: 51px;
  height: 50px;
  border-radius: 48px;
  background: rgb(79 248 37 / 61%);
  position: absolute;
  right: 67px;
  top: 80px;
  filter: blur(25px);
  box-shadow: 0 0 100px 20px rgb(79 248 37 / 61%);

  @media (max-width: 679px) {
    right: 0px;
  }
`;

const BoxFilterBoby = styled(BoxFiter)`
  left: 57px;
  top: 630px;
  @media (max-width: 679px) {
    left: 0px;
  }
`;

export const Header = ({ lengthTodos }: { lengthTodos: number }) => {
  return (
    <HederBox>
      <TextHeader>Todos</TextHeader>
      <Logo />

      <AddBox>
        <AddSvg />
        <LenghtTodos>
          <span>{lengthTodos}</span>
        </LenghtTodos>
      </AddBox>

      <BoxFiter />
      <BoxFilterBoby />
    </HederBox>
  );
};
