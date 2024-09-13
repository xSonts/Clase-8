//ternarios
let edad=12;
let mensaje = edad>10? "eres un puberto":"eres un adolescente";
document.write(mensaje);

//intervals
const saludo = ()=>{
    document.write("<li>hola UAO</li>")
};

setInterval(saludo,3000)

// const evaluar=()=>{
//     const edad= prompt("Cual es tu edad");
//     if(edad>21){
//         alert("Mayor de edad");
//     }else {
//         alert("Menor de edad")
//     } 
// }
// setInterval(evaluar,3000)

//Template string
const nombre="Santiago"
const email="goasss24@gmail.com"
const mensaje1=`hola ${nombre}, tu correo es ${email}`;
document.write(mensaje1);


//Promesasa
const sumar=(num1,num2)=>{
    return new Promise((resolve,reject)=>{
        if(num1<0 || num2<0){
            reject("Esto no es valido");
        }else{
            resolve(num1+num2)
        }
    })
}

const result=sumar(43,54)
.then((res)=>{
    document.write(res);
})
.catch((error)=>{
    document.write(error);
})

//fetch
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>response.json())
.then((data)=>{
console.log(data);
})