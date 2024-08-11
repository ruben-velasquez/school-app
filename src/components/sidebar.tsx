import SidebarButton from "./sidebar-button";

export default function Sidebar() {
    return (
        <aside className="bg-sidebar w-1/5 flex flex-col gap-3 py-5">
            <header className="px-5">
                <h1 className="font-bold text-xl">School Management</h1>
            </header>
            <ul className="display flex flex-col gap-2 px-2">
                <SidebarButton href="#">Home</SidebarButton>
                <SidebarButton href="#">Subjects</SidebarButton>
                <SidebarButton href="#">Notes</SidebarButton>
            </ul>
        </aside>
    )
}