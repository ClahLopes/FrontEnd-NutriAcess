import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  padding: 14px 22px;

  justify-content: space-between;

  align-items: center;

  > img {
    width: 180px;
    margin-left: 10px;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-grow: 0.2;

  gap: 24px;
`;