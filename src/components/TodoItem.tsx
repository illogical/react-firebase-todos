import React from "react";
import { Checkbox, Header, Card } from "semantic-ui-react";
import { ITodo } from "../models";

interface TodoItemProps {
  todo: ITodo;
  completeTodo: (id: string, isComplete: boolean) => void;
}

export const TodoItem = ({ todo, completeTodo }: TodoItemProps) => {
  const completeClick = (e: any) => {
    completeTodo(todo.id, !todo.completed);
  };

  const color = todo.completed ? "green" : "orange";

  return (
    <Card fluid color={color}>
      <Card.Header style={{ padding: 5 + "px" }}>
        <Header>
          <Checkbox
            fitted
            onChange={completeClick}
            checked={todo.completed}
            style={{ paddingTop: 3 + "px" }}
          />
          {"   "}
          {todo.title}
        </Header>
      </Card.Header>
      <Card.Content description={todo.description} />
    </Card>
  );
};
