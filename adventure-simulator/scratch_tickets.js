function rollTicket() {
  if (person.money <= 10) {
    person.money -= 10;
    num = Math.random(); 
    if (num > 9) {
      output("You didn't earn anything. Better luck next time!")
    } else if (num > 9 && num < 9.0001) {
      output("You got a world map! Congratulations!")
      person.foundWorldMap = true;
    } else if (num > 9.0001 && num < 9.0002 ) {
      output("You can roll another time for free!")
      person.money += 10;
      rollTicket();
    } else if (num > 9.0002 && num < 9.0003) {
      output("You just earned A LOT OF MONEY!")
      person.money += 10000000000000000;
    } else if (num > 9.0003 && num <  9.001) {
      output("You lost 50 dollars. Better luck next time!")
      person.money -= 50;
    } else if (num > 9.001 && num < 9.0011) {
      var f = Math.floor(Math.random() * 10) / 1;
      var ft = Math.floor(Math.random() * 10) / 2;
      var ftg = Math.floor(Math.random() * 10) / 5;
      var v = f + ft + ftg;
      var d = f + ftg / 2;
      output("You got $" + v + " from your ticket minus $" + d + ". Congratulations!");
      person.money += v - d;
    } else if (num > 9.0011 && num < 9.0015) {
      output('You earned $1. It might be sad, but as my mom says, "A little money is still money." She also says, "If you stash up money, you\'ll get more money."')
      person.money += 1;  
    } else if (num > 9.0015 && num < 9.0016) {
      output("You got spiked armor. Congratulations! Now you can fight.");
      person.inventory.push("spiked helmet", "spiked chestplate", "spiked pants", "spiked boots", "spiked sword", "spiked bow", "spiked arrow"); 
    } else if (num > 9.0016 && num < 9.0017) {
      output("You got a free money button. Push it every day to get money!")
      person.inventory.push("money button")
    } else if (num > 9.0016 && num < 9.0026) {
      output('You got no money! Your inventory also cleared! But there is always... "better luck next time!"')
      person.money = 0;
      person.inventory = [];
    } else if (num > 9.0027 && num < 9.0100) {
      output("You will be 'pushed out.' Well, you won't have time to press the 'Save' button.")
    } else {
      output("You lost 1000 calories.")
      output("But you won't.")
    }
  } else {
    output("You don't have enough money to get a scratch ticket and use it.")
  }
}
