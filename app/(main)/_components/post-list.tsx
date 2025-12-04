/**
 * Components
 */
import PostCard from './post-card'

const PostList = () => {
  return (
    <div className='flex flex-col gap-2'>
      <PostCard id='post-213' title='How to become milliader!' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti fuga officia totam dolorum consequatur! Ea enim id accusantium facilis, nisi deleniti, quam quo eos, nemo delectus ab a inventore. Ipsum!' user={{ id: "user-john", name: "John Smith", skills: [] }} timestamps='2026-01-27T10:00:00.000Z' priority={true}/>
      <PostCard id='post-213' title='How to become milliader!' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti fuga officia totam dolorum consequatur! Ea enim id accusantium facilis, nisi deleniti, quam quo eos, nemo delectus ab a inventore. Ipsum!' user={{ id: "user-john", name: "John Smith", skills: [] }} timestamps='2026-01-27T10:00:00.000Z'/>
      <PostCard id='post-213' title='How to become milliader!' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti fuga officia totam dolorum consequatur! Ea enim id accusantium facilis, nisi deleniti, quam quo eos, nemo delectus ab a inventore. Ipsum!' user={{ id: "user-john", name: "John Smith", skills: [] }} timestamps='2026-01-27T10:00:00.000Z'/>
    </div>
  )
}

export default PostList