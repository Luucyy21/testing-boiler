import React from 'react';
import {StyleSheet, View} from 'react-native';
import MainNavigator from './src/navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Alerts from 'commons/alert';
import Toast from 'commons/toast';
import {alertRef} from 'commons/alert/hooks/useAlert';
import {toastRef} from 'commons/toast/hooks/useToast';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export default function () {
  return <App />;
}

function App(): JSX.Element {
  return (
    <View style={styels.container}>
      <NavigationContainer>
        <SafeAreaProvider>
          <BottomSheetModalProvider>
            <Alerts ref={alertRef} />
            <Toast ref={toastRef} />
            <MainNavigator />
          </BottomSheetModalProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </View>
  );
}

const styels = StyleSheet.create({
  container: {flex: 1},
});
