import { recipes } from './recipes.js'
import Recipe from './Recipe.js'



//Ouvrir les filtres///////////////////////////////////////////////////////
const ingredientFilter = document.querySelector('.ingredients')
ingredientFilter.addEventListener('click', () => {
    document.querySelector('.ingredients-drawer').classList.toggle('show')
})
//////////////////////////////////////////////////////////////////////////

const DOM = document.querySelector('.card-wrapper')
const listedIngredients = new Set()
//Stockage de TOUT les filtres
const allIngredients = new Set()
const allAppareils = new Set()
const allUstensiles = new Set()
//permet de vérifier si tout les ingrédients sont chargés ou non
let loaded = false

//SEARCH
const search = document.getElementById('search')

search.addEventListener('keyup', () => {
    DOM.innerHTML = ' '
    document.getElementById('ingredients-filters').innerHTML = ' '
    listedIngredients.clear()

    if (search.value.length >= 3) {
        recipes.forEach(recipe => {
            if (recipe.name.toLowerCase().includes(search.value.toLowerCase()) || recipe.description.toLowerCase().includes(search.value.toLowerCase()) || recipe.ingredients.includes(search.value.toLowerCase())) {
                const recipeObject = new Recipe(recipe.id, recipe.name, recipe.servings, recipe.ingredients, recipe.time, recipe.description, recipe.appliance, recipe.ustensils)
        
                DOM.innerHTML = DOM.innerHTML + recipeObject.getCardDom()
                           
                recipe.ingredients.forEach(ingredient => {
                    if (!loaded) {
                        allIngredients.add(ingredient.ingredient)
                        loaded = true
                    }
                    listedIngredients.add(ingredient.ingredient)
                })
            }
        })
    }
    
    listedIngredients.forEach(ingredient => {
        const elementLi = document.createElement('li')
        document.getElementById('ingredients-filters').appendChild(elementLi)
        elementLi.innerHTML += ingredient
    })
})

console.log(listedIngredients)




