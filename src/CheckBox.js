import React from "react"

function CheckBox(props){
    return(
    <div className = "todo-item">
        <input type ="checkbox" checked = {props.item.completed} onChange = { () => props.handle(props.item.id)}/>
        <p>{props.item.text}</p>
     </div>
    )
}
export default CheckBox