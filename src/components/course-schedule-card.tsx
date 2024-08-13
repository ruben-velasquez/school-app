import { IconType } from "react-icons";
import { BiMath } from "react-icons/bi";

export default function CourseScheduleCard({
  Icon,
  signature,
  startHour,
  endHour,
  profInfo,
  activity,
}: CSCProps) {
  return (
    <li className="flex justify-between items-center">
      <div className="flex gap-2">
        <div className="p-3 bg-gray-950 rounded-lg">
          <Icon size={24} />
        </div>
        <main className="flex flex-col gap">
          <h4 className="text-lg">{signature}</h4>
          <span className="text-gray-400">
            {startHour} - {endHour}
          </span>
        </main>
      </div>

      <span className={activity != "No activities" ? "text-white" : "text-gray-400"}>
        {activity}
      </span>

      <div className="flex gap-2 w-[220px]">
        <div className="bg-black w-12 h-12 rounded-full"></div>
        <aside className="flex flex-col">
          <span>Prof. {profInfo.name}</span>
          <span>{profInfo.email}</span>
        </aside>
      </div>
    </li>
  );
}

export type CSCProps = {
  Icon: IconType;
  signature: string;
  startHour: string;
  endHour: string;
  profInfo: ProfessorInfo;
  activity: Activity;
};

export type ProfessorInfo = {
  name: string;
  email: string;
  imageURL?: string;
};

type Activity = "No activities" | "Writen exam" | "Oral exam";
