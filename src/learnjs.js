import {Axios} from "axios";
import {useState} from "react";

export default function something(){

}
//arrow function below
export const DoSomething = () => {

}

const MyComponent = () =>{
    return <div>yeah</div>
}

//anonymous function
<button onClick ={() =>{
    console.log("hello");
}}></button>;





//conditionals using terenary operators
//write js inside html - jsx
let age = 12;
let name = 'John';
if (age>10) {
    name = 'John'
}else{
    name = 'Hana'
}
//writing in terenary
let nameter = age>10 ? "John" : "Hana";

const Component = () =>{
    return age>10?<div>John</div>:<div>Hana</div>
}

//object in javascript = dictionary in python
const person = {
    name:'John',
    age:16,
    isMarried:false,
};
const name = person.name
const age = person.age
const isMarried = person.isMarried

//destructing property of objects
const {name,age,isMarried} = person;

//
const name2 = 'Hana'
const age2 = 20
const person2 = {
    nameperson : name2,
    ageperson : age2,
};
//the above is equivalent to the below code
const person2 = {
    name2,
    age2

}
//person 3 is same as person but different name
const person3 = {...person, name:"Kim"}
const names = ['Pedro','JAck','Jessica','Pedro','Pedor']
const names2 = [...names,"Joe"]

//3 functions that are useful for manipulating arrays
let names1 = ["Divya","Vishal","Joon"]
//map, filter
//add a number 1 to all names in names1
names1.map ((name)=>{
    console.log(name);
    return name+"1";
});
//gives headings for all names in react
names1.map((name)=>{
    return <h1>{name}</h1>
});

//remove all pedro in list
names.filter((name)=>{
    return name !== 'Pedro';
})

//async + await + fetch
//front end app where we need to fetch values from api takes different times
//different data arrives at different times

const listOfMovies = fetch ("url.com/movies") // not instant
console.log(listOfMovies) // not waiting the above request to be completed and get all data

// we fix that using promises
// promise - prebuilt in js which deals with waiting for data to come
const event = new Promise((resolve,reject)=>{ // resolve - things to happen when condition is true, reject - things to happen when condition is false
    var name = 'Pedro';
    if (name === "John"){
        resolve();
    }else{
        reject("Name was not pedro, name was:"+name);
    }
});
//.then - called if resolved , .catch - if rejected
event
    .then((name)=>{
    console.log(name);
})
    .catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('promise finished')
})
// like a try catch block
// so if api request data is received do something - then() - resolve
// if data is not received or something else - catch() - reject

const axios = require("axios");
const data = axios.get("https://cat-fact.herokuapp.com/facts");
data.then((res)=>{
    console.log(res);
    console.log(res.data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("promise resolved");
})
console.log(data); // gives promise pending

//instead of using promise syntax, we can use async and await

async function fetchDatao(){

}
const fetchData = async() =>{
    try {
        const data = await axios.get("https://cat-fact.herokuapp.com/facts");
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log('hi i am finally');
    }
};

fetchData();

//how to make an api request using axios and fetch
//https://official-joke-api.appspot.com/random_joke

function App(){
    const [joke, setJoke] = useState("")
    const getJoke = () =>{
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then((r) => {
                console.log(r)
                setJoke(r.data.setup + "..." + r.data.punchline);
            });


    }
    return <div>Hellow <button onClick = {getJoke}> Get a Joke</button>   </div>;
    }
    export default App

function AppFetch(){
    const [joke, setJoke] = useState("")
    const getJoke = () =>{
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then((r) => r.json())
            .then((data) => {

                setJoke(data.setup + "..." + data.punchline);
            });


    }
    return <div>Hellow <button onClick = {getJoke}> Get a Joke</button>   </div>;
}
