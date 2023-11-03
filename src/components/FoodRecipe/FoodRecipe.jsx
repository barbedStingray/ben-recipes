import { useState } from 'react';

function FoodRecipe(props) {

    const [recipe, setRecipe] = useState([]);


    return (
        <div id="food-recipe">
            <p>{props.foodRecipe}</p>
            <button>Add Recipe Item</button>

        </div>

    )
}

export default FoodRecipe;