import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals( (cuurentGoals) => [
      ...cuurentGoals,
      {id: Math.random().toString(), value: goalTitle}
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(cuurentGoals => {
      return cuurentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
      <View style={styles.screen}>
        
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />        
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
        />
        
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

// C:\Users\Setup\Desktop\untold\projects\native\first
// enter this command 1st before yarn start
// npm install -g expo-cli 