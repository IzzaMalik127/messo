import inquirer from "inquirer";
const response = await inquirer.prompt([{
        type: 'String',
        name: "shopping",
        message: "Which item you want to purchase?",
    }]);
console.log(response);
//let shopping=['Fruits','Vegetables','Groceries']
//if(a.shopping=='Fruits'){
//console.log('Banana,Apple,Peach,Orange,Watermelon');
//}
//else if(a.shopping=='Vegetables'){
//console.log('Potatos,Tomatos,Ladyfinger,Carrot');
//}
//else if(a.shopping=='Groceries'){
//console.log('Egg,Cheese,Butter,Bread,Milk');
//}
//else{
// console.log('Not Available');
