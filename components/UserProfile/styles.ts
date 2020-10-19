import styled from "styled-components";

export const Container = styled.div``;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const Avatar = styled.img`
  border: 5px solid #eceff1;
  border-radius: 50%;
  width: 120px;
`;
export const Name = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #162668;
`;
export const UserName = styled.h2`
  font-size: 16px;
  line-height: 22px;
  color: #90a4ae;
`;
export const FollowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 0 10px;

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #162668;
    flex-wrap: wrap;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Icon = styled.img``;
