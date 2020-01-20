import React from 'react';

const Navbarsaved = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                <a className="navbar-brand" href="/">Google Books Search and Save</a>
                <ul className="nav navbar-nav flex-row float-left">
                    <li className="nav-item"><a className="nav-link pr-4" href="/">Search Books</a></li>
                    <li className="nav-item"><a className="nav-link pr-4 active" href="saved">Saved Books</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbarsaved;