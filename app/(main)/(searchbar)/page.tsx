/**
 * Components
 */

import { getAllPosts } from "@/app/_datas/posts/get-all-posts";
import PostSection from "./_components/home/post-section";
import SwapRequestSection from "./_components/home/swap-request-section";


export default function Home() {
  return (
    <>    
      <SwapRequestSection />
      <PostSection/>
    </>
  );
}
