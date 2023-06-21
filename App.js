import { useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddTaskHandler() {
    setModalIsVisible(true);
  }

  function endAddTaskHandler() {
    setModalIsVisible(false);
  }

  function addTaskHandler(enteredTaskText) {
    setTodoTasks((currentTodoTasks) => [
      ...currentTodoTasks,
      { text: enteredTaskText, id: Math.random().toString() },
    ]);
    endAddTaskHandler();
  }

  function deleteTaskHandler(id) {
    setTodoTasks((currentTodoTasks) => {
      return currentTodoTasks.filter((task) => task.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Task!"
          color="#5e0acc"
          onPress={startAddTaskHandler}
        />
        <TaskInput
          visible={modalIsVisible}
          onAddTask={addTaskHandler}
          onCancel={endAddTaskHandler}
        />
        <View style={styles.tasksContainer}>
          <FlatList
            data={todoTasks}
            renderItem={(itemData) => {
              return (
                <TaskItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteTask={deleteTaskHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    flex: 5,
    marginTop: 24
  },
});
