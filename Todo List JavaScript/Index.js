// store=[];
// while(true){
//     let userinput= prompt("Enter 1)Add\n 2)Delete\n 3)List All\n 4)QuitApp");
//     if (userinput==1){
//         let task = prompt("Enter Your task");
//         store.push(task);
//         console.log("YOUR TODO IS ADDED HERE");
        
//     }
//     else if(userinput==2){
//         console.log(store)
//         let remove = prompt("Enter index of task")
//         // let index = store.indexOf(remove);
//         removedItem=store.splice(remove, 1);
    
//         console.log("DELETED ITEM: "+ removedItem );


//     }
//     else if(userinput==3){
//         console.log(store);
//     }

//     else break;
    
    
// }

// let input = prompt("What would you like to do");
let input=prompt("What would you like to do")
let todos =["Cookie", "Bath"];  
while(input!== "quit"){
    if(input=="Show"){
        console.log("--------------------")
        for(let i=0;i<todos.length;i++){
            console.log(`${i+1}. ${todos[i]}`);
        }
        
        console.log("--------------------")
        
    }
    else if(input=="add"){
        let newTodo = prompt("Enter a new Task")
        todos.push(newTodo);
        console.log(`${newTodo}is added`)
        
        
    }
    else if(input=="delete"){
        let index = parseInt(prompt("Enter index of the Task"));
        ItemDeleted=todos.splice(index-1, 1);
        console.log(`${todos[ItemDeleted]} is deleted`)
    }
    
    input=prompt("What would you like to do")
}
console.log("QUITE APP")