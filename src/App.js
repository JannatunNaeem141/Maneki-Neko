import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/staking' element={<Home></Home>} /> 
      </Routes>
    </div>
  );
}

export default App;
