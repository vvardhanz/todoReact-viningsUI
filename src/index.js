import React  from  'react';
import ReactDOM from  'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAsccVJ_MEhkjohdaUdOIhzlAlFUzxj4k8';
//Create a componenet. this componenet will produce some html.
const App = () =>
  {
    return (<div>
              <SearchBar />
             </div>
          );
  }

//THis will take component's generated HTML  and put it ont he page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
