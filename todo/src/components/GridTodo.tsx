import { useState } from "react";
import GridTodoContent from "./GridTodoContent";
import GridTodoHeader from "./GridTodoHeader";
import ITodo from "./Todo";
import TaskCreate from "./TaskCreate";

export default function GridTodo(){
    const [data, setData] = useState<[] | ITodo[]>([]);
    const [createdTaskCount, setCreatedTaskCount] = useState(0);
    const [finishedTaskCount, setFinishedTaskCount] = useState(0);

    function createTodo(description: string){
        const todo : ITodo =  {
            id: data.length + 1,
            description: description,
            isCompleted: false
        }
        setData([...data, todo]);
        setCreatedTaskCount(createdTaskCount + 1);
    }

    function updateNumbersRemoving(todo : ITodo){
        const newNumber = (createdTaskCount - 1) === 0 ? 0 : createdTaskCount - 1;

        setCreatedTaskCount(newNumber);

        if(todo.isCompleted){
            if(finishedTaskCount > 1){
                setFinishedTaskCount(finishedTaskCount - 1);
            }
        }
    }

    function updateNumbersOfCompletedOnes(newData: ITodo[]){
        const numerosCompletados = newData.filter((item)=> {
            if(item.isCompleted === true){
                return item;
            }
        })
    

        setFinishedTaskCount(numerosCompletados.length);
    }

    function updateTodoItem(id: number){

        const itemTobeUpdate = data.find(item => item.id === id);
        const itemIsCompleted = itemTobeUpdate?.isCompleted;

        const newData = data.map(item => {
            if(item.id === id){
                return{
                    id: item.id,
                    description: item.description,
                    isCompleted: !itemIsCompleted
                }
            }
            else{
                return item;
            }
        })

        
        setData(newData);
        updateNumbersOfCompletedOnes(newData);
    }

    function deleteTodo(id: number){
        const todoToRemove = data.find(item=> item.id === id);
        if(todoToRemove){
            updateNumbersRemoving(todoToRemove);
            const newData : ITodo[] = data.filter(item=> item != todoToRemove);
            setData(newData);
            updateNumbersOfCompletedOnes(newData);
        }
        else{
            throw new Error('It is not possible to remove this item!');
        }
    }

    return (
        <section>
            <TaskCreate createTodo= {createTodo}/>
            <GridTodoHeader createdTask={createdTaskCount} finishedTask={finishedTaskCount}/>
            <GridTodoContent data={data} updateTodoItem={updateTodoItem} deleteTodo={deleteTodo}/>
        </section>
    );
}