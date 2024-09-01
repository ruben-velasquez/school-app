import {
  Grade as GradeType,
  Signature,
} from "@/redux/features/signaturesSlice";
import { BiTrash, BiPencil } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeGrade, editGrade, selectGrade } from "@/redux/features/signaturesSlice";
import { closeModal, openModal } from "@/utils/modal";

export type GradeAction = "remove" | "edit";

type GradeProps = {
  grade: GradeType;
  signature: Signature;
  index: number;
  type?: GradeAction;
};

export default function Grade({
  grade,
  signature,
  index,
  type = "remove",
}: GradeProps) {
  const signatureId = useAppSelector((state) =>
    state.signatures.value.findIndex((_signature) => _signature === signature)
  );

  const dispatch = useAppDispatch();

  const handleRemoveGrade = () => {
    dispatch(removeGrade({ signatureIndex: signatureId, gradeIndex: index }));
  };

  const openEditGradeForm = () => {
    dispatch(selectGrade(index));

    closeModal();

    openModal("edit-grade-dialog");
  }

  return (
    <li className="group flex justify-center items-center">
      <span className="group-hover:hidden block">{grade.number}</span>
      <button className="group-hover:block hidden text-white">
        {type == "edit" ? (
          <BiPencil size={16} onClick={openEditGradeForm} />
        ) : (
          <BiTrash size={16} onClick={handleRemoveGrade} />
        )}
      </button>
    </li>
  );
}
