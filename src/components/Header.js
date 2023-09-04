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
        <header className="py-3 header-container mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='myName'>Alec Taylor</h1>
                    </div>
                    <div className="col align-self-center">
                        <nav className="d-flex justify-content-around">
                            <Link to='/' className="nav-link navtitle text">HOME</Link>
                            <Link to='/about' className="nav-link navtitle text">ABOUT</Link>
                            <Link to='/projects' className="nav-link navtitle text">PROJECTS</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;