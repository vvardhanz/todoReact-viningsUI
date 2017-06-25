import React  from  'react';
import ReactDOM from  'react-dom';

//Create a componenet. this componenet will produce some html.
const App = function () {
  return <div> Hi! </div>;
}

//THis will take component's generated HTML  and put it ont he page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
