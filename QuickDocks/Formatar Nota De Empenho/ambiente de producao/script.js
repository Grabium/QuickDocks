let numNE;
let ano;
let resultado;
let lena;

function processar(){ 
  tratou = trataForm();

  if (tratou){
    formatou = formata();
  }
  
  if (formatou){
    copia();
  }
}

function trataForm(){
  event.preventDefault();
  this.numNE = trataCount(this.numNE, "numNE");
  this.ano = trataCount(this.ano, "ano");
  return true;
}


function trataCount(a, b){
  a = document.getElementById(b).value;
  console.log("trataCount: "+b+" = "+a+" .");
  

  switch(b) {
  case "numNE" :
    this.lena = a.length;
    if((this.lena > 6)||(this.lena < 1)){
      window.alert("A variável: "+b+" = "+a+" , deveria ter ENTRE 1 e 6 dígitos.");
      reiniciarPagina();
      break;
    }else{
      return trataIndividual(a, b);
      break;
    }
    break; 

  case "ano" :
    if(a.length != 2){
      window.alert("A variável: "+b+" = "+a+" , deveria ter EXATAMENTE 2 dígitos.");
      reiniciarPagina();
      break;
    }else{
      return trataIndividual(a, b);
      break;
    }
    break;
  }
}

function trataIndividual(a, b){
  console.log("trataIndividual : "+b+" = "+a+" .");
  
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(a)){
    console.log("Referência a "+b+" = "+a+", permanece atribuída com sucesso!");
    return a;
  }else{
    window.alert("A variável: "+b+" = "+a+", não possui um valor válido.");
    reiniciarPagina();
  }
}

function formata(){
  setNumNE(); 
  setAno();
  return setLabel();
}

function setNumNE(){
  let zeros = (6 - this.lena);
  for(i = 1; i <= zeros; i++){
    this.numNE = "0" + this.numNE;
  }
}

function setAno(){
  this.ano = "20" + this.ano;
}

function setLabel(){
  if ((this.ano != undefined) && (this.numNE != undefined)){
    this.resultado = this.ano + "NE" + this.numNE;
    document.getElementById("res").innerHTML = this.resultado;
    return true;
  }
  
}

function copia(){
  navigator.clipboard.writeText(this.resultado)
  .then(() => console.log("NE de n° :" + this.resultado + " copiada com sucesso!"))
  .catch(err => console.error("Falha ao copiar o texto:", err));
}

function reiniciarPagina(){
  location.reload();
}
