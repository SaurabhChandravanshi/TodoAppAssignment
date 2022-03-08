import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../components/Todo";

import store  from "../store/store";
import { Provider } from "react-redux";

const MockTodo = ({todo}) => {
    return (
        <Provider store={store}>
        <Todo key={10} todo={todo}/>
        </Provider >
    )
}

test('Testing Todo - Check weather todo title is showing', () => {
    render(<MockTodo todo={{title:'Test Title', userId:111, id:123, completed:false}}/>);
    const titleElement = screen.getByRole('todo-title');
    expect(titleElement.textContent).toBe('Test Title');
})

describe('Testing Todo - Check weather update status button text showing perfectly', () => {
    test('Checking for pending todo', () => {
        render(<MockTodo todo={{title:'Test Title', userId:111, id:123, completed:false}}/>);
        const updateElement = screen.getByRole('update');
        expect(updateElement.textContent).toBe('Done');
    });
    test('Checking for completed todo', () => {
        render(<MockTodo todo={{title:'Test Title', userId:111, id:123, completed:true}}/>);
        const updateElement = screen.getByRole('update');
        expect(updateElement.textContent).toBe('Todo');
    })
})