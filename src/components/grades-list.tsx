import {
  Grade as GradeType,
  Signature,
} from "@/redux/features/signaturesSlice";
import Grade, { GradeAction } from "./grade";
import GradePlaceholder from "./grade-placeholder";
import { RoundDecimals } from "@/utils/math";
import ToggleSwitch from "./toggle-switch";
import { useState } from "react";

type GradesListProps = {
  className?: string;
  signature: Signature;
  editControls?: boolean;
};

export default function GradesList({
  className,
  signature,
  editControls,
}: GradesListProps) {
  const grades: GradeType[] = signature?.grades || [];

  const [gradesAction, SetGradesAction] = useState("remove" as GradeAction)

  const averageRaw = grades
    ? grades.reduce((acc, grade) => acc + grade.number, 0) / grades.length
    : 0;

  const average = RoundDecimals(averageRaw, 2);

  const onChangeAction = (value: string) => {
    SetGradesAction(value as GradeAction)
  }

  return (
    <div
      className={`w-full rounded-lg text-gray-400 text-sm flex flex-col gap-4 ${className}`}
    >
      <div className="flex justify-between items-center">
        <p>Grades - Average: {average}</p>
        {editControls ? <ToggleSwitch name="gradeAction" options={["remove", "edit"]} onChange={onChangeAction} /> : <></>}
      </div>
      <ul className="grid grid-cols-8 gap-2 text-center text-xs">
        {grades.map((grade, index) => (
          <Grade
            key={index}
            grade={grade}
            signature={signature}
            index={index}
            type={gradesAction}
          />
        ))}
        {Array.from({ length: 24 - (grades?.length || 0) }).map((_, index) => (
          <GradePlaceholder key={index} />
        ))}
      </ul>
    </div>
  );
}
