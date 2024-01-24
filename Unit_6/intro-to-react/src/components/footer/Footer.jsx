function Footer() {
    const Year = new Date().getFullYear();
    return (
        <header>
            <p style= {{fontSize: "100px"}}>&#9731;</p>
            <h6> Copyright {Year} &copy;</h6>
        </header>
    )
}

export default Footer;