import React from 'react';
import styled from 'styled-components';
import Button from './componets/button/button';
import Navigate from './componets/navigate/nav';
import Block1 from './componets/Block1';
import Heading_h2 from './componets/heading_h2';
import Group from './images/Group.png';
import Web from './images/web-programming.png';
import Recta from './images/Rectangle 2.png';
import Specialist from './images/Rectangle 2.1.png';
import Projects from './images/Rectangle 2.3.png';
import Call from './images/call.png';
import List from './images/envelope.png';
import Envel from './images/placeholder.png';
import Vector from './images/Vector.png';
import Video from './images/video.png';
import Video2 from './images/video2.png';
import Video_btn from './images/play-button.png';
import Rectangle from './images/Rectangle.png';

function App() {
  return (
    <>
      <Navigate />
      <Block1 background={Rectangle}></Block1>

      <section className="create_mobile_app">
        <div className="content_create_app">
          <Heading_h2 primary center>
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
                  <img className="icon" src={Group}></img>
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
                  <img className="icon" src={Group}></img>
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
                  <img className="icon" src={Group}></img>
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
      <section className="standarts">
        <div className="standart_content">
          <div className="border_block">
            <div className="left_block">
              <Heading_h2 primary>Высокие стандарты разработки</Heading_h2>
              <p className="left_block_descrition">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. стандартной "рыбой" для
                текстов на латинице с начала XVI века.
              </p>
              <a href="/">Подробнее о компании</a>
            </div>
            <div className="right_block">
              <img src={Recta} />
            </div>
          </div>
          <div className="standarts_icon">
            <div className="icon_block">
              <img src={Web} className="icon_img"></img>

              <p className="icon_num">125</p>
              <p className="icon_text">Our projects</p>
            </div>
            <div className="icon_block">
              <img src={Web} className="icon_img"></img>

              <p className="icon_num">125</p>
              <p className="icon_text">Our projects</p>
            </div>
            <div className="icon_block">
              <img src={Web} className="icon_img"></img>

              <p className="icon_num">125</p>
              <p className="icon_text">Our projects</p>
            </div>
            <div className="icon_block">
              <img src={Web} className="icon_img"></img>

              <p className="icon_num">125</p>
              <p className="icon_text">Our projects</p>
            </div>
            <div className="icon_block">
              <img src={Web} className="icon_img"></img>

              <p className="icon_num">125</p>
              <p className="icon_text">Our projects</p>
            </div>
          </div>
        </div>
      </section>
      <section className="specialist">
        <div className="main_specialist">
          <div className="specialist_heading">
            <Heading_h2>
              Наши работы, на которых
              <br /> мы специализируемся
            </Heading_h2>
            <Button>Все услуги</Button>
          </div>
          <div className="main_specialist_block">
            <div className="specialist_block">
              <img src={Specialist} className="specialist_img" />
              <h3 className="specialist_study">
                <span>01.</span> Исследование и упаковка
              </h3>
              <p className="specialist_text">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века.
              </p>
              <a href="/">Подробнее</a>
            </div>
            <div className="specialist_block">
              <img src={Specialist} className="specialist_img" />
              <h3 className="specialist_study">
                <span>01.</span> Исследование и упаковка
              </h3>
              <p className="specialist_text">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века.
              </p>
              <a href="/">Подробнее</a>
            </div>
            <div className="specialist_block">
              <img src={Specialist} className="specialist_img" />
              <h3 className="specialist_study">
                <span>01.</span> Исследование и упаковка
              </h3>
              <p className="specialist_text">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века.
              </p>
              <a href="/">Подробнее</a>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="projects_main">
          <div className="projects_heading">
            <Heading_h2 primary>Наши проекты</Heading_h2>
            <p className="projects_description">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem
              <br /> Ipsum является стандартной "рыбой" для текстов на латинице
              с начала XVI века.
            </p>
          </div>
          <div className="projects_img">
            <img src={Projects}></img>
            <img src={Projects}></img>
            <img src={Projects}></img>
            <img src={Projects}></img>
          </div>
          <Button>Все проекты</Button>
        </div>
      </section>
      <section className="video">
        <div className="main_video">
          <div className="border_video">
            <Heading_h2>Видео о нашей работе</Heading_h2>
            <p className="text_video">Просто посмотрите, как мы работаем</p>
            <div className="block_video">
              <button className="button_video">
                <img src={Video_btn} className="icon_video" />
                Смотреть видео
              </button>
            </div>
          </div>
          <div className="subscription_video">
            <h3 className="sup_heading_video">Подпишитесь на нашу рассылку</h3>
            <p className="sub_text_video">
              Полезные статьи, акции, новости - получите все это сейчас!
            </p>
            <form>
              <input
                type="email"
                placeholder="Ваш e-mail"
                className="email_input"
              ></input>
              <button className="btn">Подписаться</button>
            </form>
            <p className="sup_text_video">
              Мы не шлем спам, и передаем никому ваши данные.
            </p>
          </div>
        </div>
      </section>
      <footer className="main_footer">
        <div className="footer_block">
          <div className="footer_border">
            <div className="contact_info">
              <h3 className="footer_heading">Контактная информация</h3>
              <div className="contact_mail">
                <img src={List} />
                <a href="/" className="footer_mail">
                  test@test.ru
                </a>
              </div>
              <div className="contact_mail">
                <img src={Call} />
                <a href="/" className="footer_mail">
                  +8 777 555 66 99
                </a>
              </div>
              <div className="contact_mail">
                <img src={Envel} />
                <a href="/" className="footer_mail">
                  Москва, Бульвар Ленина 33
                </a>
              </div>
            </div>
            <div className="contact_info">
              <h3 className="footer_heading">Основные ссылки</h3>
              <div className="contact_mail">
                <img src={Vector} />
                <a href="/" className="footer_mail">
                  Главная
                </a>
              </div>
              <div className="contact_mail">
                <img src={Vector} />
                <a href="/" className="footer_mail">
                  Наши проекты
                </a>
              </div>
              <div className="contact_mail">
                <img src={Vector} />
                <a href="/" className="footer_mail">
                  Наши услуги
                </a>
              </div>
              <div className="contact_mail">
                <img src={Vector} />
                <a href="/" className="footer_mail">
                  Контакты
                </a>
              </div>
            </div>
            <div className="contact_info">
              <h3 className="footer_heading">Наши проекты</h3>
              <div className="contact_mail">
                <img src={Vector} />
                <a href="/" className="footer_mail">
                  РосНано
                </a>
              </div>
              <div className="contact_mail">
                <img src={Vector} />
                <a href="/" className="footer_mail">
                  Сколково
                </a>
              </div>
              <div className="contact_mail">
                <img src={Vector} />
                <a href="/" className="footer_mail">
                  Проект “Восток”
                </a>
              </div>
              <div className="contact_mail">
                <img src={Vector} />
                <a href="/" className="footer_mail">
                  ТЭЦ Калининграда
                </a>
              </div>
            </div>
            <div className="contact_info">
              <h3 className="footer_heading">Социальные сети</h3>
              <div className="contact_mail">
                <img src={Vector} />
                <a href="/" className="footer_mail">
                  VK.com
                </a>
              </div>
              <div className="contact_mail">
                <img src={Vector} />
                <a href="/" className="footer_mail">
                  Instagram
                </a>
              </div>
              <div className="contact_mail">
                <img src={Vector} />
                <a href="/" className="footer_mail">
                  Facebook
                </a>
              </div>
              <div className="contact_mail">
                <img src={Vector} />
                <a href="/" className="footer_mail">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="footer_copyright">
            <p className="copyright">(с) 2019. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
