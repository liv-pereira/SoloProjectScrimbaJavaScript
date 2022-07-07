const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let senha1 = []
let senha2 = []
const passwordOne = document.getElementById('senha1');
const passwordTwo = document.getElementById('senha2');
const tamanhoSenha = document.getElementById("display");


function getRandamCharacters(){
 
  let randomPassword1 = Math.floor(Math.random()*characters.length)
  let passaword1 = (characters[randomPassword1])
  return passaword1
  // passwordOne.textContent=passaword1
}
function startPassword(){

  for (i=0; i<tamanhoSenha.value;i++){
    senha1 += getRandamCharacters()
  }
  
  for (i=0; i<tamanhoSenha.value;i++){
    senha2 += getRandamCharacters()
  
  }
  getPassword()
 
}
function getPassword(){

   passwordOne.textContent = senha1
   senha1=" "
   passwordTwo.textContent = senha2
   senha2=" "

}


 

