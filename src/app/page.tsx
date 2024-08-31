import BoxSection from "@/components/box-section";
import Button from "@/components/button";
import CourseSchedule from "@/components/course-schedule";
import Sidebar from "@/components/sidebar";
import TasksNumber from "@/components/tasks-number";
import { BiMedal, BiSolidRightArrowAlt, BiTask } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="bg-background w-4/5 flex flex-col py-5 px-10 gap-5">
        <header className="w-full">
          <h2 className="text-3xl font-headings tracking-wider">
            Welcome again!
          </h2>
        </header>
        <div className="w-full flex-grow grid grid-cols-2 grid-rows-3 gap-4">
          <BoxSection>
            <span className="text-lg text-gray-300">Grade point average:</span>
            <h3 className="text-4xl font-bold flex gap-2 mb-2">
              <BiMedal /> 7.0
            </h3>
            <Button href="#">
              See all grades <BiSolidRightArrowAlt size={24} />
            </Button>
          </BoxSection>

          <BoxSection>
            <span className="text-lg text-gray-300">Pending tasks:</span>
            <h3 className="text-4xl font-bold flex gap-2 mb-2">
              <BiTask /> <TasksNumber />
            </h3>
            <Button href="#">
              Go to tasks <BiSolidRightArrowAlt size={24} />
            </Button>
          </BoxSection>

          <section className="col-span-2 row-span-2 rounded-2xl flex flex-col gap-2">
            <h3 className="text-2xl font-headings tracking-wider pb-2">
              Monday 12th
            </h3>
            <CourseSchedule />
          </section>
        </div>
      </main>
    </>
  );
}
