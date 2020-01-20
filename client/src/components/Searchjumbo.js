import React from 'react';
import Searchform from './Searchform';

const Searchjumbo = () => {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">React Google Books Search</h1>
                    <p>Search a book of interest to view and save.</p>
                    <Searchform />
                </div>
            </div>
        </div>
    )
}
export default Searchjumbo;