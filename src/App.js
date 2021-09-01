import { useState } from 'react';
import './App.css';
import Modal from './components/modal';


function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <button onClick={() => { setShowModal(prevState => !prevState) }}>Show modal</button>
      <Modal showModal={showModal} setShowModal={setShowModal} text={"Yarid homosexual"} />
    </div>
  );
}

export default App;
