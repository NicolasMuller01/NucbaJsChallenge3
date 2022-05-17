const pizza = [
    {
        id:1,
        nombre:"nevada", 
        ingredientes:["queso","huevo","salsa"],
        precio:700
    },
    {
        id:2,
        nombre:"cebollada", 
        ingredientes:["queso","cebolla","ajo","salsa"],
        precio:400
    },
    {
        id:3,
        nombre:"super", 
        ingredientes:["queso","huevo","salsa","oregano","cheddar"],
        precio:400
    },
    {
        id:4,
        nombre:"picante", 
        ingredientes:["queso","huevo","salsa extra picante","salsa mexicana"],
        precio:1000
    },
    {
        id:5,
        nombre:"vegana", 
        ingredientes:["queso vegano","cebolla","ajo","salsa","lentejas"],
        precio:700
    },
    {
        id:6,
        nombre:"sin queso", 
        ingredientes:["salsa","oregano"],
        precio:5600
    }
  ];

    const input = document.querySelector(".inputNumber");
    const button = document.querySelector(".inputButton");
    const h2 = document.querySelector(".h2");
    const h4 = document.querySelector(".h4");


    button.addEventListener('click',() => {
    if(input.value <= pizza.length){
    const valores = pizza.filter(item => item.id == input.value).map(itemDos => ({
        nombre:itemDos.nombre,
        id:itemDos.id
    }))
    

    h2.innerHTML = valores[0].id;
    h4.innerHTML = valores[0].nombre;
    }
    else alert("id incorrecto");
})


