import * as React from "react";
import { TodoItem } from "./models/TodoItem";
import { Grid, Button, Input } from "semantic-ui-react";
import { Formik, Form, Field } from "formik";
import { RootState } from "./store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "./models/action";
import { connect } from "react-redux";
import { getTodoItems, createNewTodo } from "./store/actions";
import IndividualTodoItem from "./components/IndividualTodoItem";

export interface IAppProps {
  todoItemList?: TodoItem[];
}

interface IAppStateProps {}

interface IAppDispatchProps {
  getTodoItems: () => void;
  createNewTodo: (newTodoItem: TodoItem) => void;
}

type Props = IAppProps & IAppStateProps & IAppDispatchProps;

export class App extends React.Component<Props> {
  componentDidMount() {
    this.props.getTodoItems();
  }

  createNewTodo(newTodoItem: TodoItem) {
    this.props.createNewTodo(newTodoItem);
  }

  public render() {
    let { todoItemList } = this.props;
    let todoLoop: JSX.Element[];

    if (todoItemList) {
      todoLoop = todoItemList.map((individualTodo) => {
        return <IndividualTodoItem todoItem={individualTodo} />;
      });
    } else {
      todoLoop = [<React.Fragment />];
    }

    return (
      <React.Fragment>
        <Grid>
          <Grid.Row>{todoLoop}</Grid.Row>
          <Grid.Row>
            <Formik
              initialValues={{
                id: "0",
                isDone: false,
                title: "",
                dueAt: "2019-01-05T17:13:13", // uses dotnet date format
                userId: "",
              }}
              onSubmit={(data: TodoItem) => {
                this.createNewTodo(data);
              }}
            >
              {(
                { values, handleChange, handleBlur } // Blur not used in example but good to leave as a default
              ) => (
                <Form>
                  <div>
                    <h3>Post Content: </h3>
                    <Field
                      placeholder="title..."
                      name="title"
                      type="input"
                      as={Input}
                    />
                  </div>
                  <div>
                    <Button type="submit" color="green">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState): IAppStateProps => {
  return {
    todoItemList: state.todoReducer.todoItems,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, AppActions>
): IAppDispatchProps => {
  //IIndividualTodoItemDispatchProps => {
  return {
    getTodoItems: () => {
      dispatch(getTodoItems());
    },
    createNewTodo: (newTodoItem: TodoItem) => {
      dispatch(createNewTodo(newTodoItem));
    },
  };
};

export default connect<IAppStateProps, IAppDispatchProps, IAppProps, RootState>( // (IIndividualTodoItemDispatchProps, IIndividualTodoItemCloned4RepoProps, RootState>( // anti-plag
  mapStateToProps,
  mapDispatchToProps
)(App);
