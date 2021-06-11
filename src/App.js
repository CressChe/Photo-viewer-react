import './App.css';
import {PhotoViewer} from './PhotoViewer/PhotoViewer';
import './PhotoViewer/PhotoViewer.css';
import {ImageUrls} from './PhotoViewer/PhotoViewer';
import {ShowImageThumbnails} from './PhotoViewer/Thumbnails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
        React Photo Viewer
        </p>
        <PhotoViewer name={"https://picsum.photos/id/600/200.jpg"}/> 
        <ShowImageThumbnails listOfUrls={ImageUrls}/>
      
      </header>
    </div>
  )
}

export default App;

