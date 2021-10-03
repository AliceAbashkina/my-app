import React from 'react';
// createGlobalStyle нужен для создания глобальных стилей
import styled, { createGlobalStyle } from 'styled-components';
import {TextBox, TextBoxBigTitle, TextBoxBiggerTitle, TextBoxSubTitle} from '@sberdevices/plasma-ui';
import {Button} from '@sberdevices/plasma-web';
import {Card, CardBody,CardMedia,CardContent, CardParagraph1} from '@sberdevices/plasma-ui';

export const Cards1 = () => {
    return (
      <div style={{display: 'flex'}}>
      <Card style={{width:'25%',height:'25%'}}>
          <CardBody>'
              <CardMedia
                  src="https://investkamchatka.ru/wp-content/uploads/2019/07/21sladosti-1.jpg"
                  ratio="4/3"
              />
              <CardContent cover>
                  <TextBox>
                      <TextBoxBiggerTitle>Россия</TextBoxBiggerTitle>
                  </TextBox>
              </CardContent>
          </CardBody>
      </Card>

    <Card style={{width:'25%',height:'25%'}}>
          <CardBody>
          <CardMedia
                  src="https://dezona.ru/wp-content/uploads/2014/08/gory-marcipana.jpg"
                  ratio="4/3"
              />
              <CardContent cover>
                  <TextBox>
                      <TextBoxBiggerTitle>Германия</TextBoxBiggerTitle>
                  </TextBox>
              </CardContent>
          </CardBody>
      </Card>

      <Card style={{width:'25%',height:'25%'}}>
          <CardBody>
              <CardMedia
                  src="https://moystambul.ru/wp-content/uploads/2020/04/Depositphotos_301619578_s-2019.jpg"
                  ratio="4/3"
              />
              <CardContent cover>
                  <TextBox>
                      <TextBoxBiggerTitle>Турция</TextBoxBiggerTitle>
                  </TextBox>
              </CardContent>
          </CardBody>
      </Card>

      <Card style={{width:'25%',height:'25%'}}>
          <CardBody>
              <CardMedia
                  src="http://italy4.me/wp-content/uploads/2017/03/Cannolo_cr.jpg"
                  ratio="4/3"
              />
              <CardContent cover>
                  <TextBox>
                      <TextBoxBiggerTitle>Италия</TextBoxBiggerTitle>
                  </TextBox>
              </CardContent>
          </CardBody>
      </Card>
  </div>
);};
