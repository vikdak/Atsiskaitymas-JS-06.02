/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
// ------------------------------------------------------------------------------------------------------ */
// class Movie {
//     constructor(title, director, budget) {
//       this.title = title;
//       this.director = director;
//       this.budget = budget;
//     }
//     wasExpensive() {
//       console.log(this.budget > 100000000);
//     }
//   };
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    return this.budget > 100000000;
  }
}

let movie = new Movie("Pavadinimas", "Rezisierius", 1000);

console.log(movie.wasExpensive());
