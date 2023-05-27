import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const AboutUs = (props) => {
    return (
        <View style={styles.container}>            
                <Text style={styles.red}>{props.name}</Text>
                <Text style={styles.bigBlue}>just bigBlue</Text>
                <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
                <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
   
});

export default AboutUs;