import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function DiscoverCard({ img, title, description }) {
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={img} style={styles.img}/>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <AntDesign name="right" color={'grey'} size={24} style={styles.arrowRight}/>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: '85%',
      height: 80,
      borderRadius: 20,
      marginBottom:30,
      flexDirection: 'row'
    },

    title: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 8,
        fontWeight: 'bold'
    },

    description: {
        marginTop: 5,
        marginLeft: 8,
    },

    arrowRight: {
        marginTop: 25,
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 15,
        color: 'grey',
    },
    img: {
        width: 64,
        height: 64,
        resizeMode: 'stretch',
        marginLeft: 25,
        marginTop: 5
    }
  });