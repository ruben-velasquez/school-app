import { BiBarChartAlt2, BiBook, BiHome, BiLogoGithub, BiMoon, BiNote, BiTask } from "react-icons/bi";
import SidebarButton from "./sidebar-button";
import { RiTwitterXLine } from "react-icons/ri";

export default function Sidebar() {
    return (
        <aside className="bg-background border-box-border border-r w-1/5 flex flex-col gap-5 py-5">
            <header className="px-5">
                <h1 className="font-bold text-xl flex gap-2 tracking-wide">
                    <BiBarChartAlt2 />
                    School Management
                </h1>
            </header>
            <ul className="display flex-grow flex flex-col gap-2 px-2 justify-start">
                <SidebarButton href="#"><BiHome size={20} /> Home</SidebarButton>
                <SidebarButton href="#"><BiBook size={20}/> Subjects</SidebarButton>
                <SidebarButton href="#"><BiNote size={20} /> Notes</SidebarButton>
                <SidebarButton href="#"><BiTask size={20} /> Tasks</SidebarButton>
            </ul>
            <footer className="flex flex-col gap-2 w-full">
                <ul className="flex items-center justify-center w-full gap-2">
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <BiLogoGithub size={24} />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <RiTwitterXLine size={24} />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <BiMoon size={24} />
                        </a>
                    </li>
                </ul>
            </footer>
        </aside>
    )
}