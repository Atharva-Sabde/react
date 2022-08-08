import ContactManagerComp from './ContactReactManager/ContactManagerComp'
import ContactDetails from "./ContactReactManager/ContactDetails"


// import TodoList from './ToDoList/TodoList';
// import data from './ToDoList/ToDoDB'

import Ticket from './Assesment-1/TicketMain'
import data from './Assesment-1/db'

function App(){
    
    return(
        <div>

        {/* <ContactManagerComp data={ContactDetails}> </ContactManagerComp> */}
        {/* <TodoList data={data}></TodoList> */}
        <Ticket data={data} > </Ticket>

        </div>
    )  

}

export default App;


