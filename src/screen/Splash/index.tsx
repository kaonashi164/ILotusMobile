import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';

import {storage} from '@constants';
import {SplashScreenNavigationProp} from '@types';

type Props = {
  navigation: SplashScreenNavigationProp;
};

export const SplashScreen = (props: Props) => {
  const {getItem} = useAsyncStorage(storage.TOKEN);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        getItem((_, result) => {
          if (result) {
            return props.navigation.navigate('App');
          }

          return props.navigation.navigate('Auth');
        });
      } catch (e) {
        console.log(e);
        return props.navigation.navigate('Auth');
      }
    };

    bootstrapAsync();
  }, []);
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};
