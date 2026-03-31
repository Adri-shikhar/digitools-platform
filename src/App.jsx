import './App.css'
import { Suspense } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Modal from './components/modal'

const getData = async () => {
  const response = await fetch("/digitools-platform/data.json");
  return response.json();
};

const dataPromise = getData();


function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<p>Loading...</p>}>
        <Modal dataPromise={dataPromise}/>
      </Suspense>
      <Steps />
      <Pricing />
      <Banner />
      <Footer />
    </>
  )
}

export default App
