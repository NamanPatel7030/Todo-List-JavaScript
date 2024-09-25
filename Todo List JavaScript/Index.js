store=[];
while(true){
    let userinput= prompt("Enter 1)Add\n 2)Delete\n 3)List All\n 4)QuitApp");
    if (userinput==1){
        let task = prompt("Enter Your task");
        store.push(task);
        console.log(store);
        
    }
    else if(userinput==2){
        console.log(store)
        let task = prompt("Enter index of task")
        store.pop(task);
        console.log(store);


    }
    else if(userinput==3){
        console.log(store);
    }

    else break;
    
    
}
