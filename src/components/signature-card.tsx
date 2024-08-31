import { BiMenu, BiPencil, BiTrash } from "react-icons/bi";
import GradesList from "./grades-list";
import IconButton from "./icon-button";
import { getIconByName } from "@/utils/signatureIcons";
import { openModal } from "@/utils/modal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  removeSignature,
  selectSignature,
  Signature,
} from "@/redux/features/signaturesSlice";
import { truncateString } from "@/utils/text";
import { fillEditSignatureForm } from "@/utils/signature-form-actions";

export default function SignatureCard({ signature, id }: SignatureCardProps) {
  const maxSignatureNameLength = 14;

  const Icon = getIconByName(signature.icon);

  const dispatch = useAppDispatch();
  const signatures = useAppSelector((state) => state.signatures.value);

  const handleRemove = () => {
    dispatch(removeSignature(id));
  };

  const handleEditSignature = () => {
    dispatch(selectSignature(id));

    fillEditSignatureForm(signatures[id]);

    openModal("edit-signature-dialog");
  };

  const handleEditGrades = () => {
    dispatch(selectSignature(id));

    openModal("grade-dialog");
  };

  return (
    <section className="border border-box-border rounded-lg group/card">
      <header className="p-4 w-full flex justify-between">
        <div className="flex gap-2 max-w-40">
          <Icon className="min-w-6" size={20}></Icon>
          <h3 className="text-xl">
            {truncateString(signature.name, maxSignatureNameLength)}
          </h3>
        </div>
        <aside className="flex gap-2 group-hover/card:opacity-100 opacity-0 bg-background">
          <IconButton onclick={handleEditSignature}>
            <BiPencil />
          </IconButton>
          <IconButton onclick={handleRemove}>
            <BiTrash />
          </IconButton>
          <IconButton onclick={handleEditGrades}>
            <BiMenu />
          </IconButton>
        </aside>
      </header>
      <GradesList
        signature={signature}
        className="p-2 px-4 border-t border-box-border"
      />
    </section>
  );
}

type SignatureCardProps = {
  signature: Signature;
  id: number;
};
