import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <View style={styles.taskItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        style={(pressed) => pressed && styles.pressedItem}
        onPress={props.onDeleteTask.bind(this, props.id)}
      >
        <Text style={styles.taskText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  taskText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
