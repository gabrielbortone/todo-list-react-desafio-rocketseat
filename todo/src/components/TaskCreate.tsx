import styles from './TaskCreate.module.scss';
import iconeMais from '../assets/plus.svg';
import { ChangeEvent, useState } from 'react';

interface TaskCreateProps{
    createTodo : (description: string) => void;
}

export default function TaskCreate({createTodo} : TaskCreateProps){
    const [description, setDescription] = useState('');
    const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(true);

    function changeDescription(event : ChangeEvent<HTMLInputElement>){
        event.preventDefault();

        setDescription(event.target.value);

        if(description.length === 0){
            setIsDescriptionEmpty(true);
        }
        else{
            setIsDescriptionEmpty(false);
        }
    }

    function handleCreateTask(event: React.MouseEvent<HTMLElement>){
        event.preventDefault();
        
        if(description.length === 0){
            setIsDescriptionEmpty(true);
        }
        else{
            createTodo(description);
            setDescription('');
            setIsDescriptionEmpty(true);
        }
    }

    return (
        <div className={styles.container}>
            <input className={styles.mainInput} placeholder="Adicione uma nova tarefa" 
                   value={description} onChange={changeDescription}>
            </input>
            <button className={styles.botaoAdicionar} onClick={handleCreateTask} disabled={isDescriptionEmpty}>
                <span>Criar</span>
                <span><img src={iconeMais}/></span>
            </button>
        </div>
    ); 
}