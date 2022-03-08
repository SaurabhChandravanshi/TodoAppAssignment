import { render, screen, fireEvent } from "@testing-library/react";
import Todos from "../components/Todos";

import store  from "../store/store";
import { Provider } from "react-redux";

const MockTodos = () => {
    return (
        <Provider store={store}>
        <Todos />
        </Provider >
    )
}

test('Testing Todos - "+ Item" button should show AddTodo component', () => {
    render(<MockTodos/>);
    const buttonElement = screen.getByTitle('Add Item')
    fireEvent.click(buttonElement);
    const todoForm = screen.getByRole('todo-form');
    expect(todoForm).toBeInTheDocument();
})

test('Testing Todos - "+ Item" button should hide AddTodo component when clicked two times', () => {
    render(<MockTodos/>);
    const buttonElement = screen.getByTitle('Add Item')
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    const todoForm = screen.queryByRole('todo-form');
    expect(todoForm).toBeFalsy;
})