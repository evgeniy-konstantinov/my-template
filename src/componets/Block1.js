import React from 'react';
import styled from 'styled-components';
import Button from './button/button';
import Rectangle from '../images/Rectangle.png';
console.log(Rectangle);

const Section = styled.section`
  background-image: url('../my-template/images/Rectangle.png');

  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const P = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
`;
const H1 = styled.h1`
  font-weight: 800;
  font-size: 48px;
  text-align: center;
  line-height: 64px;
  margin: 0 0 50px;
  color: #fff;
`;
const Div = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  width: 900px;
`;
export default function Block1() {
  return (
    <Section>
      <Div>
        <P>Передовая IT студия</P>
        <H1>Мы создаем легкие решения сложных задач и проблем</H1>
        <Button>Наши проекты</Button>
      </Div>
    </Section>
  );
}
