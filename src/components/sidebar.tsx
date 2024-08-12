import { BiBarChartAlt2, BiBook, BiHome, BiNote } from "react-icons/bi";
import SidebarButton from "./sidebar-button";

export default function Sidebar() {
    return (
        <aside className="bg-sidebar w-1/5 flex flex-col gap-5 py-5 font-main">
            <header className="px-5">
                <h1 className="font-bold text-xl flex gap-2">
                    <BiBarChartAlt2 />
                    School Management
                </h1>
            </header>
            <ul className="display flex flex-col gap-2 px-2 justify-center text-gray-400">
                <SidebarButton href="#"><BiHome size={20} /> Home</SidebarButton>
                <SidebarButton href="#"><BiBook size={20}/> Subjects</SidebarButton>
                <SidebarButton href="#"><BiNote size={20} /> Notes</SidebarButton>
            </ul>
        </aside>
    )
}