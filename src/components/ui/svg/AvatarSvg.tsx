import { styled } from "styled-components";
import urlAvatar from "../../../assets/Img.svg";

const Img = styled.img`
  transition: 0.2s ease-out;
  &:hover {
    transform: scale3d(1.5, 1.5, 1.5);
  }
`;

export const AvatarSvg = () => {
  return <Img src={urlAvatar} />;
};
