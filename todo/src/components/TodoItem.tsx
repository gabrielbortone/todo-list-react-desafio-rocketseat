import styles from './TodoItem.module.scss';
import circle from '../assets/circle.svg';
import circleCompleted from '../assets/check.svg';
import trash from '../assets/trash.svg';

export default function TodoItem(){
    
    const isCompleted: boolean = false;

    return (
        <div className={styles.todoItemContainer}>
            <img src={isCompleted ? circleCompleted : circle} className={styles.imgManiputalacao}/>
            <div className={styles.textoContainer}>
                <p className={isCompleted ? styles.textoIsCompleted : ''}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            </div>
            <img src={trash}/>
        </div>
    )
}