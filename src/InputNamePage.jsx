import React from 'react';

import { Link } from 'react-router-dom';

export default function InputNamePage() {
  return (
    <>
      <h1>습관 생성중...</h1>
      <h3>Flexible은 탄력적 습관 형성을 추구합니다.</h3>
      <p>유연하지 못한 계획은 쉽게 깨집니다.<br></br>그 날의 기분과 컨디션에 따라 최적의 옵션을 선택하세요.</p>
      <label>이름을 입력해주세요<br>
      </br><input type="text"></input></label>
      <button><Link to="/guide/inputhabit">입력</Link></button>
    </>
  );
}
