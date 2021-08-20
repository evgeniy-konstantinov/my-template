import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: #000;
  margin: 0 20px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 100px;

  border-bottom: 1px solid #a1a1a1;
`;

export default function Navigate() {
  return (
    <Nav>
      <A href="/">Главная</A>
      <A href="/">Наши проекты</A>
      <A href="/">Услуги</A>
      <A href="/">Новости</A>
      <A href="/">Контакты</A>
    </Nav>
  );
}
