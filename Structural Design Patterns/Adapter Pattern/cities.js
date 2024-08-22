// Our array of cities
const citiesHabitantsInMillions = [
    { city: "London", habitants: 8.9 },
    { city: "Rome", habitants: 2.8 },
    { city: "New york", habitants: 8.8 },
    { city: "Paris", habitants: 2.1 },
];

console.log("Before citiesHabitantsInMillions", citiesHabitantsInMillions);

// The new city we want to add
const BuenosAires = {
    city: "Buenos Aires",
    habitants: 9200000
}

// Our adapter function takes our city and converts the habitants property to the same format all the other cities have
const toMillionsAdapter = city => { city.habitants = parseFloat((city.habitants/1000000).toFixed(1)) }

toMillionsAdapter(BuenosAires)

// We add the new city to the array
citiesHabitantsInMillions.push(BuenosAires)

console.log("updated citiesHabitantsInMillions", citiesHabitantsInMillions);


// And this function returns the largest habitants number
const MostHabitantsInMillions = () => {
    return Math.max(...citiesHabitantsInMillions.map(city => city.habitants))
}

console.log("Most Habitants In Millions:", MostHabitantsInMillions()) // 8.9