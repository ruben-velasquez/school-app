import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="bg-background w-4/5 grid grid-cols-2 grid-rows-3 p-10 gap-4">
        <div className="bg-container rounded-2xl"></div>
        <div className="bg-container rounded-2xl"></div>
        <div className="bg-container col-span-2 row-span-2 rounded-2xl"></div>
      </main>
    </>
  );
}
