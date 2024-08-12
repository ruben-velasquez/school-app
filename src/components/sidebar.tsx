import { BiBarChartAlt2, BiBook, BiHome, BiNote } from "react-icons/bi";
import SidebarButton from "./sidebar-button";

export default function Sidebar() {
    return (
        <aside className="bg-background border-box-border border-r w-1/5 flex flex-col gap-5 py-5">
            <header className="px-5">
                <h1 className="font-bold text-xl flex gap-2 tracking-wide">
                    <BiBarChartAlt2 />
                    School Management
                </h1>
            </header>
            <ul className="display flex flex-col gap-2 px-2 justify-center">
                <SidebarButton href="#"><BiHome size={20} /> Home</SidebarButton>
                <SidebarButton href="#"><BiBook size={20}/> Subjects</SidebarButton>
                <SidebarButton href="#"><BiNote size={20} /> Notes</SidebarButton>
            </ul>
        </aside>
    )
}