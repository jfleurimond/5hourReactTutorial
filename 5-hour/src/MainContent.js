function MainContent() {

    let firstName = "Bob";
    let lasteName = "Burgers"; 
    // the backtics below lets you added spaces naturally in a temperal string
    return(
        <div>
            <h2>My main content section, is brought to you by {` ${firstName} ${lasteName} `}  </h2>
            <input type="checkbox" />
            <p>Placeholder Text</p>

            <input type="checkbox" />
            <p>Placeholder Text</p>

            <input type="checkbox" />
            <p>Placeholder Text</p>

        </div>
    );
}

export default MainContent