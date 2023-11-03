

function FoodDescription(props) {

    return (
        <div id="food-description">
            <p>{props.foodDescription}</p>
            <button>Edit Description</button>
        </div>
    )
}

export default FoodDescription;