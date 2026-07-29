
const URL = "https://jsonplaceholder.typicode.com/users";

async function fetchData(){
try {
    const response = await fetch(URL)
    if(!response.ok){
        throw new Error("Invalid URL")
    }
    const data = response.json()
    console.log(data);
    
} catch (error) {
    console.log(`Error`,error);
    }

}