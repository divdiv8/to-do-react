
export default function Learning(){
    var myname = 'Divya';//const,let can be used to create variables too

    function alertAdded(){
        alert('added item to list');
    }
    return (
        <div>
            <h1>{myname}'s Todo List</h1>
            <label>Task Name:</label><br/>
            <input type ="text" id ="task" /><br/>
            <label>Time:</label><br/>
            <input type = "text" id = "time"/><br/>
            <button onClick={alertAdded} >Add</button>
        </div>
    );
}