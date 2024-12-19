describe('Main Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies',{
      fixture: 'movie_posters'
    })
  })
  it('displays title on page load', () => {
    cy.get('h1').contains('rancid tomatillos')
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