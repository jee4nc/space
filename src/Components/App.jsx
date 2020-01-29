import React from 'react';
import '../Styles/Styles.scss'
import Banner from './Molecules/Banner'
import Cards from './Molecules/Cards'


function App() {
  return (
    <>
    <Banner></Banner>
    <div className="ed-grid m-grid-3">
      <Cards/>
    </div>
    </>
  );
}

export default App;
