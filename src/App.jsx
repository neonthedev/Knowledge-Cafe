import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import { useState } from "react";

function App() {
  // state declaire for Bookmarks

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  //adding a event handler for Bookmarks

  const addBookmark = blog => {
    setBookmarks([...bookmarks, blog]);
    // console.log(blog);
  };

  const handleMarkAsRead = time =>{
    // console.log('Marking as read', time)
    setReadingTime(readingTime + time);
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx auto'>
      <Blogs addBookmark={addBookmark} handleMarkAsRead ={handleMarkAsRead} ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime = {readingTime} ></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
