const BurgerStack = (props) =>
{
    function removeIngrediant(ingredient)
    {
        const copyStack = [...props.stack];
        copyStack.splice(props.stack.indexOf(ingredient), 1);
        props.setStack(copyStack);
    }

    return <ul>
        {
            props.stack.map((i, index) =>
            {
                return <li key={index} style={{background: i.color}}>
                    { i.name }
                    <button onClick={() => removeIngrediant(i)}>X</button>
                </li>
            })
        }
    </ul>;
};

export default BurgerStack;