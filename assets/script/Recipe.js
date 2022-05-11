export default class Recipe {
    constructor(id, name, servings, ingredients, time, description, appliance, ustensils ) {
        this.id = id;
        this.name = name;
        this.servings = servings;
        this.ingredients = [];
        ingredients.forEach(ingredient => {
            ingredient.ingredient = ingredient.ingredient.toLowerCase()
            this.ingredients.push(ingredient)
        })
        this.time = time;
        this.description = description;
        this.appliance = appliance;
        this.ustensils = ustensils;
    }

    hasName(input) {
        return this.name.toLowerCase().includes(input.toLowerCase())
    }
    hasDescription(input) {
        return this.description.toLowerCase().includes(input.toLowerCase())
    }
    hasIngredients(input) {
        return this.ingredients.includes(input.toLowerCase())
    }

    containsIngredients(ingredients) {
        let result = 0
        ingredients.forEach(tag => {
            this.ingredients.forEach(ingredient => {
                if (ingredient.ingredient.includes(tag.toLowerCase())) {
                    result++
                }
            })
        })

        return result == ingredients.size
    }
    containsAppareils(appareils) {
        let result = 0
        appareils.forEach(tag => {
                if (appareil.includes(tag.toLowerCase())) {
                    result++
                }
        })

        return result == appareils.size
    }
    containsUstensiles(ustensiles) {
        let result = 0
        ingredients.forEach(tag => {
            this.ingredients.forEach(ingredient => {
                if (ingredient.ingredient.includes(tag.toLowerCase())) {
                    result++
                }
            })
        })

        return result == ingredients.size
    }

    getCardDom() {
        let newCard = `
        <div class="card">
            <div class="card-bottom">
                <div class="card-header">
                    <h2>${this.name}</h2>
                    <span><i class="fa-regular fa-clock"></i>${this.time}min</span>
                </div>

                <div class="card-body">
                    <ul>`
                        
        this.ingredients.forEach(ingredient => {
            newCard += `<li> ${ingredient.ingredient} : ${'quantity' in ingredient ?ingredient.quantity : 'Tu peux y aller t\'inquiète'} ${'unit' in ingredient ? ingredient.unit : ' '} </li>`
        });
                        
        newCard +=`</ul>
                    
                    <p>${this.description}}</p>
                </div>
            </div>
        </div>
    `

    return newCard
    }

}