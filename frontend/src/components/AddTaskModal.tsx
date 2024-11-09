import React, { useState } from 'react';
import Modal from 'react-modal';
import './../assets/css/modal.css'

Modal.setAppElement('#root'); 

interface AddTaskModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onAddTask: (task: { title: string; description: string; priority: boolean; dueDate: string }) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onRequestClose, onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(false);
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddTask({ title, description, priority, dueDate });
        onRequestClose(); 
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Agregar Tarea</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <div>
                    <label>
                        Prioridad:
                        <input type="checkbox" checked={priority} onChange={(e) => setPriority(e.target.checked)} />
                    </label>
                </div>
                <div>
                    <label>Fecha de entrega:</label>
                    <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
                </div>
                <button type="submit">Agregar</button>
                <button type="button" onClick={onRequestClose}>Cancelar</button>
            </form>
        </Modal>
    );
};

export default AddTaskModal;
