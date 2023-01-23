import styled from "styled-components";

export const GeneralContainer = styled.div`
  width: 65%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  h2 {
    font-size: 24px;
    margin-top: 25px;
    color: #656565;
  }

  form {
    width: 252px;
    display: flex;
    flex-direction: column;
  }

  button {
    width: 256px;
    height: 32px;

    background-color: #5d9cec;
    color: #656565;

    border: 1px solid #656565;

    transition: 0.3s;
    cursor: pointer;
  }

  button:hover {
    background-color: #80b7ff;
    color: #404040;

    border: 1px solid #404040;
  }
`;

export const ContainerInput = styled.div`
  height: 55px;
  margin-bottom: 18px;

  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: #656565;
  }

  input {
    width: 250px;
    height: 45px;
    background-color: #fff;
    border: 1px solid #dde6e9;
    border-radius: 4px;
    margin-top: 5px;
  }

  input::placeholder {
    color: rgba(101, 101, 101, 0.3);
  }

  span {
    height: 12px;
    font-size: 12px;
  }
`;
