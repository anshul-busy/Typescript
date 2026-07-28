
import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import "./style/Employee.css"
import axios from 'axios';
import UserCard from '../components/UserCard';

type UserType= {
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
}
const Task = () => {
const URL = "https://jsonplaceholder.typicode.com/users";
const [data, setData]= useState<UserType[]>([])


  useEffect(() => {
    async function fetchData() {
    try {
        const response = await axios.get<UserType[]>(URL);
        console.log(response.data);
      setData(response.data)
      console.log("useState data", data);
      console.log(response.data[0].name);
      
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.log('axios error message', error.message);
        } else if (error instanceof Error) {
            console.log('axios error message', error.message);
        } else {
            console.log('axios error message', String(error));
        }

     
    }
}
    fetchData()
  },[])

  return (
      <Sidebar heading="💻 Employees overview">
              <h1>💻 Employees overview</h1>
      <div className="head">

    
       </div>
          <div  className="card-container" >
        {data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </Sidebar>
  )
}

export default Task