

import "./style/Tasks.css"

import Sidebar from '../components/Sidebar'


import { useEffect, useState } from "react";
import { getUsers, type User } from "../services/UsersService";
import type { Task, TaskStatus } from "../types/task";

const Tasks = () => {
  const [users, setUsers] = useState<User[]>([]);
    const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });
  const [search, setSearch] = useState("");

 useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);




  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: "",
    status: "Pending" as TaskStatus
  });

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  
  const handleAdd = () => {
    const user = users.find(u => u.id === Number(form.assignedTo));

    if (!user) return;

    const newTask: Task = {
      id: Date.now(),
      title: form.title,
      description: form.description,
      assignedTo: user.id,
      assignedName: user.name,
      status: form.status
    };

    setTasks(prev => [...prev, newTask]);
  };


  const handleDelete = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };


  const toggleStatus = (id: number) => {
    setTasks(tasks.map(t =>
      t.id === id
        ? { ...t, status: t.status === "Pending" ? "Completed" : "Pending" }
        : t
    ));
  };


  const filteredTasks = tasks.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
     <Sidebar heading="Tasks">

        
    <h2>Task Manager</h2>


      <div className="task-form">
        <input
          className="input-field"
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="input-field"
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <select
          className="select-field"
          value={form.assignedTo}
          onChange={e => setForm({ ...form, assignedTo: e.target.value })}
        >
          <option value="">Assign User</option>
          {users.map(u => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>

        <select
          className="select-field"
          value={form.status}
          onChange={e => setForm({ ...form, status: e.target.value as TaskStatus })}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <button className="btn-primary" onClick={handleAdd}>
          Add Task
        </button>
      </div>


      <div className="search-container">
        <input
          className="input-field search-field"
          placeholder="Search tasks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

    
      <div className="task-list">
        {filteredTasks.map(task => (
          <div key={task.id} className="task-card">
            <h4>{task.title}</h4>
            <p className="task-desc">{task.description}</p>
            <p className="task-meta">
              <strong>Assigned to:</strong> {task.assignedName}
            </p>
            <p className="task-meta">
              <strong>Status:</strong>{' '}
              <span className={`status-badge ${task.status.toLowerCase()}`}>
                {task.status}
              </span>
            </p>

            <div className="task-actions">
              <button className="btn-secondary" onClick={() => toggleStatus(task.id)}>
                Toggle Status
              </button>

              <button className="btn-danger" onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>


     </Sidebar>
  );
};

export default Tasks;