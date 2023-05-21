
//TRABAJO PRACTICO N°2
console.log("TRABAJO N°2")

let productos =[
    {
        nombre: "harina",
        precio:35
    },
    {
        nombre: "pan",
        precio:25
    },
    {
        nombre: "papa",
        precio:52
    },
    {
        nombre: "palta",
        precio:55
    },
    {
        nombre: "fideos",
        precio:85
    },
    {
        nombre: "aceite",
        precio:350
    },
    {
        nombre: "sopa",
        precio:86
    },
    {
        nombre: "mermelada",
        precio:108
    },
    {
        nombre: "porotos",
        precio:69
    },
    {
        nombre: "lentejas",
        precio:85
    },
    {
        nombre: "mandarina",
        precio:43
    },
    {
        nombre: "banana",
        precio:79
    },
    {
        nombre: "leche de almendras",
        precio:145
    },
    {
        nombre: "papel higienico",
        precio:147
    },
    {
        nombre: "lavandina",
        precio:55
    },
    {
        nombre: "alcohol en gel",
        precio:123
    },
    {
        nombre: "shampoo",
        precio:400
    },
    {
        nombre: "arroz",
        precio:66
    },
    {
        nombre: "harina",
        precio:35
    },
    {
        nombre: "salsa de tomate",
        precio:35
    },
];

let precio = []
let productosCarrito = []

const comprar = document.querySelector(".comprar")
const contenedor = document.querySelector(".contenedor")
const mostrar = document.querySelector(".mostrarCompra")

productos.forEach((item)=>{
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const button = document.createElement("button")
    

    h2.textContent = item.nombre
    button.textContent = `$ ${item.precio}`

    button.addEventListener("click", ()=>{
        alert("Se agrego al carrito")
        precio.push(item)
    })

    div.appendChild(h2)
    div.appendChild(button)
    contenedor.appendChild(div)
})

comprar.addEventListener("click", ()=>{

    

    let acumulador = 0

    precio.forEach((item)=>{
       acumulador = acumulador + item.precio
       productosCarrito.push(item.nombre)
    })


    let h3 = document.createElement("h3")
    let h4 = document.createElement("h4")

    h3.textContent = `El precio total es: $${acumulador}`
    
    
        h4.textContent = `Todos los Productos: ${productosCarrito}`
        mostrar.appendChild(h4)
   

    mostrar.appendChild(h3)

})

const resetear = document.querySelector(".resetear")

resetear.addEventListener("click", ()=>{
    let reset = document.createElement("h3")
    reset.textContent = "Se Reseteo"
    reset.style.color = "red"
    mostrar.appendChild(reset)
    precio = []
    productosCarrito = []
})