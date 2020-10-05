function start(){
  var mybody = document.getElementsByTagName("body")[0];

 
  var alto = 5;
  var largo = 10;
  var array = [largo, alto];


  mytable = document.createElement("table");
  mytablebody = document.createElement("tbody");

  for(var j=0; j<alto; j++){
    mycurrent_row = document.createElement("tr");
    for(var i=0; i<largo; i++){
      numero = Math.floor(Math.random() * 3);
      mycurrent_cell = document.createElement("td");
      mycurrent_cell.className = "cuadrado";
      var img = document.createElement("img");

      array[i, j] = numero;

      getClick(numero, array, img, i, j);
      

      if(numero == 0){img.src = "rojo.png";}
      if(numero == 1){img.src = "azul.png";}
      if(numero == 2){img.src = "amarillo.png";}

      mycurrent_cell.appendChild(img);
      mycurrent_row.appendChild(mycurrent_cell);
    }
    mytablebody.appendChild(mycurrent_row);
  }
  for(var j=0; j<alto; j++){
    for(var i=0; i<largo; i++){
      console.log(array[i, j]);
    }

  }
  
  mytable.appendChild(mytablebody);
  mybody.appendChild(mytable);
  mytable.setAttribute("border", "2");  
}

function getClick(numero, array, img, i, j, vecinoder){
  var vecino = [5, 10];
  mycurrent_cell.addEventListener("click", function(){ 
    if(numero == 0){
      img.src = "negro.png";
    }
    if(numero == 1){
      img.src = "negro.png";
    }
    if(numero == 2){
      img.src = "negro.png";
    }
    //console.log("i:"+i + " j:" + j + ", " + array);
    //console.log(vecinoder);
  });
}
