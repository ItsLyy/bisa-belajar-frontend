/**
 * Components
 */
import CourseList from "@/app/_components/general/course-list";
import Pagination from "@/app/_components/general/pagination";
import ProfileList from "@/app/_components/general/profile-list";
import Navigation from "./_components/navigation";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams;
  const page = parseInt(params?.page || "1");
  const category = params?.category;
  const skills = params?.skills?.split(",").filter(Boolean) || [];

  return (
  <section>
      <Navigation category={category} />
      {
        category !== 'people' ?
          <CourseList />
        :
          <ProfileList />
      }
      <footer className="my-16 flex justify-end">
        <Pagination pathname="/discovery/search" page={page}/>
      </footer>
  </section>
  )
}
