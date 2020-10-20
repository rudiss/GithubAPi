import styled from "styled-components";
import { breakpoints } from "../util";

export const Container = styled.div`
  position: relative;
  height: 335px;
`;

export const BackContainer = styled.div`
  background-image: url("/back.png");
  background-position: center;
  background-size: cover;
  height: 145px;

  @media (min-width: ${breakpoints.desktop.min}) {
    background-image: url("/backDesk.jpg");
    height: 250px;
  }
`;

export const UserContainer = styled.div`
  position: absolute;
  top: 42px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  left: 0;
  right: 0;

  @media (min-width: ${breakpoints.desktop.min}) {
    flex-direction: row;
    transform: translateY(90px);
  }
`;

export const NameContainer = styled.div`
  @media (min-width: ${breakpoints.desktop.min}) {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-right: auto;
  }
`;

export const Avatar = styled.img`
  border: 5px solid #eceff1;
  border-radius: 50%;
  width: 120px;

  @media (min-width: ${breakpoints.desktop.min}) {
    width: 170px;
    margin-right: 36px;
    margin-left: 13px;
  }
`;

export const Name = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #162668;
  @media (min-width: ${breakpoints.desktop.min}) {
    white-space: nowrap;
  }
`;
export const UserName = styled.h2`
  font-size: 16px;
  line-height: 22px;
  color: #90a4ae;
  margin-bottom: 21px;
`;

export const FollowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin: 0 10px;

  @media (min-width: ${breakpoints.desktop.min}) {
    max-width: 280px;
  }

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
