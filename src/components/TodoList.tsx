import React, { useEffect, useState } from "react";
import { Card, Input, Button, Segment, Header } from "semantic-ui-react";
import * as actions from "../store/actions";
import { ITodo } from "../models";
import { connect } from "react-redux";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: ITodo[];
  fetchTodos: () => void;
  completeTodo: (id: string, isComplete: boolean) => void;
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
      id: "-1"
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
      <Header>TODO LIST</Header>

      <Card fluid>
        <Input label="Title" {...title} />
        <Input label="Description" {...description} />
        <Button onClick={handleAddClick}>Add</Button>
      </Card>

      <Segment>
        <Card.Group>{todoItems}</Card.Group>
      </Segment>
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
