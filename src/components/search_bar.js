import React , { Componenet } from  'react';

class SearchBar extends React.Component {

   constructor(props) {
       super(props);
       this.state = { term: '' };
   }

   render() {
     return (
       <div>
           value={this.state.term}
          <input onChange={event => this.setState({ term: event.target.value }) } />
          Value of Input is : {this.state.term}
       </div>
     );
   }

}


export default SearchBar;
