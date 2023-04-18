
import styles from './GridTodoHeader.module.scss';

export default function GridTodoHeader(){
    return (
        <header className={styles.header}>
            <div className={styles.tarefa}>
                <p>Tarefas criadas</p>
                <span className={styles.contador}>0</span>
            </div>
            <div className={styles.concluidas}>
                <p>Concluídas</p>
                <span className={styles.contador}>0</span>
            </div>
        </header>
    );
}