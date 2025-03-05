export interface ToDoInputProps {
  onAddToDo: (text: string) => void;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
