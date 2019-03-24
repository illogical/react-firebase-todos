import React, { useEffect, useState } from "react";
import { Card, Input, Button } from "semantic-ui-react";
import * as actions from "../store/actions";
import { ITodo } from "../models";
import { connect } from "react-redux";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: ITodo[];
  fetchTodos: () => void;
  completeTodo: (id: number) => void;
  addTodo: (todo: ITodo) => void;
}

const TodoList = ({
  todos,
  fetchTodos,
  completeTodo,
  addTodo
}: TodoListProps) => {
  const title = useField("");
  const description = useField("");

  useEffect(() => {
    fetchTodos();
  });

  const handleAddClick = () => {
    const newTodo: ITodo = {
      title: title.value,
      description: description.value,
      completed: false,
      id: 4
    };
    addTodo(newTodo);
  };

  const todoItems = todos
    ? todos.map((item: ITodo) => {
        return <TodoItem completeTodo={completeTodo} todo={item} />;
      })
    : null;

  return (
    <React.Fragment>
      <h1>TODO LIST</h1>
      <Card>
        <Input label="Title" {...title} />
        <Input label="Description" {...description} />
        <Button onClick={handleAddClick}>Add</Button>
      </Card>
      {todoItems}
    </React.Fragment>
  );
};

const mapStateToProps = ({ todos }: any) => {
  return {
    todos
  };
};

export default connect(
  mapStateToProps,
  actions
)(TodoList);

const useField = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onHandleChange = (e: any) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: onHandleChange
  };
};
