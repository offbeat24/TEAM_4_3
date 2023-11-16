import React from 'react';
import { useState, useEffect } from 'react';
import Dropdown from '../DropDown';
import * as S from './style';

function AddComment ({ token }) {
  const [isOpenTeam, setIsOpenTeam] = useState(false);
  const [isOpenTopic, setIsOpenTopic] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDisable, setDisable] = useState(true);

  const toggleDropdownTeam = () => {
    setIsOpenTeam(!isOpenTeam);
    if (isOpenTopic) setIsOpenTopic(false);
  };

  const toggleDropdownTopic = () => {
    setIsOpenTopic(!isOpenTopic);
    if (isOpenTeam) setIsOpenTeam(false);
  };

  const handleSelectTeam = item => {
    setSelectedTeam(item);
    setIsOpenTeam(false);
  };

  const handleSelectTopic = item => {
    setSelectedTopic(item);
    setIsOpenTopic(false);
  };

  const handleTitle = event => {
    setTitle(event.target.value);
  };

  const handleContent = event => {
    setContent(event.target.value);
  };

  useEffect(()=> {
    if ( selectedTeam !== "" && selectedTopic !== "" && title !== "" && content !== "" ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  },[selectedTeam, selectedTopic, title, content, isDisable]);
  const items = ["항목 1", "항목 2", "항목 3", "항목 4", "항목 5", "항목 6", "항목 7", "항목 8"];

  const onSubmit =  async() => {
    alert("구름이 작성 되었습니다.")
  }
  return (
    <S.MainWrapper>
      <S.CloudContainer >
        <S.ExtensionTitle>
          구름 바로 등록하기 
        </S.ExtensionTitle>
        <S.SelectorWrap>
          <Dropdown 
            zIdx = {5}
            items={items} 
            onItemSelect={handleSelectTeam} 
            isOpen={isOpenTeam}
            onToggle={toggleDropdownTeam}
            holder={"팀을 선택하세요"} 
          />
          <div style={{height:"10px"}} />
          <Dropdown 
            zIdx = {3}
            items={items} 
            isOpen={isOpenTopic}
            onToggle={toggleDropdownTopic}
            onItemSelect={handleSelectTopic} 
            holder={"주제를 선택하세요"} 
          />
        </S.SelectorWrap>
        <S.TextFieldWrapper >
          <S.TitleField
            id='title'
            placeholder="구름의 제목을 입력하세요"
            onChange={e => handleTitle(e)}>
          </S.TitleField>
          <S.ContentField
            id='contents'
            placeholder="구름에 대한 세부 설명을 작성해주세요"
            onChange={e => handleContent(e)}>
          </S.ContentField>
        </S.TextFieldWrapper>
        <S.SubmitButton onClick={onSubmit} disabled={isDisable}>확인</S.SubmitButton>
      </S.CloudContainer>
    </S.MainWrapper>
  )
}

export default AddComment;