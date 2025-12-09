/**
 * Components
 */
import CourseList from "../_components/course-list";
import Pagination from "../_components/pagination";
import Navigation from "./_components/navigation";
import ProfileList from "../_components/profile-list";

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
        <Pagination page={page} searchParams={params} />
      </footer>
  </section>
  )
}
