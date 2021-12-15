let list = [];
while("!quit"){
 let newQuestion = prompt("What would you like to do?");
 if(newQuestion == "new"){
    let newToDo = prompt("Enter new ToDo:")
    list.push(newToDo)
     console.log(`${newToDo} added to list`);
 }else if(newQuestion == "list"){
     console.log(list);
 }else if(newQuestion == "delete"){
    let index = prompt("Enter index of item you want to delete:");
    let deleted = list.splice(index, 1);
    console.log(`${deleted} removed from list`);
 }else if(newQuestion == "quit"){
    console.log("you have quit the app");
    break;
}
}
