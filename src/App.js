// Importing Components
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
// Importing React Hooks
import { useState, useEffect } from 'react';
// Importing Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";

function App() {
    // All States
    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const [tasks, setTasks] = useState([]); // Task State
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form

    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3500);
    }, [])

    // Fetching from Local Storage
    const getTasks = JSON.parse(localStorage.getItem("taskAdded"));

    useEffect(() => {
        if (getTasks == null) {
            setTasks([])
        } else {
            setTasks(getTasks);
        }
        // eslint-disable-next-line
    }, [])

    // Add Task
    const addTask = (task) => {
        const id = uuidv4();
        const newTask = { id, ...task }

        setTasks([...tasks, newTask]);

        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully added a new drugs member!'
        })

        localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
    }

    // Delete Task
    const deleteTask = (id) => {
        const deleteTask = tasks.filter((task) => task.id !== id);
        
       

        setTasks(deleteTask);

        Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'You have successfully deleted a drugs member!'
        })

        localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
    }

   // Edit Task
const editTask = (id) => {
    let datas = JSON.parse(localStorage.getItem('taskAdded'));
    const taskToEdit = datas.find(x => x.id === id);

    const fname = prompt("Firstname", taskToEdit.fname);
    const nname = prompt("Nickname", taskToEdit.nname);
    const age = prompt("Age", taskToEdit.age);
    const position = prompt("Position", taskToEdit.position);
    

    // Show confirmation dialog
    const shouldSave = window.confirm("Do you want to save the changes?");

    if (shouldSave) {
        let data = JSON.parse(localStorage.getItem('taskAdded'));
        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    fname: fname,
                    nname: nname,
                    age: age,
                    position: position,
                    id: uuidv4()
                }
            }

            return x;
        });
        

        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully edited an existing drugs member !'
        });

        localStorage.setItem("taskAdded", JSON.stringify(myData));
        window.location.reload();
    } 
};

    return (
        <>
            {
                loading
                    ?
                    <div className="spinnerContainer">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :

                 
                    <div className="container">
                        {/* App Header that has open and App Name */}
                        <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />

                        {/* Revealing of Add Task Form */}
                        {showAddTask && <AddTask onSave={addTask} />}

                        {/* Task Counter */}
                        <h3>Number of Drug List: {tasks.length}</h3>

                        {/* Displaying of Tasks */}
                        {
                            tasks.length > 0
                                ?
                                (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />)
                                :
                                ('No Drug List Found!')
                        }
                    </div>
            }
        </>
    )
}

export default App;