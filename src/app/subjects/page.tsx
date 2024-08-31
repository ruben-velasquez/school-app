"use client";
import Button from "@/components/button";
import GradeForm from "@/components/grade-form";
import Sidebar from "@/components/sidebar";
import SignatureCard from "@/components/signature-card";
import SignatureForm from "@/components/signature-form";
import { useAppSelector } from "@/redux/hooks";
import { openModal } from "@/utils/modal";
import { BiPlus } from "react-icons/bi";

export default function SubjectsPage() {
  const signatures = useAppSelector((state) => state.signatures.value);

  return (
    <>
      <Sidebar />
      <main className="bg-background w-4/5 flex flex-col py-5 px-10 gap-5">
        <header className="w-full">
          <h2 className="text-3xl font-headings tracking-wider">Subjects</h2>
        </header>
        <Button onclick={() => openModal("signature-dialog")}>
          <BiPlus /> Add signature
        </Button>
        <div className="grid grid-cols-3 gap-4">
          {signatures.map((signature, index) => (
            <SignatureCard key={index} signature={signature} id={index} />
          ))}
        </div>
      </main>
      <GradeForm id="grade-dialog" />
      <SignatureForm id="signature-dialog" />
    </>
  );
}
