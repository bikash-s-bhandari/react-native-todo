import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Todo} from '../types';
import TodoEdit from './TodoEdit';

interface ToDoItemProps {
  todo: Todo;
  onDelete: () => void;
  onToggleTodo: () => void;
  onEdit: (newText: string) => void;
}

const TodoItem: React.FC<ToDoItemProps> = ({
  todo,
  onDelete,
  onToggleTodo,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = (newText: string) => {
    onEdit(newText);
    setIsEditing(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.todoText} onPress={onToggleTodo}>
        <Text style={[styles.text, todo?.completed && styles.completedText]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      {isEditing ? (
        <TodoEdit
          todo={todo}
          onSave={handleEdit}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <View style={styles.actionBtnContainer}>
          <TouchableOpacity
            disabled={todo?.completed}
            style={[styles.editBtn, todo?.completed && styles.disabledBtn]}
            onPress={() => setIsEditing(true)}>
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity  disabled={todo?.completed}   style={[styles.deleteBtn, todo?.completed && styles.disabledBtn]} onPress={onDelete}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  todoText: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888888',
  },
  actionBtnContainer: {
    flexDirection: 'row',
  },
  editBtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    margin: 5,
  },
  deleteBtn: {
    backgroundColor: '#ff3b30',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    margin: 5,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 15,
  },

  disabledBtn: {
    backgroundColor: '#888888',
  },
});

export default TodoItem;
