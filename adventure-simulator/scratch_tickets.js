function rollTicket() {
  if (person.money <= 10) {
    person.money = person.money - 10;
    
  } else {
    output("You don't have enough money to get a scratch ticket and use it.")
  }
}
