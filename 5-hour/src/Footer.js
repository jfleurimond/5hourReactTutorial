function Footer(){

    //going to show to use inline styles, they typically need two {} surounding it
    //rememeber css usually has font: {}, so we wrap that around another {}

    const styles = {
        color: "red"
    };
    return(
        <h3 style={styles}>My Footer section using inline styling</h3>
    );

}

export default Footer