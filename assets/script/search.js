import { recipes } from './recipes.js'
import Recipe from './Recipe.js'

export default class Search {
    constructor() {
        this.recipes = []
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
        //attribution de TOUT les appareils/ustensiles/ingredients
        this.allIngredients = new Set()
        this.allAppareils = new Set()
        this.allUstensiles = new Set()
        //attribution du DOM
        this.DOM = document.querySelector('.card-wrapper')

        for(const recipe of recipes) {
            this.allAppareils.add(recipe.appliance.toLowerCase())
            for(const ingredient of recipe.ingredients) {
                this.allIngredients.add(ingredient.ingredient.toLowerCase())
            }
            for(const ustensil of recipe.ustensils) {
                this.allUstensiles.add(ustensil.toLowerCase())
            }

            this.recipes.push(new Recipe(recipe.id, recipe.name, recipe.servings, recipe.ingredients, recipe.time, recipe.description, recipe.appliance, recipe.ustensils))
        }

        
    }

    process() {
        this.clearDOM()
        this.listedIngredients = new Set()
        this.listedAppareils = new Set()
        this.listedUstensiles = new Set()
        
        let processedRecipes = []

        if (this.searchInput.length >= 3) {
            
            for(const recipe of this.recipes) {
                if (recipe.hasName(this.searchInput) || recipe.hasDescription(this.searchInput) || recipe.hasIngredients(this.searchInput)) {
                    //on push les recettes qui ont été traitées par le if dans processedRecipes
                    processedRecipes.push(recipe)
                }
            }

            
        }
        else {
            processedRecipes = this.recipes
        }

        processedRecipes.forEach(recipe => {
            if (recipe.containsIngredients(this.tagIngredients) && recipe.containsAppareils(this.tagAppareils) && recipe.containsUstensiles(this.tagUstensiles) ) {
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

        if (this.DOM.textContent == ' ') {
            document.querySelector('.error').innerHTML = 'Aucune recette'
        }

        this.displayFilter(this.listedIngredients, 'ingredients')
        this.displayFilter(this.listedAppareils, 'appareils')
        this.displayFilter(this.listedUstensiles, 'ustensiles')

    }

    //RECHERCHE DANS LES FILTRES
    //affiche dans la liste ul li des filtres par rapport à l'input principal
    displayFilter(filters, type) {
        for(const filter of filters)  {
            const activeFilter = document.querySelector('.active-filters')
            const elementActiveFilter = document.createElement('li')
            const closeFilter = document.createElement('span')
            const elementLi = document.createElement('li')
            document.getElementById(type+'-filters').appendChild(elementLi)
            elementLi.innerHTML += filter
            let tagContainer = null

            switch(type) {
                case 'ingredients':
                    tagContainer = this.tagIngredients
                    break;
                case 'appareils':
                    tagContainer = this.tagAppareils
                    break;
                case 'ustensiles':
                    tagContainer = this.tagUstensiles
                    break;
            }

            elementLi.addEventListener('click', () => {
                activeFilter.appendChild(elementActiveFilter)
                elementActiveFilter.classList.add(type+'-active-filter')
                elementActiveFilter.innerHTML += filter
                elementActiveFilter.appendChild(closeFilter)
                closeFilter.classList.add('close')
                closeFilter.innerHTML += '<i class="fa-solid fa-x"></i>'
                tagContainer.add(filter)         
                

                this.process()

                closeFilter.addEventListener('click', () => {
                    elementActiveFilter.remove()
                    tagContainer.delete(filter)

                    this.process()
                })
            })
        }
    }

    clearDOM() {
        this.DOM.innerHTML = ' '
        document.getElementById('ingredients-filters').innerHTML = ' '
        document.getElementById('appareils-filters').innerHTML = ' '
        document.getElementById('ustensiles-filters').innerHTML = ' '
        document.querySelector('.error').innerHTML = ' '
        //la même chose pour APPAREILS ET USTENSILES
        //ustensiles A FAIRE
        //appareils A FAIRE
    }
}

