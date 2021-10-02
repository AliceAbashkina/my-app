import React from 'react';
// createGlobalStyle нужен для создания глобальных стилей
import styled, { createGlobalStyle } from 'styled-components';

// получаем значение для целевой платформы
import { sberBox } from '@sberdevices/plasma-tokens/typo';
// получаем стилевые объекты для нашего интерфейса
import { body1, headline2 } from '@sberdevices/plasma-tokens';

// получаем тему персонажа
import { darkEva } from '@sberdevices/plasma-tokens';
// получаем цвета для нашего интерфейса
import { text, background, gradient } from '@sberdevices/plasma-tokens';

const AppStyled = styled.div`
    padding: 30px;
    ${body1}
`;

// создаем react-компонент c глобальными стилями типографики
const TypoScale = createGlobalStyle(sberBox);

// создаем react-компонент для подложки
const DocStyles = createGlobalStyle`
    /* stylelint-disable-next-line selector-nested-pattern */
    html {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
        min-height: 100vh;
    }
`;
// создаем react-компонент для персонажа
const Theme = createGlobalStyle(darkEva);

const App = () => {
    return (
        <AppStyled>
            {/* Используем глобальные react-компоненты один раз */}
            <TypoScale />
            <DocStyles />
            <Theme />

            <h2 style={headline2}>Начало положеноHello Plasma Tokens</h2>
        </AppStyled>
    );
};

export default App;
