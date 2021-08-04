function ContactCard(props){
    // We are going to use this components to learn props
    //we must add the props object to the function's parameter
    return(
    
        <div className="contact-card">  
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>

    );
}

export default ContactCard