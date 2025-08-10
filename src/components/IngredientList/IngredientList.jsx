const IngredientList = (props) =>
{

    function AddToStack(ingredient)
    {
        const copyIngredient = [...props.stack, ingredient];
        props.setStack(copyIngredient);
        console.log(copyIngredient);
    }

    return <ul>
        {
            props.ingredientList.map((i, index) => 
            {
                return <li key={index} style={{background: i.color}}>
                    { i.name }
                    <button onClick={() => AddToStack(i)}>+</button>
                </li>
            })
        }
    </ul>;
};

export default IngredientList;