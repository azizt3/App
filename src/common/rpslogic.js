

const utils = {

  var: weapons = ['rock', 'paper', 'scissors'],
  var: randomNumber = Math.floor(Math.random()*3),
  computerChoice: () => weapons[randomNumber]

}

export default utils