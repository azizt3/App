
function getComputerChoice() {
  options = ['rock','paper','scissors']
  let randomNumber = Math.floor(Math.random()*3);
  choice = options[randomNumber];
  return choice;
} 


export default getComputerChoice