import React from 'react';
// createGlobalStyle нужен для создания глобальных стилей
import styled, { createGlobalStyle } from 'styled-components';
import {TextBox, TextBoxBigTitle, TextBoxBiggerTitle, TextBoxSubTitle} from '@sberdevices/plasma-ui';
import {Button} from '@sberdevices/plasma-web';
import {Card, CardBody,CardMedia,CardContent, CardParagraph1} from '@sberdevices/plasma-ui';

export const Cards1 = () => {
    return (
      <div id="div1" style={{ display: 'flex' }}>
      <Card style={{ width: '12.10rem', height:'12.10rem' }} tabIndex={0} outlined scaleOnFocus>
          <CardBody>
              <CardMedia
                  src="https://investkamchatka.ru/wp-content/uploads/2019/07/21sladosti-1.jpg"
                  placeholder="https://www.meme-arsenal.com/memes/6352587f778b70fa074e52f389dd6d1f.jpg"
                  ratio="4/3"
              />
              <CardContent cover>
                  <TextBox>
                      <TextBoxBiggerTitle>Сладости России</TextBoxBiggerTitle>
                  </TextBox>
              </CardContent>
          </CardBody>
      </Card>

      <Card style={{ width: '12.10rem', height:'12.10rem' }} tabIndex={0} outlined scaleOnFocus>
          <CardBody>
              <CardMedia
                  src="https://dezona.ru/wp-content/uploads/2014/08/gory-marcipana.jpg"
                  placeholder="https://www.meme-arsenal.com/memes/6352587f778b70fa074e52f389dd6d1f.jpg"
                  ratio="4/3"
              />
              <CardContent cover>
                  <TextBox>
                      <TextBoxBiggerTitle>Сладости Германии</TextBoxBiggerTitle>
                  </TextBox>
              </CardContent>
          </CardBody>
      </Card>

      <Card style={{ width: '12.10rem', height:'12.10rem' }} tabIndex={0} outlined scaleOnFocus>
          <CardBody>
              <CardMedia
                  src="https://moystambul.ru/wp-content/uploads/2020/04/Depositphotos_301619578_s-2019.jpg"
                  placeholder="https://www.meme-arsenal.com/memes/6352587f778b70fa074e52f389dd6d1f.jpg"
                  ratio="4/3"
              />
              <CardContent cover>
                  <TextBox>
                      <TextBoxBiggerTitle>Сладости Турции</TextBoxBiggerTitle>
                  </TextBox>
              </CardContent>
          </CardBody>
      </Card>

      <Card style={{ width: '12.10rem', height:'12.10rem' }} tabIndex={0} outlined scaleOnFocus>
          <CardBody>
              <CardMedia
                  src="http://italy4.me/wp-content/uploads/2017/03/Cannolo_cr.jpg"
                  placeholder="https://www.meme-arsenal.com/memes/6352587f778b70fa074e52f389dd6d1f.jpg"
                  ratio="4/3"
              />
              <CardContent cover>
                  <TextBox>
                      <TextBoxBiggerTitle>Сладости Италии</TextBoxBiggerTitle>
                  </TextBox>
              </CardContent>
          </CardBody>
      </Card>
  </div>
);};
