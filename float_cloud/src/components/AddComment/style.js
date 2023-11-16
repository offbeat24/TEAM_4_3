import styled, { css } from 'styled-components';

const disabledStyle = css`
  background: ${(props) => props.theme.mono.mono3};
  cursor: not-allowed;
`;

export const MainWrapper = styled.div`
  background: ${(props) => props.theme.color.skyblue50};
  opacity: 0.7;
  width: 450px;
  height: 600px;
  display: flex;
  justify-content: center;
`
export const CloudContainer = styled.form`
  margin: 20px 15px;
  width: 420px;
  height: 560px;
  flex-direction: column;
`

export const ExtensionTitle = styled.p`
  color: ${(props) => props.theme.mono.white};
  text-align: center;
  margin-top: 30px;
  font-size: 24px;
  line-height: 150%;
`

export const SelectorWrap = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 41px;
  align-items: center;
`;



export const TitleField = styled.input`
  padding: 10px 20px;
  width: 320px;
  height: 21px;
  border-radius: 10px;
  border: transparent;
  flex-shrink: 0;
  font-size: 14px;
  font-family: "SUIT-Regular"!important;
  color: ${(props) => props.theme.mono.mono5};
  line-height: 150%;
  font-weight: 700;

  ::placeholder {
    color: ${(props) => props.theme.mono.mono3};
    font-weight: 500;
  }
`;

export const ContentField = styled.textarea`
  margin-top: 10px;
  width: 320px;
  padding: 20px;
  border-radius: 10px;
  border: transparent;
  height: 189px; /* Example height */
  resize: none; 
  flex-shrink: 0;
  font-family: "SUIT-Regular"!important;
  color: ${(props) => props.theme.mono.mono5};
  line-height: 150%;
  font-size: 14px;
  font-weight: 700;

  ::placeholder {
    color: ${(props) => props.theme.mono.mono3};
    font-weight: 500;
  }
`;

export const SubmitButton = styled.button`
  padding: 8px 16px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background: ${(props) => props.theme.color.skyblue50};
  color: ${(props) => props.theme.mono.white};
  border: none;
  margin-top: 20px;

  ${props => props.disabled && disabledStyle}
`;