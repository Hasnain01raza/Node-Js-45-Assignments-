// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


// Set describe_city Fucntion
function describe_city(cityName: string, country: string = 'DefaultCountry') {
    console.log(`${cityName} is in ${country}.`);
  }
  
  // Result
  describe_city('Karachi', 'Pakistan');
  describe_city('Tokyo', 'Japan');
  describe_city('Paris');