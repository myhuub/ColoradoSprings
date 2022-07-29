import React from "react";
import {View, Text,TextInput} from "react-native";
import { WebView } from 'react-native-webview';

const App=()=>{
  return <WebView source={{ uri: 'https://coloradosprings.myhuub.com/register/' }} />
}
App.navigationOptions = {
 title: "Sign Up",
 headerTitle:"Sign Up"
}
export default App;
