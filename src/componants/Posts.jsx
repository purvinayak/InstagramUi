import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 space-y-4'>
      <Post
      userAvatar="https://avatar.iran.liara.run/public/91"
      username="purvi_developer"
      updatedAt="Now"
       PostUrl="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small/beautiful-girl-with-autumn-leaves-photo.jpg"
      //  PostUrl="https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714953600&semt=ais"
      likesNumber="25"
      location={""}
      
      />
    </div>
  )
}

export default Posts