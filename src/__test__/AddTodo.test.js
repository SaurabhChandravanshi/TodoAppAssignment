import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import AddTodo from "../components/AddTodo";

import store  from "../store/store";
import { Provider } from "react-redux";

const MockAddTodo = () => {
    return (
        <Provider store={store}>
        <AddTodo />
        </Provider >
    )
}

test('Testing AddTodo - Input box should be cleared after clicking on add', () => {
    render(<MockAddTodo />);
    const inputElement = screen.getByPlaceholderText('Todo Title..');
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe('');
})