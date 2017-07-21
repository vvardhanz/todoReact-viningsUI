import React, { Component }  from  'react';
import ReactDOM from  'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_details';


const API_KEY = 'AIzaSyAsccVJ_MEhkjohdaUdOIhzlAlFUzxj4k8';

//Create a componenet. this componenet will produce some html.
class App extends Component
{
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: nill
   };

    //Call the search function
    YTSearch( { key:API_KEY, term: 'surfboarfs'},
        (videos) => {
          this.setState({
            videos: videos,
            selectedVideo: videos[0]
        }); //videos: videos in ES6 when key value same then u can condense it.
      }
    );
 }

  render()
  {
     return (
            <div>
                 <SearchBar />
                 <VideoDetail video={this.state.selectedVideo} />
                 <VideoList
                    onVideoSelect={selectVideo => this.setState({selectedVideo}) }
                    videos={ this.state.videos } />
            </div>
       );
   }
}

//THis will take component's generated HTML  and put it ont he page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
