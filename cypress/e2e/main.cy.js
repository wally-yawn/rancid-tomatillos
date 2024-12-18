// Mock data to use for testing:
import posters from '../fixtures/movie_posters.json'
// import details from '../fixtures/movie_details.json' (you will need to add your own mock data to this file!)

describe('Main Page', () => {
  it('displays title on page load', () => {
    // hint: you'll want to add an intercept here if you are making a network request on page load!
    cy.visit('http://localhost:3000/')
    .get('h1')
    .contains('rancid tomatillos')
    .get('.movie-container').find('.movie_card').should('have.lengthOf', 55)
    .get('.movie-container > :nth-child(1)').find('.poster').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg')
    .get('.movie-container > :nth-child(1)').find('.votes').contains('8511')
  })
})