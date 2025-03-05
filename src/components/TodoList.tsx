import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Todo} from '../types';
import TodoItem from './ToDoItem';

interface ToDoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggleTodo: (id: string) => void;
  onEditTodo: (id: string, newText: string) => void;
}

const TodoList: React.FC<ToDoListProps> = ({todos, onDelete, onToggleTodo,onEditTodo}) => {
  return (
    <ScrollView style={styles.container}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo?.id)}
          onToggleTodo={() => onToggleTodo(todo?.id)}
          onEdit={(newText:string)=>onEditTodo(todo.id,newText)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  addTodoBtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTodoBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TodoList;
