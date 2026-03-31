import './App.css'
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

const dataPromise=getData();

 


function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Modal dataPromise={dataPromise}/>
      <Steps />
      <Pricing />
      <Banner />
      <Footer />
    </>
  )
}

export default App
