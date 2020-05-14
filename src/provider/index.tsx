import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import {RootStackContainer} from '@navigation';
import {Context} from '@context';
import {theme} from '@theme';

const App = () => {
  return (
    <Context>
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <NavigationContainer>
          <RootStackContainer />
        </NavigationContainer>
      </ApplicationProvider>
    </Context>
  );
};

export default App;
