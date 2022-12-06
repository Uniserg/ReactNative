import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';  


export default function MenuBar() {

    const nonActice = "#44445E";
    const active = "#7365F1";

    const [home, setHome] = useState(active);
    const [dumbbell, setDumbbell] = useState(nonActice);
    const [heart, setHeart] = useState(nonActice);
    const [location, setLocation] = useState(nonActice);

    const iconStates = {
        'home': setHome,
        'dumbbell':setDumbbell,
        'heart':setHeart,
        'location': setLocation
    }


    const switchIcon = (key) => {
        Object.values(iconStates).forEach(x => x(nonActice));
        iconStates[key](active);
    }


    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => switchIcon('home')}>
                <Fontisto name="home" size={48} color={home} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => switchIcon('heart')}>
                <Entypo name="heart" size={48} color={heart} style={styles.icon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <AntDesign name="pluscircle" size={48} color='#3EFAAB' style={styles.icon}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => switchIcon('dumbbell')}>
                <FontAwesome5 name="dumbbell" size={48} color={dumbbell}  style={styles.icon}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => switchIcon('location')}>
                <Entypo name="location" size={48} color={location} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      height: 80,
      backgroundColor:'#1E1F33',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    icon: {
        marginLeft:25,
        marginTop: 10
    }
  });
