# Todo List React App

This is a simple Todo list app with followinf features.
1. Add Item to  Todo list.
2. Mark Todo item ad done or pending.
3. Delete item from todo list.
4. Dark & light theme.

This App uses React Redux to manage states of the application.
Unit testing is implemented to test some functionality of the app in component level.
__test__ directory contain all the tests for each Component used in this app.

'component' folder contain all the Components used in this app except App component 
which is placed inside src folder.

'store' folder contains all the Redux state management code.
insie store folder
store.js file --> creates a single store.
actions folder --> contains all the possible actions that can trigger state change.
reducers folder --> contains business logic for updating the states according to actions.