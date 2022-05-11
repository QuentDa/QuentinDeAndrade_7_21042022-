import Search from './Search.js'

//Ouvrir les filtres///////////////////////////////////////////////////////
const ingredientFilter = document.querySelector('.ingredients')
ingredientFilter.addEventListener('click', () => {
    document.querySelector('.ingredients-drawer').classList.toggle('show')
})

const appareilsFilter = document.querySelector('.appareils')
appareilsFilter.addEventListener('click', () => {
    document.querySelector('.appareils-drawer').classList.toggle('show')
})

const ustensilesFilters = document.querySelector('.ustensiles')
ustensilesFilters.addEventListener('click', () => {
    document.querySelector('.ustensiles-drawer').classList.toggle('show')
})
//////////////////////////////////////////////////////////////////////////

const search = new Search()
const searchInputlabel = document.getElementById('search')

searchInputlabel.addEventListener('keyup', () => {
    search.searchInput = searchInputlabel.value
    search.process()
})