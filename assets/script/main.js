import Search from './Search.js'

//Ouvrir les filtres///////////////////////////////////////////////////////
const ingredientFilter = document.querySelector('.ingredients')
window.addEventListener('click', function(e) {
    if (ingredientFilter.contains(e.target)) {
        document.querySelector('.ingredients-drawer').classList.add('show')
    }
    else {
        document.querySelector('.ingredients-drawer').classList.remove('show')
    }
})

const appareilsFilter = document.querySelector('.appareils')
window.addEventListener('click', function(e) {
    if (appareilsFilter.contains(e.target)) {
        document.querySelector('.appareils-drawer').classList.toggle('show')
    }
    else {
        document.querySelector('.appareils-drawer').classList.remove('show')
    }
})

const ustensilesFilters = document.querySelector('.ustensiles')
window.addEventListener('click', function(e) {
    if (ustensilesFilters.contains(e.target)) {
        document.querySelector('.ustensiles-drawer').classList.toggle('show')
    }
    else {
        document.querySelector('.ustensiles-drawer').classList.remove('show')
    }
})
//////////////////////////////////////////////////////////////////////////

const search = new Search()
const searchInputlabel = document.getElementById('search')

searchInputlabel.addEventListener('keyup', () => {
    search.searchInput = searchInputlabel.value
    search.process()
})

window.onload= search.process()