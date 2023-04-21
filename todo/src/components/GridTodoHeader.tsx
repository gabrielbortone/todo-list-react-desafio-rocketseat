
import styles from './GridTodoHeader.module.scss';

interface GridTodoHeaderProps{
    createdTask : number;
    finishedTask : number;
}

export default function GridTodoHeader({createdTask, finishedTask} : GridTodoHeaderProps){

    return (
        <header className={styles.header}>
            <div className={styles.tarefa}>
                <p>Tarefas criadas</p>
                <span className={styles.contador}>{createdTask}</span>
            </div>
            <div className={styles.concluidas}>
                <p>Concluídas</p>
                <span className={styles.contador}>{finishedTask}{' de '}{createdTask}</span>
            </div>
        </header>
    );
}