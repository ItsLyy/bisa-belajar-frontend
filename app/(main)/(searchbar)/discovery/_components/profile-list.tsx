/**
 * Components
 */
import ProfileCard from './profile-card'

const ProfileList = () => {
  return (
    <div className='flex flex-col gap-2'>
        <ProfileCard name="John chena" latitude={100} longitude={200} bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat excepturi reprehenderit libero voluptate nihil quaerat illo, facilis architecto debitis eum modi error sint dolores ad et perferendis accusantium. Deleniti unde in nobis, soluta odio labore libero. Similique, eos. Deleniti, id." skills={[]} />
        <ProfileCard name="John chena" latitude={100} longitude={200} bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat excepturi reprehenderit libero voluptate nihil quaerat illo, facilis architecto debitis eum modi error sint dolores ad et perferendis accusantium. Deleniti unde in nobis, soluta odio labore libero. Similique, eos. Deleniti, id." skills={[]} />
    </div>
  )
}

export default ProfileList