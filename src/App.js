import "./App.css";
import Contact from "./Components/Contact_Details/Contact";
import SimpleTodos from "./Components/SimpleTodo";
// import MedicationApp from './Components/Medication';
import Todo from "./Components/TodoItem";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <div className="App">
      <div>
      <ToastContainer />
        <SimpleTodos />
        <div class="p-3 mb-2 bg-secondary text-white">
          <Contact/>
          </div>
      </div>
    </div>
  );
}

export default App;
