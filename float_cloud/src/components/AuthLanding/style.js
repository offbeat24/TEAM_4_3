import styled from 'styled-components';

export const MainWrapper = styled.div`
  background: ${(props) => props.theme.mono.white};
  width: 450px;
  height: 600px;
`
export const ContentWrapper = styled.div`
  padding: 20px;
  width: 410px;
  height: 560px;
  flex-direction: column;
`

export const LogoWrapper = styled.div`
  width: 100%;
`

export const TextLogo = styled.img`
  height: 30px;
  width: auto;
`

export const IntroduceWrapper = styled.div`
  width: 100%;
  height: 490px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Slogan = styled.img`
  object-fit: none;
`

export const AuthBtn = styled.button`
  padding: 8px 16px;
  font-family: "SUIT-Regular";
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background: ${(props) => props.theme.color.blue100};
  color: ${(props) => props.theme.mono.white};
  border: none;
  line-height: 150%;
`