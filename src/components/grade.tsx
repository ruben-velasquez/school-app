import {
  Grade as GradeType,
  Signature,
} from "@/redux/features/signaturesSlice";
import { BiTrash } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeGrade } from "@/redux/features/signaturesSlice";

export default function Grade({
  grade,
  signature,
  index,
}: {
  grade: GradeType;
  signature: Signature;
  index: number;
}) {
  // Get Signature Id, by the index in the signatures array
  const signatureId = useAppSelector((state) =>
    state.signatures.value.findIndex((_signature) => _signature === signature),
  );

  const dispatch = useAppDispatch();

  const handleRemoveGrade = () => {
    dispatch(removeGrade({ signatureIndex: signatureId, gradeIndex: index }));
  };

  return (
    <li className="group flex justify-center items-center">
      <span className="group-hover:hidden block">{grade.number}</span>
      <button className="group-hover:block hidden text-white">
        <BiTrash size={16} onClick={handleRemoveGrade} />
      </button>
    </li>
  );
}
