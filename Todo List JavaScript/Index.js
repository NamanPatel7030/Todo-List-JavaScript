let input=prompt("What would you like to do")
let todo=[];  
while(input!== "quit"){
    if(input=="show"){
        console.log("--------------------")
        for(let i=0;i<todo.length;i++){
            console.log(`${i+1}. ${todo[i]}`);
        }
        
        console.log("--------------------")
        
    }
    else if(input=="add"){
        let newTodo = prompt("Enter a new Task")
        todo.push(newTodo);
        console.log(`${newTodo}is added`)
        
        
    }
    else if(input=="delete"){
        let index = parseInt(prompt("Enter Number of that Task"));
        ItemDeleted=todo.splice(index-1, 1);
        console.log(`${ItemDeleted} is deleted`)
    }
    
    input=prompt("What would you like to do")
}
console.log("QUITE APP")



[a,b,c,d]
 0,1,2,3
 1
 index