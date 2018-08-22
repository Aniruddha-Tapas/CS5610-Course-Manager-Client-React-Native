import React from 'react'
import {Header} from 'react-native-elements'

const FixedHeader = () =>
    <Header
        leftComponent={{
            icon: 'arrow-back', color: '#fff'
        }}
        centerComponent={{
            text: 'Whiteboard',
            style: {color: '#fff'}
        }}
        rightComponent={{
            icon: 'home',
            color: '#fff'
        }}
    />;
export default FixedHeader