import {StyleSheet, Text, View} from 'react-native';
import TodoInput from './src/components/TodoInput';
import {useState} from 'react';
import {Todo} from './src/types';
import TodoList from './src/components/TodoList';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter(item => item.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodoList(
      todoList.map(item =>
        item.id === id ? {...item, completed: !item.completed} : item,
      ),
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodoList(
      todoList.map(item => (item.id === id ? {...item, text: newText} : item)),
    );
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.headerText}>Todo App</Text>
      <TodoInput onAddToDo={addTodo} />
      <TodoList
        todos={todoList}
        onDelete={deleteTodo}
        onToggleTodo={toggleTodo}
        onEditTodo={editTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
});

export default App;
