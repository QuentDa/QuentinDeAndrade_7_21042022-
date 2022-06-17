import Search from './Search.js'

//Ouvrir les filtres///////////////////////////////////////////////////////
const ingredientFilter = document.querySelector('.ingredients')
window.addEventListener('click', function(e) {
    if (ingredientFilter.contains(e.target)) {
        document.querySelector('.ingredients-drawer').classList.add('show')

        if (search.listedIngredients.size >= 3) {
            document.querySelector('.ingredients').dataset.buttonMargin = 'margin3'
        }
        else if (search.listedIngredients.size == 2) {
            document.querySelector('.ingredients').dataset.buttonMargin = 'margin2'
        }
        else {
            document.querySelector('.ingredients').dataset.buttonMargin = 'margin1'
        }
    }
    else {
        document.querySelector('.ingredients-drawer').classList.remove('show')
        document.querySelector('.ingredients').dataset.buttonMargin = 'margin0'
    }
})

const appareilsFilter = document.querySelector('.appareils')
window.addEventListener('click', function(e) {
    if (appareilsFilter.contains(e.target)) {
        document.querySelector('.appareils-drawer').classList.add('show')

        if (search.listedAppareils.size >= 3) {
            document.querySelector('.appareils').dataset.buttonMargin = 'margin3'
        }
        else if (search.listedAppareils.size == 2) {
            document.querySelector('.appareils').dataset.buttonMargin = 'margin2'
        }
        else {
            document.querySelector('.appareils').dataset.buttonMargin = 'margin1'
        }
    }
    else {
        document.querySelector('.appareils-drawer').classList.remove('show')
        document.querySelector('.appareils').dataset.buttonMargin = 'margin0'
    }
})

const ustensilesFilters = document.querySelector('.ustensiles')
window.addEventListener('click', function(e) {
    if (ustensilesFilters.contains(e.target)) {
        document.querySelector('.ustensiles-drawer').classList.add('show')
        
    }
    else {
        document.querySelector('.ustensiles-drawer').classList.remove('show')
    }
})
//////////////////////////////////////////////////////////////////////////

const search = new Search()
const searchInputlabel = document.getElementById('search')
const ingredientSearchInput = document.getElementById('ingredientSearch')
const appareilSearchInput = document.getElementById('appareilSearch')
const ustensileSearchInput = document.getElementById('ustensileSearch')

searchInputlabel.addEventListener('keyup', () => {
    search.searchInput = searchInputlabel.value
    search.process()
})

//load de toutes les recettes au chargement de la page
search.process()

//FILTRE INGREDIENT
ingredientSearchInput.addEventListener('keyup', () => {
    let listedIngredients = new Set()

    
    document.getElementById('ingredients-filters').innerHTML = ' '

    // console.log (listedIngredients)
    search.allIngredients.forEach(ingredient => {
        // console.log('je rentre dedans')
        if (ingredient.includes(ingredientSearchInput.value)) {

            const elementLi = document.createElement('li')
            listedIngredients.add(ingredient)
            document.getElementById('ingredients-filters').appendChild(elementLi)
            elementLi.innerHTML = ingredient
        }
    })

    
        if (listedIngredients.size >= 3) {
            document.querySelector('.ingredients-drawer').dataset.drawerWidth = 'show3'
            document.querySelector('.ingredients').dataset.buttonMargin = 'margin3'
        }
        else if (listedIngredients.size == 2) {
            document.querySelector('.ingredients-drawer').dataset.drawerWidth = 'show2'
            document.querySelector('.ingredients').dataset.buttonMargin = 'margin2'
        }
        else {
            document.querySelector('.ingredients-drawer').dataset.drawerWidth = 'show1'
            document.querySelector('.ingredients').dataset.buttonMargin = 'margin1'
        }


    search.listedIngredients = listedIngredients
})

//FILTRE APPAREILS
appareilSearchInput.addEventListener('keyup', () => {
    let listedAppareils = new Set()

    
    document.getElementById('appareils-filters').innerHTML = ' '

    search.allAppareils.forEach(appareil => {
        if (appareil.includes(appareilSearchInput.value)) {

            const elementLi = document.createElement('li')
            listedAppareils.add(appareil)
            document.getElementById('appareils-filters').appendChild(elementLi)
            elementLi.innerHTML = appareil
        }
    })

    if (listedAppareils.size >= 3) {
        document.querySelector('.appareils-drawer').dataset.drawerWidth = 'show3'
        document.querySelector('.appareils').dataset.buttonMargin = 'margin3'
    }
    else if (listedAppareils.size == 2) {
        document.querySelector('.appareils-drawer').dataset.drawerWidth = 'show2'
        document.querySelector('.appareils').dataset.buttonMargin = 'margin2'
    }
    else {
        document.querySelector('.appareils-drawer').dataset.drawerWidth = 'show1'
        document.querySelector('.appareils').dataset.buttonMargin = 'margin1'
    }

    search.listedAppareils = listedAppareils
})

//FILTRE USTENSILES
ustensileSearchInput.addEventListener('keyup', () => {
    let listedUstensiles = new Set()

    
    document.getElementById('ustensiles-filters').innerHTML = ' '

    search.allUstensiles.forEach(ustensile => {
        if (ustensile.includes(ustensileSearchInput.value)) {

            const elementLi = document.createElement('li')
            listedUstensiles.add(ustensile)
            document.getElementById('ustensiles-filters').appendChild(elementLi)
            elementLi.innerHTML = ustensile
        }
    })

    if (listedUstensiles.size >= 3) {
        document.querySelector('.ustensiles-drawer').dataset.drawerWidth = 'show3'
        document.querySelector('.ustensiles').dataset.buttonMargin = 'margin3'
    }
    else if (listedUstensiles.size == 2) {
        document.querySelector('.ustensiles-drawer').dataset.drawerWidth = 'show2'
        document.querySelector('.ustensiles').dataset.buttonMargin = 'margin2'
    }
    else {
        document.querySelector('.ustensiles-drawer').dataset.drawerWidth = 'show1'
        document.querySelector('.ustensiles').dataset.buttonMargin = 'margin1'
    }

    search.listedUstensiles = listedUstensiles
})