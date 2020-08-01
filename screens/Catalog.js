import React from 'react';
import {Linking} from 'react-native';
import {WebView} from 'react-native-webview';
import {APP_URL} from '../links';

export default class CatalogScreen extends React.Component {
  render() {
    const catalog_url = `${APP_URL}/collections/all`;
    const home_url = `${APP_URL}`;
    return (
      <WebView
        ref={(ref) => (this.WebView = ref)}
        source={{uri: catalog_url}}
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
