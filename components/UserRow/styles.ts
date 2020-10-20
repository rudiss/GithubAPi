import styled from "styled-components";
import { breakpoints } from "../util";

export const Container = styled.li`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 11px;
  margin-bottom: 14px;

  @media (min-width: ${breakpoints.desktop.min}) {
    padding: 40px 0;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  background: url(""),
    linear-gradient(
      180deg,
      #162668 0%,
      #20276a 4%,
      #663279 30%,
      #9d3985 54%,
      #c53f8d 74%,
      #dd4392 90%,
      #e64494 100%
    );
  border-radius: 50%;
  border: 5px solid #f2f2f2;
  margin-right: 22px;
`;

export const UserName = styled.p`
  max-width: 290px;
  height: 61px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  font-weight: 600;
  font-size: 15px;
  line-height: 36px;
  text-align: center;
`;
