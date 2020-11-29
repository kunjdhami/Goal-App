import React, {useState} from 'react';
import { Button, FlatList, Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>  
                <TextInput placeholder="goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
                {/* 
                earlier written was onPress={() => props.onAddGoal(enteredGoal)}
                here if you write(without round brackets and directly pass the arguements) 
                onPress={=> props.onAddGoal(enteredGoal)}, then it will give error
                But we'll use bind */}
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
      flexGrow: 1,  
      justifyContent: 'center',
      alignItems: 'center'  
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10
    // flexGrow: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
  });
