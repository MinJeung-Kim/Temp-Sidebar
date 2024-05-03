import { v } from "@src/styles/variables";
import styled from "styled-components";

export const S = {
  Layout: styled.div`
    display: flex;
  `,
  Main: styled.main`
    padding: calc(${v.smSpacing} * 2);
    h1 {
      font-size: 14px;
    }
  `,
};
