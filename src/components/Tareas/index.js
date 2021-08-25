import React, { useEffect, useState } from 'react'
import styles from './Tareas.module.css'
import {FaTasks, FaPlus, FaTrashAlt} from "react-icons/fa"

const getLocalItems=()=>{
    let list=localStorage.getItem("lists")

    if(list){
        return JSON.parse(localStorage.getItem("lists"))
    } else {
        return [];
    }
}

const Tareas = () => {
    const [inputData, setInputData]=useState("")
    const [items, setItems]=useState(getLocalItems())

    const addItem=()=>{
        if(!inputData){
            console.log("Ingresa una tarea")
        } else {
            setItems([...items, inputData])
            setInputData("")
        }
    }

    const removeItem=(id)=>{
        const updatedItems=items.filter((item, index)=>{
            return index !== id
        })
        setItems(updatedItems)
    }

    const removeAll=()=>{
        setItems([])
    }

    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(items))
    }, [items])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerToDo}>
                    <i className={styles.todoIcon}><FaTasks /></i>
                    <h2 className={styles.todoH2}>
                        Añade tus tareas
                    </h2>
                    <div className={styles.inputContainer}>
                        <input type="text" value={inputData} onChange={(e)=>setInputData(e.target.value)} autoComplete="off" placeholder="Añadir tarea" />
                        <i className={styles.todoPlusIcon} title="Añadir tarea" onClick={addItem}><FaPlus /></i>
                    </div>

                    <div className={styles.showItems}>
                        {
                            items.map((item, index)=>{
                                return (
                                    <div className={styles.items} key={index}>
                                        <h3>{item}</h3>
                                        <i className={styles.todoTrashIcon} onClick={()=> removeItem(index)} title="Borrar tarea"><FaTrashAlt /></i>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Borrar todas las tareas */}
                    <div className={styles.showItem}>
                        <button className={styles.btnTodo} data-sm-link-text="Remove All" onClick={removeAll}>Check List</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tareas
