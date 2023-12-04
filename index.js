import Enquirer from "enquirer";
let a = await Enquirer.prompt({
    type: "input",
    name: "shopping",
    message: "Which item you want to purchase?"
});
console.log(a);
let message = ['Fruits', 'Vegetables', 'Groceries'];
if ('message>=Fruits') {
    console.log('Banana,Apple,Peach,Orange,Watermelon');
}
else if ('message>=Vegetables') {
    console.log('Potatos,Tomatos,Ladyfinger,Carrot');
}
else if ('message>=Groceries') {
    console.log('Egg,Cheese,Butter,Bread,Milk');
}
else {
    console.log('Not Available');
}
