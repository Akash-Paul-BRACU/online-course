import logo from './logo.svg';
import './App.css';
import {fakeData} from './data/fakeData.js';
import { useEffect, useState } from 'react';
import Course from './Components/Course/Course';
import Cart from './Components/Course/Cart/Cart';
function App() {
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    setCourses(fakeData);
  }, [])

  const handleAddProduct = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);

  }

  const [cart, setCart] = useState([]);

 
  
  return (
    <div className="App">
      <header className="App-header">
      <Cart  cart={cart}></Cart>
        <ul>
          {
            courses.map(course => <Course course={course} handleAddProduct = {handleAddProduct}></Course>)
          }
        </ul>
       
      </header>
    </div>
  );
}

export default App;
