import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchPeerDetailsThunk from './redux/peerData/thunks';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeerDetailsThunk())
  }, [dispatch])
  return(
    <div>
      My Name is Rishabh Jain
    </div>
  )
}

export default App;
