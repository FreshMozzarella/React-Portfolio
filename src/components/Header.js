import { Link } from 'react-router-dom'
function Header(props) {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        borderBottom: ".2rem solid black",
        padding: ".5rem",
        width: "90%",
        margin: "auto",
    };
    return (
        <header>
            <h1 className='myName'>Alec Taylor</h1>
            <nav style={navStyle}>
                <Link to='/'>
                    <div className='navtitle'>HOME</div>
                </Link>
                <Link to='/about'>
                    <div className='navtitle'>ABOUT</div>
                </Link>
                <Link to='/projects'>
                    <div className='navtitle'>PROJECTS</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;