import React from 'react';
// createGlobalStyle нужен для создания глобальных стилей
import styled, { createGlobalStyle } from 'styled-components';
import {TextBox, TextBoxBigTitle, TextBoxBiggerTitle, TextBoxSubTitle} from '@sberdevices/plasma-ui';
import {Button} from '@sberdevices/plasma-web';
import {Card, CardBody,CardMedia,CardContent, CardParagraph1} from '@sberdevices/plasma-ui';

export const Cards2 = () => {
    return (
      <div id="div1" style={{ display: 'flex' }}>
      <Card style={{ width: '12.10rem', height:'12.10rem' }} tabIndex={0} outlined scaleOnFocus>
          <CardBody>
              <CardMedia
                  src="https://cdn.fishki.net/upload/post/2019/03/31/2930576/tn/4-fotoram.jpg"
                  placeholder="https://www.meme-arsenal.com/memes/6352587f778b70fa074e52f389dd6d1f.jpg"
                  ratio="4/3"
              />
              <CardContent cover>
                  <TextBox>
                      <TextBoxBiggerTitle>Сладости Японии</TextBoxBiggerTitle>
                  </TextBox>
              </CardContent>
          </CardBody>
      </Card>

      <Card style={{ width: '12.10rem', height:'12.10rem' }} tabIndex={0} outlined scaleOnFocus>
          <CardBody>
              <CardMedia
                  src="https://www.wok-shop.ru/images/articles/05-lunnye-pryaniki-yuebin.jpg"
                  placeholder="https://www.meme-arsenal.com/memes/6352587f778b70fa074e52f389dd6d1f.jpg"
                  ratio="4/3"
              />
              <CardContent cover>
                  <TextBox>
                      <TextBoxBiggerTitle>Сладости Китая</TextBoxBiggerTitle>
                  </TextBox>
              </CardContent>
          </CardBody>
      </Card>

      <Card style={{ width: '12.10rem', height:'12.10rem' }} tabIndex={0} outlined scaleOnFocus>
          <CardBody>
              <CardMedia
                  src="https://autogear.ru/misc/i/gallery/29334/657242.jpg"
                  placeholder="https://www.meme-arsenal.com/memes/6352587f778b70fa074e52f389dd6d1f.jpg"
                  ratio="4/3"
              />
              <CardContent cover>
                  <TextBox>
                      <TextBoxBiggerTitle>Сладости Индии</TextBoxBiggerTitle>
                  </TextBox>
              </CardContent>
          </CardBody>
      </Card>

      <Card style={{ width: '12.10rem', height:'12.10rem' }} tabIndex={0} outlined scaleOnFocus>
          <CardBody>
              <CardMedia
                  src="https://files.kazakhstan.travel/files/public/201911/11/493118d03f3b462bb480b146302f2919/kz.mir24.tv_%D1%81%D0%BB%D0%B0~.jpg"
                  placeholder="https://www.meme-arsenal.com/memes/6352587f778b70fa074e52f389dd6d1f.jpg"
                  ratio="4/3"
              />
              <CardContent cover>
                  <TextBox>
                      <TextBoxBiggerTitle>Сладости Казахстана</TextBoxBiggerTitle>
                  </TextBox>
              </CardContent>
          </CardBody>
      </Card>
  </div>
);};
