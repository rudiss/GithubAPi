import styled, { css } from "styled-components";
import { breakpoints } from "../util";

export const desktopContainer = css`
  max-width: 860px;
  min-height: 600px;
  margin: 40px auto;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  height: 100%;

  .infinite-scroll-component {
    display: flex;
    max-width: 700px;
    margin: 0 auto;
    flex-wrap: wrap;
    padding: 36px;
    overflow: scroll;

    li {
      max-width: 140px;
      height: 215px;
      flex-direction: column;
      background: #ffffff;
      border: 1px solid #dedede;
      box-sizing: border-box;
      margin: 0;

      img {
        width: 100px;
        height: 100px;
        margin: 0;
      }
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 16px;
        line-height: 36px;
        text-align: center;
        color: #162668;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px 16px;

  input {
    background: #ffffff;
    border: 1px solid #dedede;
    border-radius: 5px;
    padding: 8px;
    width: 94%;

    @media (min-width: ${breakpoints.desktop.min}) {
      margin-right: 51px;
      height: 35px;
      padding: 0 8px;
      width: 245px;
      background: #ffffff;
      border: 1px solid #dedede;
      border-radius: 5px;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    div {
      width: inherit;
    }
  }

  @media (min-width: ${breakpoints.desktop.min}) {
    ${desktopContainer}
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 32px 0;
  margin: 0 19px;
  @media (min-width: ${breakpoints.desktop.min}) {
    border-bottom: 1px solid #ededed;
  }

  h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    color: #000000;
    margin-left: 33px;
    display: none;
    @media (min-width: ${breakpoints.desktop.min}) {
      display: unset;
    }
  }
`;
