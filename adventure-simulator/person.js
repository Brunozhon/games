var person = {calories: 300, money: 100, popularity: "Not known", howpopular: 0, moneypersec: 2, guidetobeingpop: false, foundWorldMap: false, inventory: []}; function checkPopular() {if (person.howpopular == 0) {person.popularity = "Not known"; person.moneypersec = 2;} else if (person.howpopular <= 10) {person.popularity = "Only a few people know you"; person.moneypersec = 2 + person.howpopular;} else if (person.howpopular <= 100) {person.popularity = "Popular"; person.moneypersec = 10 + person.howpopular;} else {person.popularity = "The most popular person in the world"; person.moneypersec = 50 + person.howpopular;}} function sandwich() {buy(15, "sandwich", 150);} function cake() {buy(10000, "cake", 5000)} function buy(cost, prod, cals) {if (person.money >= cost) {person.money = person.money - cost; person.calories = person.calories + cals;} else { alert("You don't have enough money to buy the " + prod + ".");}}
