import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NFTMint from './components/NFTMint/NFTMint';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/staking' element={<Home />} />
        <Route path='/nft-mint' element={<NFTMint />} />
      </Routes>
    </div>
  );
}

export default App;
