import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownToggle = styled.div`
  width: 312px;
  height: 31px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.mono.white};
  border: transparent;
  text-align: center;
  line-height: 150%;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.4px;
  color: ${(props) => props.theme.color.skyblue100};
  cursor: pointer;
  z-index: 100;
  position: relative;

  img {
    margin-left: auto;
    border-radius: 100%;
  }
  span {
    position: fixed;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  border: transparent;
  background: #d1e9fa;
  border-radius: 0 0 10px 10px;
  padding-top: 25px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
  opacity: 0.9;

  ::-webkit-scrollbar {
  }
  ::-webkit-scrollbar-thumb {

  }
`


export const MenuItem = styled.div`
  padding: 2.5px 10px;
  font-size: 14px;
  height: 30px;
  font-weight: 700;
  background: transparent;
  display : flex;
	align-items : center;
  line-height: 150%;
  color: ${(props) => props.theme.color.skyblue100};
  z-index: 1;
  &:hover {
    background-color: ${(props) => props.theme.mono.white};
  }
`;