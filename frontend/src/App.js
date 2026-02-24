import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
    loading: true
  };

  componentDidMount = async () => {
    console.log("App mounted, fetching todos...");
    try {
      const response = await axios.get("http://127.0.0.1:4000/todo/list");
      console.log("Backend response received:", response.data);
      this.setState({
        todos: response.data.todos || [],
        loading: false
      });
    } catch (error) {
      console.error("Failed to fetch todos:", error);
      this.setState({
        todos: ["Error: " + (error.message || "Unknown error")],
        loading: false
      });
    }
  };

  render() {
    const { todos, loading } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Todo Details</h1>
          <div className="todo-container">
            {loading ? (
              <h2>Loading Todos...</h2>
            ) : Array.isArray(todos) && todos.length > 0 ? (
              todos.map((todo) => (
                <div key={todo.id || todo.task} className="todo-card">
                  <h3>{todo.task || todo}</h3>
                  {todo.description && <p className="description">{todo.description}</p>}
                  {todo.status && <span className={`status ${todo.status.toLowerCase().replace(" ", "-")}`}>{todo.status}</span>}
                </div>
              ))
            ) : (
              <h2>No Todos Found</h2>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
