import { styled } from "styled-components";
import { useFakerData } from "../../hooks/useFakerData";

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Time = styled.p`
  line-height: 18.2px;
  font-size: 13px;
  font-weight: 600;
  color: #50b810;
`;

const Description = styled.p`
  color: #555555;
  padding: 1px 0;
  text-align: start;
  line-height: 18.2px;
  font-size: 13px;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const TodoBody = () => {
  const { dateStart, dateCompletion, description } = useFakerData();
  return (
    <div style={{ padding: "0 5px" }}>
      <DataContainer>
        <Time>{dateStart}</Time>
        <Time>{dateCompletion}</Time>
      </DataContainer>
      <Description>{description}</Description>
    </div>
  );
};
