function countDevelopers(list) {
  const a = [...list]
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i].country == "Europe"){
      console.log(a[i].country)
      count += 1;
    }
    else {
      console.log(a[i].country);
      count = count
    }
  }
    return count;
}

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Europe', continent: 'Asia', age: 30, language: 'CSS' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Europe', continent: 'Asia', age: 30, language: 'CSS' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Europe', continent: 'Asia', age: 30, language: 'CSS' }
  ];

console.log(countDevelopers(list1))