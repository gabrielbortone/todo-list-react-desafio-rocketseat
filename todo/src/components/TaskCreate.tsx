import styles from './TaskCreate.module.scss';
import iconeMais from '../assets/plus.svg';


export default function TaskCreate(){

    return (
        <div className={styles.container}>
            <input className={styles.mainInput} placeholder="Adicione uma nova tarefa"></input>
            <button className={styles.botaoAdicionar}>
                <span>Criar</span>
                <span><img src={iconeMais}/></span>
            </button>
        </div>
    ); 
}