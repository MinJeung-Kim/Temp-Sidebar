import styled from "styled-components";
import { avatar } from "@src/utils/images";
import { LogOutIcon } from "@src/utils/icons";

export default function Profile() {
  return (
    <S.ProfileDetails>
      <S.ProfileContent>
        <img src={avatar} alt="" />
      </S.ProfileContent>
      <S.NameJob>
        <S.ProfileName>Roxie</S.ProfileName>
        <S.ProfileJob>Web Deginer</S.ProfileJob>
      </S.NameJob>
      <i>
        <LogOutIcon />
      </i>
    </S.ProfileDetails>
  );
}

const S = {
  ProfileDetails: styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1d1b31;
    padding: 6px 0;
    & img {
      height: 52px;
      width: 52px;
      object-fit: cover;
      border-radius: 16px;
      margin: 0 14px 0 12px;
      background: #1d1b31;
      padding: 10px;
    }
  `,
  ProfileContent: styled.div`
    display: flex;
    align-items: center;
  `,
  NameJob: styled.div``,
  ProfileName: styled.div`
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  `,
  ProfileJob: styled.div`
    color: #fff;
    font-size: 12px;
    font-weight: 500;
  `,
};
