import { FormEventHandler, MouseEventHandler } from "react";
import TextInput from "./text-input";
import TextArea from "./text-area";
import { BiArrowBack, BiPlus } from "react-icons/bi";
import Button from "./button";
import { closeModal } from "@/utils/modal";
import NumberInput from "./number-input";
import GradesList from "./grades-list";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { addGrade } from "@/redux/features/signaturesSlice";

export default function GradeForm({ onSubmit, id }: NoteFormProps) {
  const selectedSignature = useAppSelector(
    (state) => state.signatures.value[state.signatures.selectedSignature],
  );
  const selectedId = useAppSelector(
    (state) => state.signatures.selectedSignature,
  );

  const dispatch = useAppDispatch();

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    dispatch(
      addGrade({
        index: selectedId,
        grade: {
          number: parseFloat(formData.get("grade-grade") as string),
        },
      }),
    );

    if (onSubmit) onSubmit(e);
  };

  if (!selectedSignature) return null;

  return (
    <dialog
      className="border border-box-border bg-background rounded-lg m-auto px-8 py-5 w-[500px] max-w-[90%] h-[90%] shadow-2xl shadow-white/10 open:flex flex-col gap-4"
      id={id}
    >
      <h2 className="text-3xl font-headings tracking-wider">Add grade</h2>
      <div className="flex flex-col flex-grow justify-between">
        <main className="flex flex-col gap-4">
          <p className="flex gap-2">
            Signature:{" "}
            <span className="text-gray-400">{selectedSignature.name}</span>
          </p>
          <GradesList signature={selectedSignature} editControls />

          <form onSubmit={formSubmitHandler} className="flex flex-col gap-2">
            <p className="text-gray-300">New grade</p>
            <div className="grid grid-cols-5 gap-2">
              <NumberInput
                className="col-span-3"
                name="grade-grade"
                placeholder="e.g. 6.4"
                step={0.1}
                min={0}
                max={7}
                required
              />
              <Button type="submit" className="col-span-2" isButton>
                <BiPlus /> Add grade
              </Button>
            </div>
          </form>
        </main>

        <footer className="flex items-center justify-end gap-2">
          <Button type="button" isButton onclick={() => closeModal()}>
            <BiArrowBack /> Cancel
          </Button>
        </footer>
      </div>
    </dialog>
  );
}

type NoteFormProps = {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  id: string;
};
