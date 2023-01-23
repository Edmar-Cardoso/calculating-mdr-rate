import styled from "styled-components";

export const Container = styled.div`
  width: 35%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    height: 70%;

    font-size: 16px;
    font-weight: 400;
    color: #5d9cec;

    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }

  div > h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    color: #3d75bb;
    border-bottom: 1px solid #3d75bb;
  }

  span {
    font-size: 16px;
    font-weight: 600;
  }
`;
