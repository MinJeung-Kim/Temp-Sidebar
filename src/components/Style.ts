import styled, { css } from "styled-components";

export const SubMenuStyle = styled.ul<{ $close: boolean; $isSub: boolean }>`
  display: ${({ $close }) => ($close ? "none" : "block")};
  padding: ${({ $isSub }) => ($isSub ? "10px 20px" : "6px 6px 14px 80px")};
  margin-top: ${({ $isSub }) => ($isSub ? 0 : "-10px")};
  background: #1d1b31;
  white-space: nowrap;

  ${({ $isSub }) =>
    $isSub &&
    css`
      display: block;
      position: absolute;
      left: 100%;
      top: -10px;
      border-radius: 0 6px 6px 0;
      transition: all 0.4s ease;
      opacity: 0;
      pointer-events: none;
    `}

  & a {
    color: #fff;
    font-size: 15px;
    padding: 5px 0;
    opacity: 0.6;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export const S = {
  Sidebar: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 260px;
    background: #11101d;
  `,
  LogoDetails: styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    & i {
      font-size: 30px;
      color: #fff;
      height: 50px;
      min-width: 78px;
      text-align: center;
      line-height: 50px;
    }
  `,
  LogoName: styled.span`
    font-size: 22px;
    font-weight: 600;
    color: #fff;
  `,

  NavLinks: styled.ul<{ $isSub: boolean }>`
    height: 100%;
    padding: 30px 0 150px 0;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    & li {
      position: relative;
      list-style: none;
      transition: all 0.4s ease;
      &:hover {
        background: #1d1b31;
        ${SubMenuStyle} {
          ${({ $isSub }) =>
            $isSub &&
            css`
              top: 0;
              opacity: 1;
              pointer-events: auto;
            `}
        }
      }
      & a {
        display: flex;
        align-items: center;
        text-decoration: none;
      }

      & i {
        height: 50px;
        min-width: 78px;
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-size: 20px;
      }
    }
  `,
  SubLinkName: styled.span<{ $isSub: boolean }>`
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    opacity: 1;
  `,
  LinkName: styled.span`
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    opacity: 1;
  `,
  IocnLink: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  ArrowIcon: styled.i<{ $close: boolean }>`
    transition: all 0.3s ease;
    ${({ $close }) =>
      $close &&
      css`
        transform: rotate(-180deg);
      `}
  `,

  HomeSection: styled.section`
    position: relative;
    background: red;
    height: 100vh;
    left: 260px;
    width: calc() (100% - 260px);
  `,
  HomeContent: styled.div`
    height: 60px;
    display: flex;
    align-items: center;
  `,
  Text: styled.span`
    color: #fff;
    font-size: 26px;
    font-weight: 600;
    > i {
      color: #fff;
      font-size: 35px;
    }
  `,
};
