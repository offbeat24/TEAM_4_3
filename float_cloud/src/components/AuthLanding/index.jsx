import React from 'react';
import * as S from './style';
import EngLogo from '../../assets/EngLogo.svg';
import Slogan from '../../assets/Slogan.png';
function AuthLanding () {
  return (
    <S.MainWrapper>
      <S.ContentWrapper>
        <S.LogoWrapper>
          <S.TextLogo src={EngLogo}/>
        </S.LogoWrapper>
        <S.IntroduceWrapper>
          <S.Slogan src={Slogan} />
        </S.IntroduceWrapper>
        <S.AuthBtn>시작하기</S.AuthBtn>
      </S.ContentWrapper>
    </S.MainWrapper>
  );
}

export default AuthLanding;