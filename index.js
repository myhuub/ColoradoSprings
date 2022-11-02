import React from "react";
import {View, Text,TextInput} from "react-native";
import { WebView } from 'react-native-webview';
import App from './App'

import BooksBlock from "./components/BooksBlock";


export const applyCustomCode = externalCodeSetup => {


    externalCodeSetup.blocksApi.addCustomBlockRender('bbapp/books',(props) =>
     <BooksBlock {...props} />
  );

  externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen",App);



};
