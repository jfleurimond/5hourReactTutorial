function ContactCard(props){
    // We are going to use this components to learn props
    //we must add the props object to the function's parameter
    return(
    
        // Below is how we originally passed props
        // <div className="contact-card">  
        //     <h3>{props.name}</h3>
        //     <p>Phone: {props.phone}</p>
        //     <p>Email: {props.email}</p>
        // </div>

        // Below we will pass an object to the props object
        <div className="contact-card">  
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>

    );
}

export default ContactCard