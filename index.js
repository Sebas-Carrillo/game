function start(){
    var myBody = document.getElementsByTagName("body")[0];

    var alto = 5;
    var largo = 10;
    var numero = 0;
    var array = [];

    myTable = document.createElement("table");
    mytableBody = document.createElement("tbody");

    for(var j=0; j<alto; j++){
        myCurrent_row = document.createElement("tr");
        for(var i=0; i<largo; i++){

            myCurrent_cell = document.createElement("td");
            myCurrent_cell.className = "cuadrado";
            color = Math.floor(Math.random() * 3);
            var img = document.createElement("img");

            array.push(color);
            
            getClick(img, array, numero);

            myCurrent_cell.appendChild(img);
            myCurrent_row.appendChild(myCurrent_cell);
            numero ++;
        }
        mytableBody.appendChild(myCurrent_row);
    }
    myTable.appendChild(mytableBody);
    myBody.appendChild(myTable);
    myTable.setAttribute("border", "2");
}

function getClick(img, array, numero){
    dibujaCelda(img, array, numero);
    myCurrent_cell.addEventListener("click", function(){
        if(numero != 3){
            imprimeCelda(array, numero);
            vecino(img, array, numero);
            array[numero] = 3;
            dibujaCelda(img, array, numero);
        }
    });
    
}

function dibujaCelda(img, array, numero){
    if(array[numero] == 0){img.src = "rojo.png";}
    if(array[numero] == 1){img.src = "azul.png";}
    if(array[numero] == 2){img.src = "amarillo.png";}
    if(array[numero] == 3){
        img.src = "negro.png"; 
        console.log("pinta negro");
        console.log(" ");
    }
}

function vecino(img, array, numero){
    var vecinoDer = numero+1;
    var vecinoIzq = numero-1;
    var vecinoAba = numero+10;
    var vecinoArr = numero-10;

    //vecino a la derecha
    if(array[numero] == array[vecinoDer]){
        console.log("derecha");
        array[vecinoDer] = 3;
        vecino(img, array, vecinoDer);
        dibujaCelda(img, array, vecinoDer);
    }
    
    //vecino a la izquierda
    if(array[numero] == array[vecinoIzq]){
        console.log("izquierda");
        array[vecinoIzq] = 3;
        dibujaCelda(img, array, vecinoIzq);
        vecino(img, array, vecinoIzq);
    }

    //vecino abajo
    if(array[numero] == array[vecinoAba]){
        console.log("abajo");
        array[vecinoAba] = 3;
        dibujaCelda(img, array, vecinoAba);
        vecino(img, array, vecinoAba);
    }

    //vecino arriba
    if(array[numero] == array[vecinoArr]){
        console.log("arriba");
        array[vecinoArr] = 3;
        dibujaCelda(img, array, vecinoArr);
        vecino(img, array, vecinoArr);
    }
    
}

function imprimeCelda(array, numero){
    console.log("num=" + (numero) + " color=" + array[(numero)]);
}
