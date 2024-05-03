import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnReset, v } from "@src/styles/variables";

export const S = {
  Sidebar: styled.div<{ isOpen: boolean }>`
    width: ${({ isOpen }) => (!isOpen ? `auto` : `${v.sidebarWidth}`)};
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: ${({ isOpen }) => (!isOpen ? `center` : `baseline`)};
  `,
  SidebarButton: styled.button<{ isOpen: boolean }>`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
      0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: ${({ isOpen }) =>
      !isOpen ? `rotate(268deg)` : `rotate(93deg)`};
  `,
  Logo: styled.div`
    width: 52px;
    img {
      max-width: 100%;
      height: auto;
    }
    cursor: pointer;
    margin-bottom: ${v.lgSpacing};
  `,
  Search: styled.div`
    background: ${({ theme }) => theme.baAlpha};
    border: 1px solid ${({ theme }) => theme.bg3};
    border-radius: ${v.borderRadius};
    input {
      padding: 0 ${v.smSpacing};
      font-family: inherit;
      letter-spacing: inherit;
      font-size: 16px;
      width: 100%;
      outline: none;
      border: none;
      color: inherit;
      background: transparent;
    }
    display: flex;
  `,
  SearchIcon: styled.button`
    ${btnReset};
    padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
    display: flex;
    cursor: pointer;

    svg {
      font-size: 20px;
    }
  `,
  Divider: styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
  `,
  Nav: styled.div<{ isOpen: boolean }>`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  LinkContainer: styled.div<{ isActive: boolean }>`
    background: ${({ theme, isActive }) =>
      !isActive ? `transparent` : theme.bg3};
    border-radius: ${v.borderRadius};
    margin: 8px 0;
    &:hover {
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }
  `,
  Link: styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
  `,
  LinkIcon: styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    svg {
      font-size: 20px;
    }
  `,

  LinkLabel: styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
  `,
  LinkNotification: styled.div`
    font-size: 14px;
    padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
    border-radius: calc(${v.borderRadius} / 2);
    background: ${({ theme }) => theme.primary};
    color: white;
    margin-right: ${v.mdSpacing};
  `,
  Theme: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
  `,
  ThemeLabel: styled.span`
    display: block;
    flex: 1;
  `,
  ThemeToggler: styled.button<{ isActive: boolean }>`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme, isActive }) =>
      !isActive ? theme.bg3 : theme.primary};
    position: relative;
  `,
  ToggleThumb: styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: 0.2s ease right;
    right: calc(100% - 18px -1px);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
  `,
};
