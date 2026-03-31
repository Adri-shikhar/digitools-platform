import './App.css'
import { useState } from 'react';
import { Suspense } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Modal from './components/Modal'
import SectionHeader from './components/SectionHeader'
import Cart from './components/Cart'
import Tab from './components/Tab';

const getData = async () => {
  const response = await fetch("/digitools-platform/data.json");
  return response.json();
};

const dataPromise = getData();




function App() {
  const [activeTab, setActiveTab] = useState('products');
  //console.log(activeTab);
  const [carts, setCarts] = useState([]);
  //console.log(carts);
  
  return (
    <>
      <Nav />
      <Hero />
      <SectionHeader />
      <Tab setActiveTab={setActiveTab} />

      {activeTab === 'products' && (
        <Suspense fallback={<div className="bg-white flex justify-center items-center py-20 "><span className="loading loading-spinner text-neutral"></span></div>}>
          <Modal dataPromise={dataPromise} carts={carts} setCarts={setCarts} />
        </Suspense>
      )}
      {activeTab === 'cart' && <Cart carts={carts}  />}

      <Steps />
      <Pricing />
      <Banner />
      <Footer />
    </>
  )
}

export default App
