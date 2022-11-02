// components/BooksBlock.js

import React from "react";
import {View, Text, Image, TouchableOpacity, Linking} from "react-native";
const PropTypes = require("prop-types");

export default function BooksBlock(props){
    const {
        appBossWrapStyle,
        block,
        calcFontSize,
        colors,
        fontFamilyStyle,
        global,
        handleLinkClicks,
        htmlHandleClicks,
        id,
        isNavActive,
        lastItem,
        navigation,
        toUserBasedOnSettings,
        viewWidth,
        wrapHtml,
        wrapStyle
    } = props;

    const openURL = async (URL) => {
        Linking.openURL(URL)
    }
    return (
        <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '25%' }}>
          <TouchableOpacity onPress={()=> openURL('https://coloradosprings.myhuub.com/grants/')}>
            <Image style={{ width: 70, height: 70, alignSelf: 'center' }} source={{ uri: 'https://coloradosprings.myhuub.com/wp-content/uploads/2021/08/Grants2003.png' }} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '25%' }}>
          <TouchableOpacity onPress={()=> openURL('https://coloradosprings.myhuub.com/events/')}>
            <Image style={{ width: 70, height: 70, alignSelf: 'center' }} source={{ uri: 'https://coloradosprings.myhuub.com/wp-content/uploads/2021/08/events200.png' }} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '25%' }}>
          <TouchableOpacity onPress={()=> openURL('https://coloradosprings.myhuub.com/bbapp/screen/courses_all')}>
            <Image style={{ width: 70, height: 70, alignSelf: 'center' }} source={{ uri: 'https://coloradosprings.myhuub.com/wp-content/uploads/2021/08/courses200.png' }} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '25%' }}>
          <TouchableOpacity onPress={()=> openURL('https://coloradosprings.myhuub.com/coloradospringsadvisors/')}>
            <Image style={{ width: 70, height: 70, alignSelf: 'center' }} source={{ uri: 'https://coloradosprings.myhuub.com/wp-content/uploads/2021/08/advisor200.png' }} />
          </TouchableOpacity>
        </View>
      </View>
    );
};

