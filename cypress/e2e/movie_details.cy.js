import details from '../fixtures/movie_details.json'

describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies',{
      fixture: 'movie_posters'
    })
    cy.intercept('GET', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/155',{
      fixture: 'movie_details'
    })
  })

  it('displays movie details after clicking movie poster on main page', () => {
    cy.get('.movie-container > :nth-child(1)').find('.poster').click()
    .location('pathname').should('include','movies/155')
    .get('h2').contains('The Dark Knight')
    .get('.movie-backdrop').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//nMKdUUepR0i5zn0y1T4CsSB5chy.jpg')
    .get('.movie-backdrop').should('have.attr', 'alt', 'The Dark Knight')
    .get('.genres').find('.genre-title').should('have.lengthOf',4)
    .get('.overview').contains('Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.')
    .get('.home-button').should('exist')
  })

  it('displays the home page when clicking the home button', () => {
    cy.get('.movie-container > :nth-child(1)').find('.poster').click()
    .get('.home-button').click()
    .location('pathname').should('not.include','movies/155')
    .get('.movie-container').find('.movie_card').should('have.lengthOf', 4)
  })

  it('displays an error if the movie id is not found', () => {
    cy.intercept('GET', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/123456789', {
      statusCode: 404,
      body: { error: "No movie found with an ID of 123456789. Try again with an existing movie ID." },
    }).as('getMovieDetails');
    
    cy.visit('http://localhost:3000/movies/123456789')
    cy.get('.error-message').contains('Failed to fetch movie details. Status: 404')
  })
})