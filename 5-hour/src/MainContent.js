import TodoItem from "./TodoItem";
import ContactCard from "./contactCard";

function MainContent() {

    let firstName = "Bob";
    let lasteName = "Burgers"; 
    // the backtics below lets you added spaces naturally in a temperal string
    return(
        <div>
            <h2>My main content section, is brought to you by {` ${firstName} ${lasteName} `}  </h2>
            {/* {Now can add multiple instances of todoItem} */}
            <TodoItem />
            <TodoItem />
            <TodoItem />
            {/* Below we are going to use prop to pass data 
            we can use whatever name we want for the info*/}
            < ContactCard name="Louise Belcher" phone="333-222-1212" email="thaahha@gmail.com" />

        </div>
    );
}

export default MainContent