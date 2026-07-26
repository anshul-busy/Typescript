
import axios from 'axios';

type UserType= {
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
}



const URL = "https://jsonplaceholder.typicode.com/users";

async function fetchData(): Promise<UserType[]> {
    try {
        const response = await axios.get<UserType[]>(URL);
        console.log(response);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.log('axios error message', error.message);
        } else if (error instanceof Error) {
            console.log('axios error message', error.message);
        } else {
            console.log('axios error message', String(error));
        }

        return [];
    }
}

fetchData()
.then(users => console.log(users))
.catch(err => console.error(err))