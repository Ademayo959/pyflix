import Navbar from './Navbar'

function App() {

  return (
    <div className="font-inter bg-[url('./assets/bg.jpeg')] bg-no-repeat bg-cover h-screen">
      <div className='absolute inset-0 bg-linear-to-tr from-black to-black/10 w-full h-screen'></div>
      <div className='absolute inset-0 bg-linear-to-b from-black/90 to-black/20 w-full h-screen'></div>
      <div className='relative z-20'>
        <Navbar />
        <div>
          <h1 className='text-9xl text-gold'>WELCOME</h1>
        </div>
      </div>
    </div>
  )
}

export default App
