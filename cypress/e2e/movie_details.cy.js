import details from '../fixtures/movie_details.json'

describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/389',{
      fixture: 'movie_details'
    })
  })

  it('displays movie details after clicking movie poster on main page', () => {
    cy.get('.movie-container > :nth-child(1)').find('.poster').click()
    //check the url
    .get('h2').contains('The Dark Knight')
    .get('.movie-backdrop').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//nMKdUUepR0i5zn0y1T4CsSB5chy.jpg')
    .get('.movie-backdrop').should('have.attr', 'alt', 'The Dark Knight')
    .get('.genres').find('.genre-title').should('have.lengthOf',4)
    .get('.overview').contains('Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.')
    .get('.home-button').should('have.attr', 'aria-label', 'home')
    .get('.home-button-img').should('have.attr', 'src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAy9JREFUeF7tnFFygzAMRPHNerM2N+vNaOgkMw0FNpLXSBqWn3xgC/s9SRDSaZt0hBJooVfXxScJCE4CCZCAYALBl1cFSEAwgeDLqwIkIJhA8OVVARIQTCD48qoACfATmOf5a5ndWvv9rHiUrIB5nj+mafqcpmn5XI7vu4dba235LHWUE/DI+gX+1rFIKFUNpQQA+E8hpSSUELDRclCbKdOS0gt4M+v3hKSvhtQCOuGXaEkpBThaTtmWlE4AKevLtKRUAgbDT9mSUgjoaDm3B9W97wV7lZDmKSlcgDPrXwD2CIz+4hYqwAl/99GSHQ/d2RnnQwSMzFinhLCWdLqAMwCNFMzI+r8xThXghO/+Nnv29TxyThEQmZFOCae1pOECMgCITABUFUMFOOG7Ww7abLb1LOsdIiBzxjklDGtJdAHZNrhVFZkShCrACX9Yy6nQkigCMmUUgr4+70waWkvqFhC9ASvwbC2JIWA2QghrOWidnmRq97d5KO7R+a7JS+D5vmrDAtLCf+7BKqGKAFrPNMh2D7Xc0yoISJ/1e6beqYb0AnoX6E5j0kTUYnv3N/we0LtAEkd3GAlwo+NMlAAOR3cUCXCj40yUAA5HdxQJcKPjTJQADkd3FAlwo+NMlAAOR3cUCXCj40yUAA5Hd5TLCUAbdpN8TLS+GkHrscZbrz/duyC0YQlYEUDArBmC4kmABLwQsCaYWpDxN1xUkRJg7ElWYBJgBIyGSwAghDIOAUbnJaBTAAKIBKL56+Wx45W/CSOAbGDseBKgp6DjHtSbcb3z1YLAnzqqBQV/E5YACbj2qwhVgCpAFXD0HKWnoBUd1DLYj30SIAHoddRrCzON3hicLeOyrQfxLfebMGppEqAWhJJeLchCiF1Rp78NtWz2nbG9Leida1jGoPWgWMPvAWgB1vNowyhjrddD49F64Hw0AJ3PtuFs60H8VAGIEDivCjC+m+rk/W+6BEiA6Z91dCcgyjjdA7oRHweQgMGArxa++ynoasDY+5UANlFjPAkwAmMPlwA2UWM8CTACYw+XADZRYzwJMAJjD5cANlFjPAkwAmMPlwA2UWM8CTACYw//AeiY63/fld7IAAAAAElFTkSuQmCC')
  })

  it('displays the home page when clicking the home button', () => {
    cy.get('.movie-container > :nth-child(1)').find('.poster').click()
    .get('.home-button').click()
    //check url
    .get('.movie-container').find('.movie_card').should('have.lengthOf', 4)
  })

  // it('displays an error if the movie id is not found', () => {
  //   cy.visit('http://localhost:3000/123456789')
  //   cy.intercept('GET', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/123456789',{
  //     fixture: 'movie_details_error'
  //   })
  //   cy.get('.error').contains('Oh no! Something went wrong!')
  // })
})