import fetchPeerDetailsThunk from './redux/peerData/thunks';

function App() {
  fetchPeerDetailsThunk();
  return(
    <div>
      My Name is Rishabh Jain
    </div>
  )
}

export default App;
