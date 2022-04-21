export default class Recipe {
    constructor(id, name, servings, ingredients, time, description, appliance, ustensils ) {
        this.id = id;
        this.name = name;
        this.servings = servings;
        this.ingredients = ingredients;
        this.time = time;
        this.description = description;
        this.appliance = appliance;
        this.ustensils = ustensils;
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