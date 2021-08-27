import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  height: 100px;
  border-bottom: 1px solid #f6f6f8;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  max-width: 1920px;
  backdrop-filter: blur(3px);
`;
const Div = styled.div`
  width: 1110px;
  display: flex;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  width: fit-content;
`;
const A = styled.a`
  margin-right: 20px;
  padding: 0 15px 38px;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: #dcdcdc;
  margin-bottom: 2px solid transparent;

  :last-child {
    margin-right: 0;
  }

  :hover {
    border-bottom: 2px solid #dcdcdc;
  }
`;

export default function Navigate() {
  return (
    <Header>
      <Div>
        <Nav>
          <A href="/">Главная</A>
          <A href="#our_projects">Наши проекты</A>
          <A href="#our_app">Услуги</A>
          <A href="#our_video">Новости</A>
          <A href="#our_contact">Контакты</A>
        </Nav>
      </Div>
    </Header>
  );
}
