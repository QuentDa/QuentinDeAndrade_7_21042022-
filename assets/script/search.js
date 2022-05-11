import { recipes } from './recipes.js'
import Recipe from './Recipe.js'

export default class Search {
    constructor() {
        this.recipes = []
        recipes.forEach(recipe => {
            this.recipes.push(new Recipe(recipe.id, recipe.name, recipe.servings, recipe.ingredients, recipe.time, recipe.description, recipe.appliance, recipe.ustensils))
        }) 
        //valeur de l'input
        this.searchInput = ''
        //ingrédients AFFICHÉS
        this.listedIngredients = new Set()
        this.listedAppareils = new Set()
        this.listedUstensiles = new Set()
        //définition des Sets pour les tags
        this.tagIngredients = new Set()
        this.tagAppareils = new Set()
        this.tagUstensiles = new Set()
        this.DOM = document.querySelector('.card-wrapper')
    }

    process() {
        this.clearDOM()
        this.listedIngredients = new Set()
        this.listedAppareils = new Set()
        this.listedUstensiles = new Set()
        
        let processedRecipes = []

        if (this.searchInput.length >= 3) {
            
            this.recipes.forEach(recipe => {
                if (recipe.hasName(this.searchInput) || recipe.hasDescription(this.searchInput) || recipe.hasIngredients(this.searchInput)) {
                    //on push les recettes qui ont été traitées par le if dans processedRecipes
                    processedRecipes.push(recipe)
                }
            })
        }
        else {
            processedRecipes = this.recipes
        }

        processedRecipes.forEach(recipe => {
            if (recipe.containsIngredients(this.tagIngredients) ) {
                this.DOM.innerHTML = this.DOM.innerHTML + recipe.getCardDom()
                recipe.ingredients.forEach(ingredient => {
                    this.listedIngredients.add(ingredient.ingredient)
                })
                this.listedAppareils.add(recipe.appliance)
                recipe.ustensils.forEach(ustensil => {
                    this.listedUstensiles.add(ustensil)
                })
            }
        })

        this.displayIngredients() //va chercher les ingredients dans listedIngredients et affiche dans le selecteur ul LI
        this.displayAppareils()
        this.displayUstensiles()
    }

    displayIngredients() {     
        this.listedIngredients.forEach(ingredient => {
            const activeFilter = document.querySelector('.active-filters')
            const elementActiveFilter = document.createElement('li')
            const closeFilter = document.createElement('span')
            const elementLi = document.createElement('li')
            document.getElementById('ingredients-filters').appendChild(elementLi)
            elementLi.innerHTML += ingredient

            elementLi.addEventListener('click', () => {
                activeFilter.appendChild(elementActiveFilter)
                elementActiveFilter.classList.add('ingredient-active-filter')
                elementActiveFilter.innerHTML += ingredient
                elementActiveFilter.appendChild(closeFilter)
                closeFilter.classList.add('close')
                closeFilter.innerHTML += '<i class="fa-solid fa-x"></i>'
                this.tagIngredients.add(ingredient)

                this.process()



                closeFilter.addEventListener('click', () => {
                    elementActiveFilter.remove()
                    this.tagIngredients.delete(ingredient)

                    this.process()
                })
            })
        })
    }
    displayAppareils() {
        this.listedAppareils.forEach(appareil => {
            const activeFilter = document.querySelector('.active-filters')
            const elementActiveFilter = document.createElement('li')
            const closeFilter = document.createElement('span')
            const elementLi = document.createElement('li')
            document.getElementById('appareils-filters').appendChild(elementLi)
            elementLi.innerHTML += appareil

            elementLi.addEventListener('click', () => {
                activeFilter.appendChild(elementActiveFilter)
                elementActiveFilter.classList.add('appareil-active-filter')
                elementActiveFilter.innerHTML += appareil
                elementActiveFilter.appendChild(closeFilter)
                closeFilter.classList.add('close')
                closeFilter.innerHTML += '<i class="fa-solid fa-x"></i>'
                this.tagAppareils.add(appareil)

                this.process()



                closeFilter.addEventListener('click', () => {
                    elementActiveFilter.remove()
                    this.tagIngredients.delete(appareil)

                    this.process()
                })
            })
        })
    }
    displayUstensiles() {
        
    }
    //FAIRE POUR USTENSILES ET APPAREILS

    clearDOM() {
        this.DOM.innerHTML = ' '
        document.getElementById('ingredients-filters').innerHTML = ' '
        //la même chose pour APPAREILS ET USTENSILES
        //ustensiles A FAIRE
        //appareils A FAIRE
    }
}

