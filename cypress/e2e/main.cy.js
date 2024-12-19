describe('Main Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies',{
      fixture: 'movie_posters'
    })
    cy.intercept('PATCH', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/155',{
      statusCode: 200,
      body: { vote_count: 32545 },
    })
    cy.intercept('PATCH', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/680',{
      statusCode: 200,
      body: { vote_count: 27643 },
    })
    cy.intercept('PATCH', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/496243',{
      statusCode: 200,
      body: { vote_count: 18017 },
    })
    cy.intercept('PATCH', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/497',{
      statusCode: 200,
      body: { vote_count: 17209 },
    })
  })

  it("displays each movie's poster, vote count, and voting buttons on page load", () => {
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

  it("can upvote a movie", () => {
    cy.get('.movie-container > :nth-child(1)').find('.upvote').should('have.attr', 'aria-label', 'Upvote')
    .get('.movie-container > :nth-child(1)').find('.votes').contains('32544')
    cy.get('.movie-container > :nth-child(1)').find('.upvote').click()
    .get('.movie-container > :nth-child(1)').find('.votes').contains('32545')
    cy.get('.movie-container > :nth-child(4)').find('.votes').contains('27642')
    cy.get('.movie-container > :nth-child(4)').find('.upvote').click()
    .get('.movie-container > :nth-child(4)').find('.votes').should('contain', '27643')
  })
  
  it("can downvote a movie", () => {
    cy.get('.movie-container > :nth-child(2)').find('.downvote').should('have.attr', 'aria-label', 'Downvote')
    .get('.movie-container > :nth-child(2)').find('.votes').contains('18018')
    cy.get('.movie-container > :nth-child(2)').find('.downvote').click()
    .get('.movie-container > :nth-child(2)').find('.votes').contains('18017')
    cy.get('.movie-container > :nth-child(3)').find('.votes').contains('17210')
    cy.get('.movie-container > :nth-child(3)').find('.downvote').click()
    .get('.movie-container > :nth-child(3)').find('.votes').contains('17209')
  })
})