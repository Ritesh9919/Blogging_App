
import {Switch, Route} from 'react-router-dom';
// import {CreatePost, PostDetail, Home} from './index';
import CreatePost from './CreatePost'; 
import PostDetail from './PostDetail';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  
  return (
    <div className=''>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/:postId" component={PostDetail} />
      <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
