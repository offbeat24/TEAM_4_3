import React, { useState } from 'react';
import ArrowDrop from '../../arrow_drop.png';
import * as S from './style';

function Dropdown({ zIdx, items, isOpen, onToggle, onItemSelect, holder }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = item => {
    setSelectedItem(item);
    onItemSelect(item);
  };

  return (
      <S.DropdownContainer>
        <S.DropdownToggle onClick={onToggle} style={{zIndex:zIdx}}>
          <span>{selectedItem || holder}</span>
          <img src={ArrowDrop} alt=''/>
        </S.DropdownToggle>
        {isOpen && (
          <S.DropdownMenu style={{zIndex:zIdx-1}}>
            {items.map(item => (
              <S.MenuItem key={item} onClick={() => handleSelect(item)}>{item}</S.MenuItem>
            ))}
          </S.DropdownMenu>
        )}
      </S.DropdownContainer>
  );
}

export default Dropdown;