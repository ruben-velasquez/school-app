import { FormEventHandler, MouseEventHandler } from "react";
import TextInput from "./text-input";
import TextArea from "./text-area";
import { BiArrowBack, BiPlus } from "react-icons/bi";
import Button from "./button";
import { closeModal } from "@/utils/modal";
import NumberInput from "./number-input";
import GradesList from "./grades-list";
import Selector from "./selector";
import { icons } from "@/utils/signatureIcons";
import { useAppDispatch } from "@/redux/hooks";
import { addSignature } from "@/redux/features/signaturesSlice";

export default function SignatureForm({ id }: SignatureFormProps) {
  const dispatch = useAppDispatch();

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    dispatch(
      addSignature({
        name: formData.get("name") as string,
        icon: formData.get("icon") as string,
        grades: [],
      }),
    );

    closeModal();
  };

  return (
    <dialog
      className="border border-box-border bg-background rounded-lg m-auto px-8 py-5 w-[500px] max-w-[90%] h-[90%] shadow-2xl shadow-white/10 open:flex flex-col gap-4"
      id={id}
    >
      <h2 className="text-3xl font-headings tracking-wider">Add signature</h2>
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col flex-grow justify-between"
      >
        <main className="flex flex-col gap-2">
          <p>Name*</p>
          <TextInput name="name" required placeholder="e.g. Biology" />
          <p>Icon</p>
          <Selector name="icon" value="none" options={Object.keys(icons)} />
        </main>

        <footer className="flex items-center justify-end gap-2">
          <Button type="button" isButton onclick={() => closeModal()}>
            <BiArrowBack /> Cancel
          </Button>
          <Button type="submit" isButton>
            <BiPlus /> Add
          </Button>
        </footer>
      </form>
    </dialog>
  );
}

type SignatureFormProps = {
  id: string;
};
