function Ingredient(props)
{
    return (
        <>
            { props.ingredient.name }
            {props.inStack
            ? 
            <button onClick={() => props.RemoveIngrediant(props.ingredient)}>X</button>
            :
            <button onClick={() => props.AddToStack(props.ingredient)}>+</button>}
        </>
    )
}

export default Ingredient;