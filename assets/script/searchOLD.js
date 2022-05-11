import { recipes } from './recipes.js'
import Recipe from './Recipe.js'





const DOM = document.querySelector('.card-wrapper')
//ingrédients AFFICHÉS quand on clique sur les filtres UNIQUEMENT
const listedIngredients = new Set()
const listedAppareils = new Set()
const listedUstensiles = new Set()
//Stockage de TOUT les filtres - Set enlève les doublons
const allIngredients = new Set()
const allAppareils = new Set()
const allUstensiles = new Set()
//Stockage des filtres affichés dans un tableau
const tagIngredients = new Set()
const tagAppareils = new Set()
const tagUstensiles = new Set()
//permet de vérifier si tout les ingrédients sont chargés ou non
let loaded = false

//Fonction pour vérifier qu'une recette à bien tout les ingrédients
function recipeContainsIngredientTags(recipe) {
    let result = true

    tagIngredients.forEach(tag => {
        if (!recipe.ingredients.includes(tag) ) {
            result = false
        }
    })

    console.log(recipe.name)
    console.log(result)
    return result
}

//SEARCH
const search = document.getElementById('search')

search.addEventListener('keyup', () => {
    


})




