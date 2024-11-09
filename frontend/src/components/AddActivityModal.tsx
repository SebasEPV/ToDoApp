import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface AddActivityModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onAddActivity: (activity: {
        title: string;
        description: string;
        startTime: string;
        endTime: string;
        dueDate: string;
        taskId: number; 
    }) => void;
    tasks: { id: number; title: string }[]; 
}

const AddActivityModal: React.FC<AddActivityModalProps> = ({
    isOpen,
    onRequestClose,
    onAddActivity,
    tasks,
}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [taskId, setTaskId] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddActivity({ title, description, startTime, endTime, dueDate, taskId });
        onRequestClose(); 
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Agregar Actividad</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Fecha de inicio:</label>
                    <input
                        type="datetime-local"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Fecha de fin:</label>
                    <input
                        type="datetime-local"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Fecha de entrega:</label>
                    <input
                        type="datetime-local"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tarea:</label>
                    <select value={taskId} onChange={(e) => setTaskId(Number(e.target.value))} required>
                        <option value="" disabled>
                            Selecciona una tarea
                        </option>
                        {tasks.map((task) => (
                            <option key={task.id} value={task.id}>
                                {task.title}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Agregar</button>
                <button type="button" onClick={onRequestClose}>Cancelar</button>
            </form>
        </Modal>
    );
};

export default AddActivityModal;
