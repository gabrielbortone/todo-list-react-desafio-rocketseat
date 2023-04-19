
import styles from './TodoEmpty.module.scss';
import iconePasta from '../assets/Clipboard.svg';

export default function TodoEmpty(){
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={iconePasta}/>
            </div>
            <div>
                <p className={styles.textoNormal}>
                    <strong>Você ainda não tem tarefas cadastradas</strong><br></br>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        </div>
    );
}