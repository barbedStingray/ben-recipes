
import FoodItem from '../FoodItem/FoodItem.jsx';

function RecipeDisplay(props) {

    return (
        <div id="recipe-display">
        {props.cookBook.map((food) => (
            <FoodItem 
                key={food.id}
                food={food}    
            />
        
      ))
      }
        </div>
    )
}

export default RecipeDisplay;
