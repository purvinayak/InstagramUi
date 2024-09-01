import React  from 'react';
import './App.css';
import LeftSidebar from './componants/LeftSidebar';
import Feed from './componants/Feed';
import RightSidebar from './componants/RightSidebar';

function App() {
  return (
    <>
    
 
    <main className=' flex bg-black h-screen text-white' >
      <div className='w-full h full flex'>

      {/* <LeftSidebar/> */}

      <div className='w-1/7 h-full'>
          <LeftSidebar />
        </div>
        <div className='flex-1 h-full overflow-y-auto'>
          <Feed  className="w-full h full flex" />
        </div>
    
      {/* <Feed className="w-full h full flex"/> */}

      {/* <RightSidebar/> */}
      <div className='w-1/5 h-full'>
          <RightSidebar />
        </div>
      </div>
    
    </main>
  

    </>
  )
}


export default App;
