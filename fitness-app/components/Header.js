import React from "react";
import { StyleSheet, Text, ImageBackground, Image } from "react-native";


export default function Header({img, title}) {
    return(
        <ImageBackground style={styles.main} source={require('../assets/header.png')}>
            <Text style={styles.text}>{title}</Text>
            <Image source={require('../assets/avatar.jpg')} style={styles.img}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height: 150,
        backgroundColor: '#5D8CFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        flexDirection:'row'
    },
    text: {
        fontSize: 22,
        color: 'white',
        textAlign:'center'
    },
    img: {
        width: 48,
        height: 48,
        borderRadius: 75,
        marginLeft: 10
    }

})