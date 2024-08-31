import { FormEventHandler } from "react";
import TextInput from "./text-input"
import { BiArrowBack, BiPencil, BiPlus } from "react-icons/bi";
import Button from "./button";
import { closeModal } from "@/utils/modal";
import Selector from "./selector";
import { icons } from "@/utils/signatureIcons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addSignature, editSignature } from "@/redux/features/signaturesSlice";
import { capitalizeFirstLetter } from "@/utils/text";
import { clearSignatureForm } from "@/utils/signature-form-actions";

export default function SignatureForm({ id, type }: SignatureFormProps) {
  const dispatch = useAppDispatch();
  const selectedSignatureIndex = useAppSelector(
    (state) => state.signatures.selectedSignature
  );
  const selectedSignature = useAppSelector((state) =>
    state.signatures.value[selectedSignatureIndex]
  );

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (type === "add") addHandler(formData);
    else editHandler(formData);

    clearSignatureForm(type);

    closeModal();
  };

  const addHandler = (formData: FormData) => {
    dispatch(
      addSignature({
        name: formData.get("name") as string,
        icon: formData.get("icon") as string,
        grades: [],
      })
    );
  };

  const editHandler = (formData: FormData) => {
    dispatch(
      editSignature({
        index: selectedSignatureIndex,
        signature: {
          name: formData.get("name") as string,
          icon: formData.get("icon") as string,
          grades: selectedSignature.grades,
        },
      })
    );
  };

  const SubmitIcon = type == "add" ? BiPlus : BiPencil; 

  return (
    <dialog
      className="border border-box-border bg-background rounded-lg m-auto px-8 py-5 w-[500px] max-w-[90%] h-[90%] shadow-2xl shadow-white/10 open:flex flex-col gap-4"
      id={id}
    >
      <h2 className="text-3xl font-headings tracking-wider">{type} signature</h2>
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
            <SubmitIcon /> {capitalizeFirstLetter(type)}
          </Button>
        </footer>
      </form>
    </dialog>
  );
}

type SignatureFormProps = {
  id: string;
  type: "add" | "edit";
};
