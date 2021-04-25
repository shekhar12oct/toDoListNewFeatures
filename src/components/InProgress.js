import {React,useState} from 'react'
import './ViewItem.css';

const InProgress = ({toDoLists,setToDoLists}) => {
    const progressTask=[...toDoLists].filter(todo=>todo.isProgress===true)
    const stylebtn={display:'block'};


    const deleteItem=(id)=>
    {
        const filteredToDoLists2= toDoLists.filter(item=>item.id!==id)
        setToDoLists(filteredToDoLists2);
    }

    const handleCompleteTask=(id)=>
    {
       
        // console.log(toDoLists);
        const newToDoLists=toDoLists.map(item=>item.id===id?
            {
                
                id:item.id,
                text:item.text,
                isComplete:true,
                isPending:false,
                isProgress:false,
                isAbandon:false
            }
            :item
            )
            // console.log(newToDoLists);
            setToDoLists(newToDoLists);
            console.log(toDoLists);
    }

    const handlePendingTask=(id)=>
    {
        const newToDoLists=toDoLists.map(item=>item.id===id?
            {
                id:item.id,
                text:item.text,
                isComplete:false,
                isPending:true,
                isProgress:false,
                isAbandon:false
            }:item
            )
            setToDoLists(newToDoLists);
            console.log(toDoLists);
    }
    const handleAbandonTask=(id)=>
    {
        const newToDoLists=toDoLists.map(item=>item.id===id?
            {
                id:item.id,
                text:item.text,
                isComplete:false,
                isPending:false,
                isProgress:false,
                isAbandon:true
            }:item
            )
            setToDoLists(newToDoLists);
            console.log(toDoLists);
    }


    return (
        <div className="todoapp">
        <div className="view-item">
            {
                progressTask.map(item=>{
                    return (

                    <div className="wrapper-items">
                    <form className="view-form-items" key={item.id}>
                    <p>{item.text}</p>
                    <input type="button"
                    value="Pending"
                    className="input-btn"
                    onClick={()=>handlePendingTask(item.id)}
                    />
                    <input type="button"
                    value="Abandon"
                    className="input-btn"
                    onClick={()=>handleAbandonTask(item.id)}
                    />
                    <input type="button"
                    value="Complete"
                    className="input-btn"
                    onClick={()=>handleCompleteTask(item.id)}
                    />
                    <button  style={stylebtn} onClick={()=>deleteItem(item.id)}>Delete</button>
                    </form>
                    </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default InProgress;