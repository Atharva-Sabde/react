import ContactManagerComp from './ContactReactManager/ContactManagerComp'
import ContactDetails from "./ContactReactManager/ContactDetails"


import TodoList from './ToDoList/TodoList';
import data from './ToDoList/ToDoDB'

function App(){
    
    return(
        <div>

        {/* <ContactManagerComp data={ContactDetails}> </ContactManagerComp> */}
        <TodoList data={data}></TodoList>
        </div>
    )  

}

export default App;


