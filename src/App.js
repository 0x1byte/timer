import React, { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Modal from './components/Modal';
import Work from './components/Work';

export const Context = React.createContext();
const data;
function App() {
  const [work, setWork] = useState('');
  const [show, setShow] = useState(false);
  const [works, setWorks] = useState([]);

  const Saver = (e) => {
    e.preventDefault();
    if (work !== '') {
      const newWork = {
        id: (Math.round(Math.random(1000, 9000) * 100000)),
        work: work
      }
      setWorks([...works, newWork]);
      setWork('');
      e.target.reset();
    } else {
      setShow(true);
    }
  }

  return (
    <div className="container">
      <Heading />
      {show && <Modal text='نامی برای شمارنده وارد کنید!' setShow={setShow} />}
      <div className="main-box">
        <Context.Provider value={{ works, setWorks }}>
          {works.length > 0 ? (
            works.map(({ id, work }) => <Work key={id} id={id} work={work} />)
          ) : (
            <p>شمارنده ای تعریف نشده است!</p>
          )}
        </Context.Provider>
        <form className="form-control" onSubmit={Saver}>
          <label htmlFor="pname">نام پروژه:</label>
          <input type="text" onChange={(e) => setWork(e.target.value)} id="pname" name="pname" />
          <button type="submit" >ذخیره</button>
        </form>
      </div>
    </div>
  );
}

export default App;
