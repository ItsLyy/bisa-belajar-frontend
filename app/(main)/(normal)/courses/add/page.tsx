/**
 * Components
 */
import AreaField from '@/app/_components/ui/form/area-field'
import ImageUpload from '@/app/_components/ui/form/image-upload'
import InputField from '@/app/_components/ui/form/input-field'

export default function AddCoursePage() {
  return (
    <section className='max-w-[500px] w-full mx-auto'>
      <header className='py-4'>
        <h1 className='text-xl text-app-500'>Create Course</h1>
        <p>Create your course to start sharing your experience!</p>
      </header>
      <form className='space-y-4 py-6'>
        <InputField label='Title' id='course-title' placeholder='e.g. Hello World' />
        <AreaField label='Description' id='course-description' placeholder='e.g. Hello World' />
        <div className='flex flex-col gap-1'>
          <span className='text-sm text-app-300/60'>Upload Banner</span>
          <ImageUpload id='course-banner' />
        </div>
        <button type='submit' className='w-full p-3 bg-app-200 text-app-500 font-medium rounded-xl mt-20'>Create</button>
      </form>
    </section>
  )
}
