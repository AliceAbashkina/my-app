import { useCallback } from 'react';
import { Container} from '@sberdevices/plasma-web/components/Grid';
import { Button, Body1, Body2 } from '@sberdevices/plasma-web';
import {Image, Header,  DeviceThemeProvider} from '@sberdevices/plasma-ui'
import {Checi} from './Checi';
import {Cards1} from './Cards1';
import {Cards2} from './Cards2';

function App() {
    return (
         <DeviceThemeProvider>
        <Container>
        <div>
          <Header>
          Сладости мира
          </Header>
            {<Cards1 />}
            {<Cards2 />}
        </div>
        </Container>
   </DeviceThemeProvider>
    );
}
export default App;
