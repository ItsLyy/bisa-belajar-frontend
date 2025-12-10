/**
 * Components
 */
import ChatCard from './chat-card'

const ChatsList = () => {
  return (
    <div className='grid grid-cols-1 gap-2'>
        <ChatCard name="John chena" latitude={100} longitude={200} bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat excepturi reprehenderit libero voluptate nihil quaerat illo, facilis architecto debitis eum modi error sint dolores ad et perferendis accusantium. Deleniti unde in nobis, soluta odio labore libero. Similique, eos. Deleniti, id." skills={[]} />
        <ChatCard name="John chena" latitude={100} longitude={200} bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat excepturi reprehenderit libero voluptate nihil quaerat illo, facilis architecto debitis eum modi error sint dolores ad et perferendis accusantium. Deleniti unde in nobis, soluta odio labore libero. Similique, eos. Deleniti, id." skills={[]} />
    </div>
  )
}

export default ChatsList