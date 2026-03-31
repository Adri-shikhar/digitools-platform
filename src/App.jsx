import './App.css'
import { Suspense } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Modal from './components/Modal'
import SectionHeader from './components/SectionHeader'

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
      <SectionHeader />
      <Suspense fallback={<div className="bg-white flex justify-center items-center py-20"><span className="loading loading-spinner text-neutral"></span></div>}>
        <Modal dataPromise={dataPromise} />
      </Suspense>
      <Steps />
      <Pricing />
      <Banner />
      <Footer />
    </>
  )
}

export default App
