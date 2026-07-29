
import { useEffect, useState } from 'react'
import CardDashboard from '../components/CardDashboard'
import Sidebar from '../components/Sidebar'
import TeamCard from '../components/TeamCard'
import "./style/Dashboard.css"
import { type User, getUsers } from '../services/usersService'
import type { Task } from '../types/Task'



const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

 
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
 <Sidebar heading="📈 Dashboard">
  <div className="container-card">

    <div className="top-section">
      <div className="heading-h1">
        <h1 id="dash">📈 Dashboard</h1>
      </div>
      

      <div className="card-row">
        <CardDashboard heading="Total Projects" num="24" bottom="5+ increased from last month" bgColor={'black'} textcolor={'white'}/>
        
        <CardDashboard heading="Ended Projects" num="11" bottom="6+ increased from last month" bgColor={'white'} textcolor={'black'}/>

        <CardDashboard heading="Running Projects" num="12" bottom="2+ increased from last month" bgColor={'white'} textcolor={'black'}/>
        <CardDashboard heading="Pending Projects" num="2" bottom="On Discuss" bgColor={'white'} textcolor={'black'}/>
      </div>
    </div>
            
    <div className="activity">
      <TeamCard users={users} tasks={tasks} />
    </div>
  </div>
</Sidebar> 

  )
}

export default Dashboard