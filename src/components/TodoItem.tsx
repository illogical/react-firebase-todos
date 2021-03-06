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

  const styles = {
    cardHeader: [{ padding: "5px" }],
    checkbox: [{ paddingTop: "3px" }]
  };

  return (
    <Card fluid color={color}>
      <Card.Header style={...styles.cardHeader}>
        <Header>
          <Checkbox
            fitted
            onChange={completeClick}
            checked={todo.completed}
            style={...styles.checkbox}
          />
          {"   "}
          {todo.title}
        </Header>
      </Card.Header>
      <Card.Content description={todo.description} />
    </Card>
  );
};
