import React from 'react';
import {Linking} from 'react-native';
import {WebView} from 'react-native-webview';
import {APP_URL} from '../links';

export default class HomeScreen extends React.Component {
  render() {
    const home_url = `${APP_URL}`;
    return (
      <WebView
        ref={(ref) => (this.WebView = ref)}
        source={{uri: home_url}}
        onNavigationStateChange={(event) => {
          if (!event.url.includes(home_url)) {
            this.WebView.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    );
  }
}
