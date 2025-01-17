import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#ffffff] text-black-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-5xl text-black font-bold inline border-b-4 border-pink-500 text-center '>Skills</p>
              <p className='py-1 text-2xl text-black text-center'>I enjoy learning new things, here's a list of technologies I've worked with during this journey:</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>REACT</p>
              </div>
              
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>C++</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>SWIFT</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>REACT NATIVE</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>MONGODB</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>SCRIPTING</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>WIRESHARK</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>SPLUNK</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>ACTIVE DIRECTORY</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>REMOTE DESKTOP</p>
              </div>
             
          </div>
      </div>
    </div>
  );
};
export default Skills;