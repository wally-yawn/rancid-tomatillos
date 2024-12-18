// Mock data to use for testing:
import posters from '../fixtures/movie_posters.json'
// import details from '../fixtures/movie_details.json' (you will need to add your own mock data to this file!)

describe('Main Page', () => {
  it('displays title on page load', () => {
    // hint: you'll want to add an intercept here if you are making a network request on page load!
    cy.visit('http://localhost:3000/')
    .get('h1').contains('rancid tomatillos')
    .get('.home-button').should('not.exist')
    .get('.movie-container').find('.movie_card').should('have.lengthOf', 4)
    .get('.movie-container > :nth-child(1)').find('.poster').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg')
    .get('.movie-container > :nth-child(1)').find('.poster').should('have.attr', 'alt', 'The Dark Knight')
    .get('.movie-container > :nth-child(1)').find('.votes').contains('32544')
    .get('.movie-container > :nth-child(4)').find('.poster').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg')
    .get('.movie-container > :nth-child(4)').find('.poster').should('have.attr', 'alt', 'Pulp Fiction')
    .get('.movie-container > :nth-child(4)').find('.votes').contains('27642')
  })
})