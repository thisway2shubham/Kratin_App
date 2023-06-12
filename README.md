# Kratin_App

Workspace: Kratin Assignment

Problem Statement: How can you help Sunita Sharma (65+ years old) to live a healthier and better life?

Identify one use case for elderly care (for the age group 65+) and create a working prototype to demonstrate your idea using technology known to you.

Description:

What is To-do list?

To-do list a React.js based application which provides many features like add to-do item in the list, delete items from the list, time of to-do item, user guide and many more.

Why To-do list application?

Generally, people aged 65+ tend to forget things easily. To help with reminders for daily tasks, a to-do list application is a great option.

Lets assume that the user is a diabetic and has high blood pressure, she needs regular physical activities as well as mental activities, which are included in the sample to-do list.

The user also needs a proper diet and should take medication regularly. In many cases, a patient may require a companion to take care of them. This to-do application will simplify these tasks for the patient.

Features:

Add To-do Item:-

If she wants to add any other activities like doctor appointments or anything else beyond the daily activities, she can easily add a task to the list with a simple "add" button.

Delete To-do Item:-


Whenever a task is completed, the user can strike off the to-do item with a single click. The user can also undo completed tasks.


Future Scope:

There can be many improvements that can made in the future. Such improvements like:-

Alerts message and text message to remind the user if she forget to complete the to-do item task.

This application has future scope, such as persisting the to-do list in local storage using JSON methods.

We can use react-toast to many application more animated and user friendly. Adding animations to cheer up the user every time they strike off a task.

The possibilities for application development are endless, as there are unlimited customizations that can be made.

Code Summery:

This code is a React component for a simple todo list application. It allows users to add tasks, mark them as completed, and delete them from the list. The component maintains a state with two properties: todosList and newTodoInput. The todosList holds an initial list of todos, while newTodoInput stores user input for adding new todos.

The initial list of tasks is defined in the initialTodosList array. Each task has an ID, a title, and a status indicating whether it is checked or not.

The component includes methods to handle user interactions. onChangeUserInput updates the newTodoInput state as the user types in the input box. onClickAddBtn adds a new todo to the todosList state with a unique ID and the title from the newTodoInput. It also clears the input box. It shows an alert to interact with the user on empty input and confirm the addition of a task to the list. ChangeTodoStatus toggles the checked/unchecked status of a todo based on its ID. deleteTodo removes a todo from the todosList state based on its ID and shows an alert to confirm the deletion. completingTodoList checks if the todo list is empty and displays a completion message if so.

The render method defines the structure of the todo list application using JSX. It includes headings, input fields, buttons, and a list of todos. It maps through the todosList state and renders a TodoItem component for each todo, passing the necessary props. The TodoItem component handles the display and functionality of individual todos.

Overall, the code creates a functional todo list application that allows users to manage tasks by adding, marking as completed, and deleting them. It provides a user-friendly interface and incorporates React's component-based architecture.
