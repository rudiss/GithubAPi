import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px 16px;

  input {
    background: #ffffff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: 8px;
    width: 94%;
    margin-bottom: 42px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
`;
