import * as React from "react";
import { TodoItem } from '../models/TodoItem';
import { toggleTodoDoneState, deleteTodo, updatingEntireTodo, } from "../store/actions";
import { Grid, Button } from "semantic-ui-react";
import { RootState } from "../store";
import { AppActions } from "../models/action";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

export interface IIndividualTodoItemProps {
  todoItem: TodoItem;
}

interface IIndividualTodoItemStateProps {}

interface IIndividualTodoItemDispatchProps {
  deleteTodoItems: (id: string) => void;
  toggleTodoDoneState: (id: string) => void;
  updatingEntireTodo: (todo: TodoItem) => void;
}

type Props = IIndividualTodoItemProps &
  IIndividualTodoItemStateProps &
  IIndividualTodoItemDispatchProps;

export class IndividualTodoItem extends React.Component<Props> {
  private deleteTodoItem(id: string): void {
    let { deleteTodoItems } = this.props;
    deleteTodoItems(id);
  }

  private markTitleAsHello(todoItem: TodoItem): void {
    let { updatingEntireTodo } = this.props;
    updatingEntireTodo(todoItem);
  }

  private markAsCompleteOrIncomplete(id: string): void {
    let { toggleTodoDoneState } = this.props;
    toggleTodoDoneState(id);
  }

  public render() {
    let { todoItem } = this.props;
    return (
      <React.Fragment>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={7}>
              <h1>{`Title: ${todoItem.title}`}</h1>
              <h3>{`Due at: ${todoItem.dueAt}`}</h3>
              <h3>{`Is Done: ${todoItem.isDone}`}</h3>
              <h3>{`Todo Id: ${todoItem.id}`}</h3>
              <h3>{`User Id: ${todoItem.userId}`}</h3>
            </Grid.Column>
            <Grid.Column width={3}>
              <Button
                onClick={() => this.deleteTodoItem(todoItem.id)}
                color="red"
              >
                Delete Todo Item
              </Button>
              <Button
                onClick={() => this.markTitleAsHello(todoItem)}
                color="blue"
              >
                Modify Todo Item Title to "hello"
              </Button>
              <Button
                onClick={() => this.markAsCompleteOrIncomplete(todoItem.id)}
                color="green"
              >
                Mark To do Item as COMPLETE!!!! (or incomplete)
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, AppActions>
): IIndividualTodoItemDispatchProps => {
  return {
    deleteTodoItems: (id: string) => {
      dispatch(deleteTodo(id));
    },
    toggleTodoDoneState: (id: string) => {
      dispatch(toggleTodoDoneState(id));
    },
    updatingEntireTodo: (todo: TodoItem) => {
      dispatch(updatingEntireTodo(todo));
    },
  };
};

export default connect<
  IIndividualTodoItemStateProps,
  IIndividualTodoItemDispatchProps,
  IIndividualTodoItemProps,
  RootState
>(
  mapStateToProps,
  mapDispatchToProps
)(IndividualTodoItem);
