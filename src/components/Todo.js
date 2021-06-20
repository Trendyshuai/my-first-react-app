function Todo(props) {
    function deleteHandler() {
        console.log('Clicked!')
        console.log(props.title)
    }
    return (
        <div className='card'>
            <h2>{props.title}{2 + 2}</h2>
            <div className='actions'>
                <span>...</span>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
};

export default Todo;