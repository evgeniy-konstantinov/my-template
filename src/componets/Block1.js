import React from 'react';
import styled from 'styled-components';
import Button from './button/button';

const Section = styled.section`
  background-image: url();

  vertical-align: auto;
`;
const P = styled.p`
  font-weight: 500;
  font-size: 16px;
`;
const H1 = styled.h1`
  font-weight: 800;
  font-size: 48px;
  text-align: center;
`;
const Div = styled.div`
  display: flex;
  margin: 0 auto;
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
