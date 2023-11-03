
import FoodRecipe from '../FoodRecipe/FoodRecipe.jsx';
import FoodName from '../FoodName/FoodName.jsx';
import FoodDescription from '../FoodDescription/FoodDescription.jsx';

function FoodItem(props) {


    return (
        <div id="food-item">
            
            <p>{props.food.id}</p>

            <FoodName 
                key={props.id}
                foodName={props.food.title}
            />
            
            <FoodDescription 
                key={props.id}
                foodDescription={props.food.description}
            />

            <FoodRecipe 
                key={props.food.id}
                foodRecipe={props.food.recipe}
            />

            <button>Delete Recipe</button>
        </div>
    )
}

export default FoodItem;