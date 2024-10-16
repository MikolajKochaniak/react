//export let apiKey = 'absde';
//export let apiKey2 = 'klkls';
//export default "klmno";
let userMassage = "Hello world!";
const userMassage2 = "Hello World!";
function greet(user, message ="Hello world!"){
    return (user+ " "+ message);
}
console.log(greet("Miki","keep the good job"));
//together sumuje 3 argumenty
function together(a,b, c){
    return a+b+c
}
console.log(together(1, 2, 3));

export default function(){
    console.log("Welcome!");
}
export default() => {
    console.log("Welcome!");
}
export default(userName) => {
    console.log("Welcome!");
}
export default userName => {
    console.log("Welcome!");
}
export default number => number *3;
export default number => {return number *3};
export default number => ({age: number});

const user= {
    name:"MIKI";
    age:40;
    greet(){console.log("hello!")
    console.log(this.age)
}
}
console.log(user.name);
class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('Hi!');
    }
}
const user1 = new User('Monika', 30);
console.log(user1);

const hobbies =['sports','cooking','reading'];
hobbies.push('working');
const index1 = hobbies.findIndex((item) =>{return item === 'sports'});
console.log(index1);
const index2 = hobbies.findIndex((item) => item === 'sports');
console.log(index2);
const MyArr = hobbies.map( (item) =>item + "!");
console.log(myArr);

function transformToObjects(numberArray){
    //todo: dodaj logikę
    // transformToObjects([1,2,3]) zwróci [{val:1},{val:2},{val:3}]
    return numberArray.map((item) => ({val: item}));
}
console.log(transformToObjects([1,2,3]))

//restrukturyzacja
const userNames = ["Max","John","Green"];
const [firstName,secondName,thirdName] = userNames;
console.log(firstName,secondName,thirdName);

const{name3, age3} = {name3: "robert", age3: 40};
console.log(name3, age3);

function storeOrder(order){
    localStorage.setItem('id', order.id);
    localStorage.setItem('currency', order.currency);

}

//operator spreadu
//const hobbies = ['sports','cooking','reading'];
const icecream = ['vanilla','chocolate','berry'];
const mergedLists = [...hobbies,...icecream];
console.log(mergedLists);
const mergedLists2 = [hobbies,icecream];
console.log(mergedLists2);

const extendedUser = {
    isAdmin: true,
    ...user
}
console.log(extendedUser);

const password = prompt('Your password');
if(password === "Hello"){
    console.log("Hasło przyjęte");
}else{
    console.log("Rejected!");
}
const myTimeout = setTimeout(myGreeting, 5000);
function myGreeting(){
    document.getElementById("demo").innerHTML = "Happy birthday!"
}

setTimeout( () => {console.log("More time out... ", 4000)});

let userMessage = "Hello world!";
userMassage = userMessage. concat("!!!!!");










