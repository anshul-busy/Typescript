


type book={
    name:string
}

type Role = "admin" | "user"

function checkRole(role:Role){
    if(role === "admin"){
        console.log("this is admin")
    }
    if(role === "user"){
  console.log("this is user")
    }
}

console.log(checkRole("admin"));
