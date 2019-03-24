import React from "react";
import { List, Menu, Grid, Checkbox, Header, Card } from "semantic-ui-react";
import { ITodo } from "../models";

interface TodoItemProps {
  todo: ITodo;
  completeTodo: (id: string, isComplete: boolean) => void;
}

export const TodoItem = ({ todo, completeTodo }: TodoItemProps) => {
  const completeClick = (e: any) => {
    completeTodo(todo.id, !todo.completed);
  };

  return (
    <Card>
      <Card.Header>
        <Header>
          <Checkbox fitted onChange={completeClick} checked={todo.completed} />{" "}
          {todo.title}
        </Header>
      </Card.Header>
      <Card.Content description={todo.description} />
    </Card>
    // <Menu.Item key={todo.id}>
    //   <Grid>
    //     <Grid.Row columns={2}>
    //       <Grid.Column>
    //         <Checkbox fitted />
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Header>{todo.title}</Header>
    //         {todo.description}
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </Menu.Item>
  );
};
