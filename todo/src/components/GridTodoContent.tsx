import styles from './GridTodoContent.module.scss';
import ITodo from './Todo';
import TodoEmpty from './TodoEmpty';
import TodoItem from './TodoItem';


interface GridTodoContentProps{
    data: ITodo[]
    updateTodoItem : (id: number) => void;
    deleteTodo: (id: number) => void;
}

export default function GridTodoContent({data, updateTodoItem, deleteTodo}: GridTodoContentProps){
    const isEmpty : boolean = data.length === 0; 

    return (
        <main className={styles.container}>
            {
                isEmpty ? <TodoEmpty/> : data.map(todo=> 
                    <TodoItem key={todo.id} id={todo.id} description={todo.description} isCompleted={todo.isCompleted} 
                        updateTodoItem={updateTodoItem} deleteTodo={deleteTodo} />) 
            }
        </main>
    );
}