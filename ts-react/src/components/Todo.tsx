interface TodoType {
    title: string,
    description: string
}
  
  function  Todo(props : TodoType){
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.description}</h4>
        </div>
    )
  }

  export default Todo