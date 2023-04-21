import styles from './TodoItem.module.scss';
import circle from '../assets/circle.svg';
import circleCompleted from '../assets/check.svg';
import trash from '../assets/trash.svg';
import ITodo from './Todo';

interface TodoItemProps extends ITodo{
    updateTodoItem : (id: number) => void;
    deleteTodo: (id: number) => void;
}


export default function TodoItem({id, description, isCompleted, updateTodoItem, deleteTodo}: TodoItemProps){

    function handleDeleteTodoItem(event: React.MouseEvent<HTMLElement>){
        event.preventDefault();
        deleteTodo(id);
    }

    function handleUpdateTodoItem(event: React.MouseEvent<HTMLElement>){
        event.preventDefault();
        updateTodoItem(id);
    }
    
    
    return (
        <div className={styles.todoItemContainer}>
            <button className={styles.btnManipulacao} onClick={handleUpdateTodoItem}>
                <img src={isCompleted ? circleCompleted : circle} className={styles.imgManiputalacao}/>
            </button>
            <div className={styles.textoContainer}>
                <p className={isCompleted ? styles.textoIsCompleted : ''}>{description}</p>
            </div>
            <button className={styles.btnManipulacao} onClick={handleDeleteTodoItem}><img src={trash}/></button>
        </div>
    )
}