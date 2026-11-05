function greetDevelopers(list) {
  for (developer of list) {
    developer.greeting = `Hi ${[developer.firstName]}, what do you like the most about ${developer.language}?`;
  }
  return list;
}

const list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Europe",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Europe",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Europe",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];

console.log(greetDevelopers(list1));
