function getstr(str:string):string {
        if(typeof str ==='string'){
            return `hello ${str}`
        }
        return "hello"
}


class Hello{
    greeting(){
        return `Hello world`
    }
}

class Hello2 {

  greeting2(){
        return `Hello world`
    }
}

function greet(str: Hello | Hello2){
    if(str instanceof Hello2){
        return str.greeting2 //type checking
    }
}


