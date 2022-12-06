import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 

export default function GuideCard({ idx, img, title, comments, likes }) {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.description}>{idx}</Text>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection: 'row', marginTop: 15}}>
                <MaterialCommunityIcons name="comment-processing-outline" size={24} color="white" style={styles.icon} />
                <Text style={styles.iconScore} >{comments}</Text>
                <SimpleLineIcons name="like" size={24} color="white" style={styles.icon} />
                <Text style={styles.iconScore}>{likes}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
      width: 300,
      height: 120,
      borderRadius: 20,
      marginRight: 20,
      backgroundColor:'#1F2034'
    },
    title: {
        fontSize: 24,
        marginTop: 10,
        marginLeft: 15,
        fontWeight: 'bold',
        color:'white'
    },

    description: {
        marginTop: 15,
        marginLeft: 15,
        color:'white'
    },

    iconScore: {
        color: 'white',
        marginLeft: 3
    },
    icon: {
        marginLeft: 10,
        marginRight: 10
    }
  });
