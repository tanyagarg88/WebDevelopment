let todo =[];
let req = prompt("please enter your req");
while(true){
    if(req=="quit"){
        console.log("quiitting app");
        break;
    }
    if(req=="list"){
        console.log("_______");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("_______");
    }else if(req == "add"){
        let task =prompt("please enter your task");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let index = prompt("enter the task index");
        todo.splice(index,1);
        console.log("task deleted");
    }else{
        console.log("wrong req");
    }
    req = prompt("please enter your req");
}