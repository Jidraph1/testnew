'use strict';


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

 
};



const newMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(newMenu)

for (const [oneItem, nameOfItem] of newMenu.entries())
console.log(oneItem, nameOfItem)

console.log(restaurant.order(2, 0))
const [start, mainFood] = restaurant.order(2,0)
console.log(start, mainFood)

//Optional Chaining





// let [main, secondary] = restaurant.starterMenu;
// console.log(main, secondary)

// [main, secondary] = [secondary, main]
// console.log(main, secondary)

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];

const [firstBook, secondBook] = books
console.log(firstBook, secondBook)

const [ , ,thirdBook] = books

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings] = ratingStars




const guests1 = restaurant.guest || 10;
console.log(guests1)

const guest2 = restaurant.guest2 || 23
console.log(guest2)



const rest1 = {
  name: "Rossi Capri",
  numGuest: 20
}

const rest2 = {
  name: "La piaza",
  owner: "Giovanni"
}


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [team, odds] of Object.entries(game.odds)){
  const teamStr = 
  console.log(`Odd of ... ${odds}`)
}

const [players1, players2] = game.players
console.log(players1, players2)

const [gk, ...players] = players1
console.log(gk, players)

const allPlayers = [...players1, ...players2]
console.log(allPlayers)

const players1final = ["Thiago", "Coutinho", "Persitec", ...players1]
console.log(players1final)

const {team1, x:draw, team2} = game.odds
console.log(team1, draw, team2)


for (const [i, player] of game.scored.entries()){
  console.log(`Goal ${i + 1}: ${player}`)
}


const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const properties = Object.keys(openingHours)
console.log(properties)

const values = Object.values(openingHours)
console.log(values)

const keyPair = Object.entries(openingHours)
console.log(keyPair)

for (const [key, {open, close}] of keyPair) {
  console.log(`On ${key}, we open on ${open}, and close at ${close}`)
}




const rest  = new Map()
rest.set('name', "Solo Grano")
rest.set('location', 'gigiri lane')
.set('workers', 1)
.set(true, 'we are open')
.set(false, 'we are closed')
.set("cindy", "bootiful")

console.log(rest.get("cindy"))
console.log(rest.values())


const question = new Map([
  ['question', 'Who has a bigger bunda'],
  [1, 'Fauzia'],
  [2, 'Rita'],
  [3, 'Rina'],
  ['correct', 1],
  [true, 'Correct💯'],
  [false, 'Try again dummy']
])

console.log(question)
console.log(question.get('question'))
for( const [number, value] of question){
  if(typeof number === 'number')
   console.log(`Answer ${number}: ${value}`)
}

// const ans = Number(prompt('Who are you hitting?'))

// console.log(question.get(question.get('correct') === ans))




const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


console.log(gameEvents.values())
const events = new Set(gameEvents.values())
console.log(events.size)

gameEvents.delete(64)
console.log(gameEvents)

// 3
console.log(`An event happened, on average, every ${gameEvents.size} minutes`)

const passenger = 'jIdraPh'

const passengerLower = passenger.toLowerCase()
console.log(passengerLower)

const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)

const maskCreditCard = function(number){
  const str = number + ""
  const last = str.slice(-4)
  return last.padStart(str.length, '*')
}

console.log(maskCreditCard(148348937481902))



// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value
  const rows = text.split('\n')
  console.log(text)
})


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+_'))
const getCodeUppercase = str => str.slice(0,3).toUpperCase()

for(const flight of flights.split('+')){
  const [type, from, to, time] = flight.split(';')
  const output = (`${type.startsWith('_Delayed') ? "⛔" : "" }${type.replaceAll('_', " ")} ${getCodeUppercase(from)} ${getCodeUppercase(to)} (${time.replace(':', 'h')})`.padStart(46))
  console.log(output)

}

