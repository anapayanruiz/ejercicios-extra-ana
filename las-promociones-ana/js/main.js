"use strict";

/*array 'promos' con objetos dentro 'promo'*/

const promos = [{
        promo: 'A',
        name: 'Ada',
        students: [{
                id: 'id-1',
                name: 'Sofía',
                age: 20
            },
            {
                id: 'id-2',
                name: 'María',
                age: 21
            },
            {
                id: 'id-3',
                name: 'Lucía',
                age: 22
            }
        ]
    },
    {
        promo: 'B',
        name: 'Borg',
        students: [{
                id: 'id-4',
                name: 'Julia',
                age: 23
            },
            {
                id: 'id-5',
                name: 'Tania',
                age: 24
            },
            {
                id: 'id-6',
                name: 'Alaia',
                age: 25
            }
        ]
    },
    {
        promo: 'C',
        name: 'Clarke',
        students: [{
                id: 'id-7',
                name: 'Lidia',
                age: 26
            },
            {
                id: 'id-8',
                name: 'Celia',
                age: 27
            },
            {
                id: 'id-9',
                name: 'Nadia',
                age: 28
            }
        ]
    }
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];


/*--ITERACION--*/
for (let i = 0; i <= promos.length; i++) {
    // console.log(promos[i]);
}

/*Así se escribe con for of
 for (const promo of promos) {
     console.log(promo);
}*/

/*Así se escribe con forEach que es una función para iterar dentro de un array
 promos.forEach(function (promo, index, promos) {
     console.log(promo);
 });*/

/*Así se escribe con forEach y con arrow
 promos.forEach((promo) => {
     console.log(promo)
 });*/

/*Así se escribe con forEach y con arrow pero como es una sentencia le quito las llaves y el ; del console.log
 promos.forEach(promo => console.log(promo));*/
/*--ITERACION--*/

/*VARIABLES PARA LOCALIZAR EN EL DOM*/
const resultElement = document.querySelector(".js-result");

/*FUNCION PARA PINTAR EN EL DIV LA LISTA PROMO#1*/
function paintPromos() {
    let htmlCode = "";

    for (let i = 0; i < promos.length; i++) {
        console.log(promos[i].name);
        /*solo lo pongo una vez y con el += para que vaya sumando con la iteracion */
        htmlCode += `<li>${promos[i].name}</li>`;
    }
    /*aquí le decimos que lo que hemos almacenado en la iteración lo iguale a lo que hay dentro del div'*/
    resultElement.innerHTML = `<ul>${htmlCode}</ul>`;
}

/*aquí se ejecuta la funcion de 'pintado'*/
// paintPromos();

/*FUNCION PARA PINTAR EN EL DIV LA LISTA PROMO#2*/
function paintPromos2() {
    let htmlCode = "";
    for (let i = 0; i < promos.length; i++) {
        /*me guardo las propiedades del objeto dentro del array */
        const name = promos[i].name;
        const promo = promos[i].promo;
        htmlCode += `<li><p>Nombre: ${name}</p><p>Promo: ${promo}</p></li>`;
    }
    /*aquí le decimos que lo que hemos almacenado en la iteración lo iguale a lo que hay dentro del div'*/
    resultElement.innerHTML = `<ul>${htmlCode}</ul>`;
}

/*aquí se ejecuta la funcion de 'pintado'*/
// paintPromos2();

/*FUNCION PARA PINTAR EN EL DIV LA LISTA PROMO#3*/
function paintPromos3() {
    let htmlCode = "";
    for (let i = 0; i < promos.length; i++) {
        const name = promos[i].name;
        const promo = promos[i].promo;
        const students = promos[i].students;
        htmlCode += `<li><p>Nombre: ${name}</p><p>Promo: ${promo}</p><p>Número de alumnas${students}</p></li>`;
    }

    resultElement.innerHTML = `<ul>${htmlCode}</ul>`;
}

// paintPromos3();

/*FUNCION PARA PINTAR EN EL DIV LA LISTA PROMO#4*/

let htmlCode = "";

/*Aquí hago la iteracion con un for of*/

function paintPromos4() {
    for (const promo of promos) {
        let htmlPromo = `<p>Nombre: ${promo.name}</p>`;
        //metemos aquí la variable con valor 0 para que cuando pase de nuevo por la iteracion
        //de promo no arrastre lo del array de students, sino que vuelva a empezar de nuevo
        let htmlStudents = "";

        for (const student of promo.students) {
            htmlStudents += `<li>${student.name},${student.age}</li>`;
        }
        htmlCode += `<li>${htmlPromo}<ul>${htmlStudents}</ul></li>`;
        console.log(`iteracion: ${htmlCode}`);
    }

    resultElement.innerHTML = `<ul>${htmlCode}</ul>`;
}

// paintPromos4();


/*FUNCION PARA PINTAR EN EL DIV LA LISTA PROMO#5*/

/*Aquí hago la iteracion con un índice*/


let count = 0;

function paintPromos5() {
    for (let i = 0; i < promos.length; i++) {
        const name = promos[i].name;
        //esta variable sirve para definirla luego en la iteracion de dentro
        const students = promos[i].students;
        let htmlPromo = `<p>Nombre: ${name}</p>`;
        let htmlStudents = "";


        for (let j = 0; j < students.length; j++) {
            count++;
            const studentName = students[j].name;
            const studentAge = students[j].age;
            //esta constante no haría falta porque con el count ya me va sumando
            const studentId = students[j].id;
            htmlStudents += `<li id="id-${count}">${studentName},${studentAge}</li>`;
        }
        htmlCode += `<li>${htmlPromo}<ul>${htmlStudents}</ul></li>`;
    }

    resultElement.innerHTML = `<ul>${htmlCode}</ul>`;

}

// paintPromos5();


/*FUNCION PARA PINTAR EN EL DIV LA LISTA PROMO#6*/

function paintPromos6() {
    for (const promo of promos) {
        let htmlPromo = `<p>Nombre: ${promo.name}</p>`;
        let htmlStudents = "";

        for (const student of promo.students) {
            if (student.age % 2 === 0) {
                htmlStudents += `<li>${student.name},${student.age}</li>`;
            }
        }
        htmlCode += `<li>${htmlPromo}<ul>${htmlStudents}</ul></li>`;
    }
    //si esto lo muevo dentro del primer for veo como se van sumando las tres promociones
    console.log(`iteracion: ${htmlCode}`);
    resultElement.innerHTML = `<ul>${htmlCode}</ul>`;
}

// paintPromos6();



/*FUNCION PARA PINTAR EN EL DIV LA LISTA PROMO#7*/

function paintPromos7() {
    for (let i = 0; i < promos.length; i++) {
        const name = promos[i].name;
        //esta variable sirve para definirla luego en la iteracion de dentro
        const students = promos[i].students;
        let htmlPromo = `<p>Nombre: ${name}</p>`;
        let htmlStudents = "";


        for (let j = 0; j < students.length; j++) {
            const studentName = students[j].name;
            const studentAge = students[j].age;
            const studentId = students[j].id;

            //Si al buscar studentId dentro del array, este devuelve su indice, sera distinto de -1 y entrara dentro del if
            if (studentsWorkingInGoogle.indexOf(studentId) !== -1) {

                htmlStudents += `<li id="${studentId}">${studentName},${studentAge}</li>`;
            }

        }
        htmlCode += `<li>${htmlPromo}<ul>${htmlStudents}</ul></li>`;
    }

    resultElement.innerHTML = `<ul>${htmlCode}</ul>`;

}

paintPromos7();