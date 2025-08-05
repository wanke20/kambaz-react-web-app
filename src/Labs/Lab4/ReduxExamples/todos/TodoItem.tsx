import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todoReducer";
import { ListGroup } from "react-bootstrap";
export default function TodoItem({ todo }: { todo: any }) {
  const dispatch = useDispatch();
  return (
    <ListGroup.Item key={todo.id}>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      <button onClick={() => dispatch(setTodo(todo))}>Edit</button>
      {todo.title}
    </ListGroup.Item>
  );
}
