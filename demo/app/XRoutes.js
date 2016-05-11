/**
 * Created by tangzhibin on 15/12/29.
 *
 * 相当于Android中的Manifest,所有的页面都要在这里注册
 *
 */

'use strict';

import React, {StyleSheet, Text, View, Navigator} from 'react-native';

export function ExamplePage() {
    return {
        renderTitle: (navigator, index, state)=>null,
        getTitle: (navigator, index, state)=>null,

        renderLeftButton: (navigator, index, state)=>null,
        renderBackButton: (navigator, index, state)=>null,
        getBackButtonTitle: (navigator, index, state)=>null,

        renderRightButton: (navigator, index, state)=>null,
        getRightButtonImage: (navigator, index, state)=>null,
        getRightButtonTitle: (navigator, index, state)=>null,
        onPressRightButton: (navigator, index, state)=>null,

        configureScene: ()=>null,
        renderScene: (navigator)=>null,
        getSceneClass: ()=>null,
        onWillFocus: (event)=>null,
        onDidFocus: (event)=>null,
        onWillBlur: (event)=>null,
        onDidBlur: (event)=>null
    }
}

export function HomePage() {
    return {
        getTitle: () => '首页',
        getSceneClass: () => require('./pages/HomePage').default
    };
}
export function ViewPagerPage() {
    return {
        getTitle: () => 'PagerTest',
        getSceneClass: () => require('./pages/ViewPagerPage').default,
    };
}
export function TabIndicatorTest() {
    return {
        getTitle: () => 'TabIndicator Test',
        getSceneClass: () => require('./pages/TabIndicatorTest').default,
    };
}