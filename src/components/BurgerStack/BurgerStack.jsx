import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) =>
{
    function RemoveIngrediant(ingredient)
    {
        const copyStack = [...props.stack];
        copyStack.splice(props.stack.indexOf(ingredient), 1);
        props.setStack(copyStack);
    }

    return <ul>
        {
            props.stack.length == 0 ? <p>No Ingredients</p> : props.stack.map((i, index) =>
            {
                return <li key={index} style={{background: i.color}}>
                    <Ingredient ingredient={i} RemoveIngrediant={RemoveIngrediant} inStack={true} />
                </li>
                
                
            })
        }
    </ul>;
};

export default BurgerStack;