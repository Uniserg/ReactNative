import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View, ImageBackground } from "react-native";


export default function WorkoutCard({ img, title, description }) {
    return(
        <TouchableOpacity>
            <ImageBackground source={img} imageStyle={styles.img} style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 110,
        overflow:'hidden',
        borderRadius:20,
        marginRight: 20,
    },

    img: {
        width:'180%',
        position: 'absolute',
        left:-70
    },

    title: {
        fontSize: 18,
        marginTop: 15,
        marginLeft: 15,
        fontWeight: 'bold',
        color:'white'
    },

    description: {
        marginTop: 25,
        marginLeft: 15,
        color:'white'
    },
  });
