import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #ededed;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  a,
  img {
    cursor: pointer;
  }
`;

export const Label = styled.h2`
  font-weight: 600;
  margin-left: 10px;
  font-size: 14px;
  line-height: 21px;
  color: #263238;
`;
