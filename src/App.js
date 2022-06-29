import React from 'react';
import Clock from './components/Clock';
import Shoes from './components/Shoes';

//parent
function App() {
  return (

    <div>
      <h1>Shoes Store</h1>
      <Shoes brandName="Armani" brandSize="40-46" brandPrice="950$"
        brandName1="Nike" brandSize1="30-46" brandPrice1="250$"
        brandName2="Adidas" brandSize2="35-43" brandPrice2="150$"
        brandName3="puma" brandSize3="40-46" brandPrice3="100$"
        brandName4="Tommy" brandSize4="38-44" brandPrice4="200$" />
      <Clock />
    </div>
  );
}

export default App;