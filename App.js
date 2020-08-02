import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { fcmService } from "./src/FCMService";
import { localNotificationService } from "./src/LocalNotificationService";
import AppContainer from "./navigation/AppContainer";
import SplashScreen from "react-native-splash-screen";
import StatusBarBackground from './src/iosStatusBarWrapper';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);

    function onRegister(token) {
      console.log("[App] onRegister: ", token);
    }

    function onNotification(notify) {
      console.log("[App] onNotification: ", notify);
      const options = {
        soundName: "default",
        playSound: true, //,
        // largeIcon: 'ic_launcher', // add icon large for Android (Link: app/src/main/mipmap)
        // smallIcon: 'ic_launcher' // add icon small for Android (Link: app/src/main/mipmap)
      };
      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options
      );
    }

    function onOpenNotification(notify) {
      console.log("[App] onOpenNotification: ", notify);
    }

    return () => {
      console.log("[App] unRegister");
      fcmService.unRegister();
      localNotificationService.unregister();
    };
  }, []);

  return (
    <React.Fragment>
        <StatusBarBackground/>
        <AppContainer />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
