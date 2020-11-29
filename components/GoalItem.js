import React, {useState} from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}> 
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    ); //if you remove round brackets, it wont affect anyting.
};
export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      backgroundColor: '#ccc',
      marginVertical: 10,
      color: 'blue', //this is not working (check this)
      borderColor: 'black',
      borderWidth: 1,
    }
  });