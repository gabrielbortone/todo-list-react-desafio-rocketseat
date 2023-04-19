import styles from './GridTodoContent.module.scss';
import TodoEmpty from './TodoEmpty';
import TodoItem from './TodoItem';

export default function GridTodoContent(){
    return (
        <main className={styles.container}>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>

        </main>
    );
}