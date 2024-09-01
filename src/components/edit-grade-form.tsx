import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { editGrade } from "@/redux/features/signaturesSlice";
import NumberInput from "./number-input";
import Button from "./button";
import { BiArrowBack, BiPencil } from "react-icons/bi";
import { closeModal, openModal } from "@/utils/modal";

export default function EditGradeForm({ id }: EditGradeFormProps) {
  const dispatch = useAppDispatch();

  const selectedSignature = useAppSelector(
    (state) => state.signatures.selectedSignature
  );
  const selectedGrade = useAppSelector(
    (state) => state.signatures.selectedGrade
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);

    dispatch(
      editGrade({
        signatureIndex: selectedSignature,
        gradeIndex: selectedGrade,
        grade: {
          number: parseFloat(formData.get("grade") as string),
        },
      })
    );

    const gradeInput = document.querySelector(
      "#edit-grade-dialog form input[name='grade']",
    ) as HTMLInputElement;

    gradeInput.valueAsNumber = 0;

    openModal("grade-dialog");
  };

  return (
    <dialog
      className="border border-box-border bg-background rounded-lg m-auto px-8 py-5 w-[500px] max-w-[90%] h-[30%] shadow-2xl shadow-white/10 open:flex flex-col gap-4"
      id={id}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <p className="text-gray-300">Grade value</p>
        <NumberInput
          className="col-span-3"
          name="grade"
          placeholder="e.g. 6.4"
          step={0.1}
          min={0}
          max={7}
          required
        />

        <footer className="flex items-center justify-end gap-2">
          <Button type="button" isButton onclick={() => {openModal("grade-dialog");}}>
            <BiArrowBack /> Cancel
          </Button>
          <Button type="submit" className="col-span-2" isButton>
            <BiPencil /> Edit
          </Button>
        </footer>
      </form>
    </dialog>
  );
}

type EditGradeFormProps = { id: string };
