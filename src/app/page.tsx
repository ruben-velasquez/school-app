import Button from "@/components/button";
import Sidebar from "@/components/sidebar";
import { BiLeaf, BiMath, BiMedal, BiSolidCalendarExclamation, BiSolidMegaphone, BiSolidPizza, BiSolidRightArrowAlt, BiTask } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="bg-background w-4/5 flex flex-col py-5 px-10 gap-5">
        <header className="w-full">
          <h2 className="text-3xl font-headings tracking-wider">Welcome again!</h2>
        </header>
        <div className="w-full flex-grow grid grid-cols-2 grid-rows-3 gap-4">

          <section className="border-box-border border rounded-2xl p-4 flex flex-col gap-2 ">
            <span className="text-lg text-gray-300">Grade point average:</span>
            <h3 className="text-4xl font-bold flex gap-2 mb-2"><BiMedal /> 7.0</h3>
            <Button href="#">See all grades <BiSolidRightArrowAlt size={24} /></Button>
          </section>

          <section className="border-box-border border rounded-2xl p-4 flex flex-col gap-2 ">
            <span className="text-lg text-gray-300">Pending tasks:</span>
            <h3 className="text-4xl font-bold flex gap-2 mb-2"><BiTask /> 3</h3>
            <Button href="#">Go to tasks <BiSolidRightArrowAlt size={24} /></Button>
          </section>

          <section className="col-span-2 row-span-2 rounded-2xl flex flex-col gap-2">
            <h3 className="text-2xl font-headings tracking-wider pb-2">Monday 12th</h3>
            <ul className="grid gap-4">
              <li className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="p-3 bg-gray-950 rounded-lg">
                    <BiMath size={24} />
                  </div>
                  <main className="flex flex-col gap">
                    <h4 className="text-lg">Math</h4>
                    <span className="text-gray-400">8:00 - 9:40</span>
                  </main>
                </div>

                <span className="text-white">Writen exam</span>

                <div className="flex gap-2 w-[220px]">
                  <div className="bg-black w-12 h-12 rounded-full"></div>
                  <aside className="flex flex-col">
                    <span>Prof. Maria</span>
                    <span>mariaprof@gmail.com</span>
                  </aside>
                </div>
              </li>

              <hr className="border-box-border" />

              <li className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="p-3 bg-gray-950 rounded-lg">
                    <BiLeaf size={24} />
                  </div>
                  <main className="flex flex-col gap">
                    <h4 className="text-lg">Biology</h4>
                    <span className="text-gray-400">9:40 - 10:20</span>
                  </main>
                </div>

                <span className="text-gray-400">No activities</span>

                <div className="flex gap-2 w-[220px]">
                  <div className="bg-black w-12 h-12 rounded-full"></div>
                  <aside className="flex flex-col">
                    <span>Prof. Alguien</span>
                    <span>alguien@gmail.com</span>
                  </aside>
                </div>
              </li>

              <hr className="border-box-border" />

              <li className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="p-3 bg-gray-950 rounded-lg">
                    <BiSolidMegaphone size={24} />
                  </div>
                  <main className="flex flex-col gap">
                    <h4 className="text-lg">Language</h4>
                    <span className="text-gray-400">10:40 - 12:00</span>
                  </main>
                </div>

                <span className="text-white">Writen exam</span>

                <div className="flex gap-2 w-[220px]">
                  <div className="bg-black w-12 h-12 rounded-full"></div>
                  <aside className="flex flex-col">
                    <span>Prof. Someone</span>
                    <span>someone@gmail.com</span>
                  </aside>
                </div>
              </li>

              <hr className="border-container" />

              <li className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="p-3 bg-gray-950 rounded-lg">
                    <BiSolidPizza size={24} />
                  </div>
                  <main className="flex flex-col gap">
                    <h4 className="text-lg">English</h4>
                    <span className="text-gray-400">12:00 - 1:40</span>
                  </main>
                </div>

                <span className="text-white">Oral exam</span>

                <div className="flex gap-2 items-start w-[220px]">
                  <div className="bg-black w-12 h-12 rounded-full"></div>
                  <aside className="flex flex-col">
                    <span>Prof. Ana</span>
                    <span>anaprofe@gmail.com</span>
                  </aside>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
