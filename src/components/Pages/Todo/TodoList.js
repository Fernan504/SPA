import { MdDone, MdDelete} from 'react-icons/md';

function TodoListItem({descripcion, id, completed, doneHandler, deleteHandler}){
    const onClick = (e)=>{
        doneHandler(id);
      }
      const onDeleteClick = (e)=>{
        deleteHandler(id);
      }
    
      const myClass = (completed)?"striked": "";
      return (
        <li className="flex my-6 justify-between border-b-2 border-indigo-400">
            <span className={myClass} className="ml-4">{descripcion}</span>
            <div className="flex">
            <MdDone onClick={onClick} className="hover:bg-green-500 ml-2" size={"2rem"}></MdDone>
            <MdDelete onClick={onDeleteClick} className="hover:bg-red-600 ml-2" size={"2rem"}></MdDelete>
            </div>
        </li>
      );
    
}

function TodoList({todos, doneHandler, deleteHandler}){
    const todoItems = todos.map((o)=>{
      return (
        <TodoListItem
          key={o.doneHandlerid}
          descripcion={o.description}
          id={o.id}
          completed={o.completed}
          doneHandler={doneHandler}
          deleteHandler={deleteHandler}
        />
      )
    });
    return (
      <section className="TodoList">
        <ul>
           
                {todoItems}
          
        </ul>
      </section>
    );
  }

export default TodoList;