import './App.css';
import response from './Blob/response'

import Body from './Components/Body'
import Header from './Components/Header'

function App() {
  console.log(response);
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
