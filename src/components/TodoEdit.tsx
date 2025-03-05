import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Todo} from '../types';

interface TodoEditProps {
  todo: Todo;
  onSave: (newText: string) => void;
  onCancel: () => void;
}

const TodoEdit: React.FC<TodoEditProps> = ({todo, onSave, onCancel}) => {
  const [text, setText] = useState(todo?.text);
  const handleSave = () => {
    if (text.trim()) {
      onSave(text.trim());
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="edit new todo"
        value={text}
        onChangeText={setText}
      />
      <View style={styles.actionBtnContainer}>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  actionBtnContainer: {
    flexDirection: 'row',
  },
  saveBtn: {
    backgroundColor: '#4cd964',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    margin: 5,
  },
  cancelBtn: {
    backgroundColor: '#ff9500',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    margin: 5,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 15,
  },
});

export default TodoEdit;
