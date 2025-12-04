/**
 * Components
 */
import RequestList from '../request-list'

const SwapRequestSection = () => {
  return (
    <section className='pt-4'>
        <h2 className="text-sm text-app-300/60 mb-2">REQUEST</h2>
        <RequestList />
    </section>
  )
}

export default SwapRequestSection