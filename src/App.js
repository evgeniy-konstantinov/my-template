import React from "react";
import styled from "styled-components";
import Button from "./componets/button/button";
import Navigate from "./componets/navigate/nav";
import Block1 from "./componets/Block1";
import Heading_h2 from "./componets/heading_h2";

function App() {
  return (
    <>
      <Navigate />
      <Block1></Block1>

      <section className="create_mobile_app">
        <div className="content_create_app">
          <Heading_h2 primary>
            Мы создаем мобильные приложения
            <br /> для крупных корпораций
          </Heading_h2>
          <p className="create_description">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem
            <br /> Ipsum является стандартной "рыбой" для текстов на латинице с
            начала XVI века.
          </p>
        </div>
        <div className="main_flex_item">
          <div className="flex_items">
            <div className="item_svg">
              <div className="circle">
                <div className="sub_circle">
                  <img className="icon" src=""></img>
                </div>
              </div>
              <div className="circle_content">
                <h3 className="heanding_circle">Создание сайтов</h3>
                <p className="description_circle">
                  Lorem Ipsum - это текст- "рыба", часто используе в печати и
                  вэб-дизайне.
                </p>
              </div>
            </div>
          </div>
          <div className="flex_items">
            <div className="item_svg">
              <div className="circle">
                <div className="sub_circle">
                  <img className="icon" src=""></img>
                </div>
              </div>
              <div className="circle_content">
                <h3 className="heanding_circle">Создание сайтов</h3>
                <p className="description_circle">
                  Lorem Ipsum - это текст- "рыба", часто используе в печати и
                  вэб-дизайне.
                </p>
              </div>
            </div>
          </div>
          <div className="flex_items">
            <div className="item_svg">
              <div className="circle">
                <div className="sub_circle">
                  <img className="icon" src=""></img>
                </div>
              </div>
              <div className="circle_content">
                <h3 className="heanding_circle">Создание сайтов</h3>
                <p className="description_circle">
                  Lorem Ipsum - это текст- "рыба", часто используе в печати и
                  вэб-дизайне.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button>Все услуги</Button>
      </section>
      <section className="standarts"></section>
      <section className="specialist"></section>
      <section className="projects"></section>
      <section className="video"></section>
      <footer className="main_footer"></footer>
    </>
  );
}

export default App;
