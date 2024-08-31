import {
  Grade as GradeType,
  Signature,
} from "@/redux/features/signaturesSlice";
import Grade from "./grade";
import GradePlaceholder from "./grade-placeholder";
import { RoundDecimals } from "@/utils/math";

type GradesListProps = {
  className?: string;
  signature: Signature;
};

export default function GradesList({ className, signature }: GradesListProps) {
  const grades: GradeType[] = signature?.grades || [];

  const averageRaw = grades
    ? grades.reduce((acc, grade) => acc + grade.number, 0) / grades.length
    : 0;

  const average = RoundDecimals(averageRaw, 2);

  return (
    <div
      className={`w-full rounded-lg text-gray-400 text-sm flex flex-col gap-4 ${className}`}
    >
      <p>Grades - Average: {average}</p>
      <ul className="grid grid-cols-8 gap-2 text-center text-xs">
        {grades.map((grade, index) => (
          <Grade
            key={index}
            grade={grade}
            signature={signature}
            index={index}
          />
        ))}
        {Array.from({ length: 24 - (grades?.length || 0) }).map((_, index) => (
          <GradePlaceholder key={index} />
        ))}
      </ul>
    </div>
  );
}
