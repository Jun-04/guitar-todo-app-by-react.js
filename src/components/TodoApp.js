import React from "react";
import Todos from "./Todos";
import Header from "./Layout/Header";
import AddTodo from "./AddTodo";
import {v4 as uuidv4} from 'uuid';

class TodoApp extends React.Component {
    state = {
        todos: [
        id: uuidv4(),
        title: "Down Picking BPM 50 ~ 80",
        completed: false
        },
        {
        id: uuidv4(),
        title: "Alternate Picking BPM 80 ~ 100",
        completed: false
        },
        {
        id: uuidv4(),
        title: "Play  a song with chord strumming",
        completed: false
        },
        {
        id: uuidv4(), 
        title: "Memorise a fret board",
        completed: false,
        }
        ]
       };
       handleChange = id => {
        this.setState({
        todos: this.state.todos.map(todo => {
        if (todo.id === id) {
        todo.completed = !todo.completed;
        }
        return todo;
        })
        });
       };

       deleteTodo = id => {
        this.setState({
        todos: [
        ...this.state.todos.filter(todo => {
        return todo.id !== id;
        })
        ]
        })
   };

   AddTodo = title => {
    const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
    };
    this.setState({
        todos:[...this.state.todos, newTodo]
    });
   };
       
 render() {
 return (
 <div className="container">
    <Header />
    <AddTodo AddTodo={this.AddTodo} />
    <Todos
      todos={this.state.todos}
      handleChange={this.handleChange}
      deleteTodo={this.deleteTodo}/>
 </div>
 );
 }
}
export default TodoApp;
