import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Import SearchBar React component
import SearchBar from './components/SearchBar'

const App = () => {

    return (
        <div>
            <SearchBar />
        </div>
    )
}
ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

registerServiceWorker();