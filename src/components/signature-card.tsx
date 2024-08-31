import { BiMenu, BiPencil, BiTrash } from "react-icons/bi";
import GradesList from "./grades-list";
import IconButton from "./icon-button";
import { getIconByName } from "@/utils/signatureIcons";
import { openModal } from "@/utils/modal";
import { useAppDispatch } from "@/redux/hooks";
import {
  removeSignature,
  selectSignature,
  Signature,
} from "@/redux/features/signaturesSlice";

export default function SignatureCard({ signature, id }: SignatureCardProps) {
  const maxSignatureNameLength = 14;

  const Icon = getIconByName(signature.icon);

  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeSignature(id));
  };

  const handleEdit = () => {
    dispatch(selectSignature(id));

    openModal("grade-dialog");
  };

  const signatureName =
    signature.name.length > maxSignatureNameLength
      ? signature.name.slice(0, maxSignatureNameLength).trim() + "..."
      : signature.name;

  return (
    <section className="border border-box-border rounded-lg group/card">
      <header className="p-4 w-full flex justify-between">
        <div className="flex gap-2 max-w-40">
          <Icon className="min-w-6" size={20}></Icon>
          <h3 className="text-xl">{signatureName}</h3>
        </div>
        <aside className="flex gap-2 group-hover/card:opacity-100 opacity-0 bg-background">
          <IconButton onclick={handleRemove}>
            <BiPencil />
          </IconButton>
          <IconButton onclick={handleRemove}>
            <BiTrash />
          </IconButton>
          <IconButton onclick={handleEdit}>
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
