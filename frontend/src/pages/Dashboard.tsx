import React, { useEffect, useState } from 'react';
import './../assets/css/dashboard.css';
import AddTaskModal from './../components/AddTaskModal'; 
import AddActivityModal from './../components/AddActivityModal';
import userService from '../services/UserService';

const Dashboard: React.FC = () => {
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
    const [tasks, setTasks] = useState<{ id: number; title: string }[]>([]);
    const {getUsers} = userService

    const handleAddTask = (task: { title: string; description: string; priority: boolean; dueDate: string }) => {
        // Lógica para agregar una tarea
    };

    const handleAddActivity = (activity: {
        title: string;
        description: string;
        startTime: string;
        endTime: string;
        dueDate: string;
        taskId: number;
    }) => {
        // Lógica para agregar una actividad
    };

    useEffect(() => {
        console.log(getUsers());
    })

    return (
        <div className="App">
            <div className='tasks-column'>
                <h2>Tareas prioritarias</h2>
                <p>Las tareas registradas</p>
                <h2>Tareas no prioritarias</h2>
                <p>Las tareas registradas</p>
                <button onClick={() => setIsTaskModalOpen(true)}>Agregar Tareas</button>
                <button onClick={() => setIsActivityModalOpen(true)}>Agregar Actividad</button>
            </div>
            <div className="activities-column">
                <h2>Actividades</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Título de la actividad</th>
                            <th>Descripción</th>
                            <th>Hora de inicio</th>
                            <th>Hora de fin</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

            <AddTaskModal
                isOpen={isTaskModalOpen}
                onRequestClose={() => setIsTaskModalOpen(false)}
                onAddTask={handleAddTask}
            />

            <AddActivityModal
                isOpen={isActivityModalOpen}
                onRequestClose={() => setIsActivityModalOpen(false)}
                onAddActivity={handleAddActivity}
                tasks={tasks}
            />
        </div>
    );
};

export default Dashboard;
