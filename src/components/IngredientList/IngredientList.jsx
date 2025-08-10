import Ingredient from "../Ingredient/Ingredient";

const IngredientList = (props) =>
{

    function AddToStack(ingredient)
    {
        const copyIngredient = [...props.stack, ingredient];
        props.setStack(copyIngredient);
    }

    return <ul>
        {
            props.ingredientList.map((i, index) => 
            {
                return <li key={index} style={{background: i.color}}>
                    <Ingredient ingredient={i} AddToStack={AddToStack} inStack={false} />
                </li>
            })
        }
    </ul>;
};

export default IngredientList;