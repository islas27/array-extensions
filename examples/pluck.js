require('../aee.js')
cars = [
  {'model': 'Nissan March', 'year': '2014', 'owner': 'John'},
  {'model': 'Toyota Camry', 'year': '2013', 'owner': 'Gabriel'},
  {'model': 'Honda Civic', 'year': '2016'},
  {'model': 'Mitsubishi Lancer', 'year': '2012', 'owner': 'Alex'}
]

console.log(cars.pluck('owner'))
// Output:
// ["John", "Gabriel", null, "Alex"]

cars
  .where(car => car.year > 2015)
  .pluck('year')
  .each(year => console.log(year))
// Output:
// 2016

cars
  .where(car => car.year < 2013)
  .pluck('countryOrigin')
  .each(country => console.log(country || 'Sorry, I do not have that information'))
// Output:
// Sorry, I do not have that information
