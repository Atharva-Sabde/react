import ContactManagerComp from './ContactReactManager/ContactManagerComp'
import ContactDetails from "./ContactReactManager/ContactDetails"


function App(){
    return(
        <div>

        <ContactManagerComp data={ContactDetails}> </ContactManagerComp>
        </div>
    )  

}

export default App;


