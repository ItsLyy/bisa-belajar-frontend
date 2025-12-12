/**
 * Components
 */

import { getAllSwaps } from "@/app/_datas/swaps/get-all-swaps"
import RequestList from "../request-list"

const SwapRequestSection = async () => {
  const swaps = await getAllSwaps();
  console.log(swaps)
  return (
    <section>
        <h2 className="text-sm text-app-300/60 mb-2">REQUEST</h2>
        <RequestList swaps={swaps.data} />
    </section>
  )
}

export default SwapRequestSection