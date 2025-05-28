import React from 'react'
import Sidebar from './Dashboard/Components/Sidebar'
import { useLocation } from 'react-router-dom'


const TitlePage = () => {
  
    const location = useLocation()
    console.log(location.state)
  
  return (
    <div className="flex h-screen bg-[#01081a] text-white">
        <Sidebar/>
        <div className="flex-1 p-5 md:p-10 lg:p-20 overflow-scroll">
        <div className="md:grid md:grid-cols-3 md:gap-8 md:pr-0">
          {/* Book Image */}
          <div>
            <div className='w-full flex justify-center md:justify-start'>
            <img
              src={location.state.data.image}
              alt="Book Cover"
              className="rounded-md"
            />
            </div>
            <div className="flex justify-between space-x-3 mt-4 w-full">
              <button className="bg-[#F8C605] text-black py-2 px-2 rounded-md  flex-1">
                ▶ Watch
              </button>
              <button className="border-[1px] border-[#F8C605] text-[#F8C605]  py-2 px-4 rounded-md flex-1 flex justify-center items-center">
              <svg className='mr-3' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.75C6.75862 1.75 4.24399 3.78002 3.81483 6.25H6C6.41421 6.25 6.75 6.58579 6.75 7V14C6.75 14.4142 6.41421 14.75 6 14.75H3C1.48122 14.75 0.25 13.5188 0.25 12V9C0.25 7.72836 1.11311 6.65832 2.28547 6.34374C2.66693 2.83959 6.0738 0.25 10 0.25C13.9262 0.25 17.3331 2.83959 17.7145 6.34375C18.8869 6.65832 19.75 7.72836 19.75 9V12C19.75 13.2752 18.8821 14.3477 17.7047 14.6589C17.3839 16.9704 15.3998 18.75 13 18.75H11.8546C11.5579 19.483 10.8393 20 10 20C8.8954 20 8 19.1046 8 18C8 16.8954 8.8954 16 10 16C10.8393 16 11.5579 16.517 11.8546 17.25H13C14.5368 17.25 15.8245 16.1834 16.1631 14.75H14C13.5858 14.75 13.25 14.4142 13.25 14V7C13.25 6.58579 13.5858 6.25 14 6.25H16.1852C15.756 3.78002 13.2414 1.75 10 1.75ZM3 7.75C2.30964 7.75 1.75 8.3096 1.75 9V12C1.75 12.6904 2.30964 13.25 3 13.25H5.25V7.75H3ZM18.25 9C18.25 8.3096 17.6904 7.75 17 7.75H14.75V13.25H17C17.6904 13.25 18.25 12.6904 18.25 12V9Z" fill="#F8C605"/>
</svg>
                Listen
                
               
              </button>
              <button className="bg-[#F8C605] text-black py-2 px-4 rounded-md flex items-center">
                Read
              </button>
            </div>
            <button className="mt-4 w-full bg-blue-600 py-2 rounded-md mb-4 md:mb-0">Download</button>
          </div>

          {/* Book Description */}
          <div className="col-span-2">
            <div className='bg-[#D1DCFF1A] px-10 py-10 rounded-[10px]'>
                <h1 className="text-xl md:text-3xl poppins-medium">{location.state.data.title}</h1>
                    <p className="mt-4 text-sm md:text-lg">
                    {location.state.data.description}
                    </p>
                    
            </div>
            {/* Reviews */}
            <div className="mt-8 rounded-md mb-4 bg-[#161D30] p-10">
              {['Yemi James', 'Yemi James'].map((reviewer, index) => (
                <div key={index} className="">
                  <h3 className="font-bold">{reviewer}</h3>
                  <div className="flex items-center my-1"></div>
                  <p className="italic">This was a very good book, The animations ❤️❤️❤️</p>
                </div>
              ))}
            </div>

            {/* Add Review */}
            <div className="mt-4 flex space-x-10">
              
              <textarea
                placeholder="Add your review"
                className="flex-1 mt-2 p-2 rounded-md bg-gray-700 text-white"
              />
              <button className="mt-2 bg-[#052A80] w-[118px] px-4 py-2 rounded-md">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitlePage
