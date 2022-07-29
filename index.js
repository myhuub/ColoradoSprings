import React from "react";
import {View, Text,TextInput} from "react-native";
import { WebView } from 'react-native-webview';
import App from './App'
export const applyCustomCode = externalCodeSetup => {
    // applyCustomCode.navigationOptions = {
    //     // header: null,
    //     title:"Sign Up",
    //     headerTitle:"Sign Up"
    //    }
    // externalCodeSetup.navigationApi.setParams({ title: "Sign Up" })
    // call custom code api here
    // externalCodeSetup.configApi.setAppSwitchEnabled(true);
    externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen",App);
};

