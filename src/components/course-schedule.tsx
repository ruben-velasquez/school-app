import { BiLeaf, BiMath, BiSolidMegaphone, BiSolidPizza } from "react-icons/bi";
import CourseScheduleCard, { CSCProps } from "./course-schedule-card";

export default function CourseSchedule() {

  let cardsInfo: CSCProps[] = [
    {
      Icon: BiMath,
      signature: "Math",
      startHour: "8:00",
      endHour: "9:40",
      activity: "Writen exam",
      profInfo: {
        name: "Maria",
        email: "mariaprof@gmail.com"
      }
    },
    {
      Icon: BiLeaf,
      signature: "Biology",
      startHour: "9:40",
      endHour: "10:20",
      activity: "No activities",
      profInfo: {
        name: "Alguien",
        email: "alguien@gmail.com"
      }
    },
    {
      Icon: BiSolidMegaphone,
      signature: "Language",
      startHour: "10:40",
      endHour: "12:00",
      activity: "Writen exam",
      profInfo: {
        name: "Someone",
        email: "someone@gmail.com"
      }
    },
    {
      Icon: BiSolidPizza,
      signature: "English",
      startHour: "12:00",
      endHour: "1:40",
      activity: "Oral exam",
      profInfo: {
        name: "Ana",
        email: "anaprof@gmail.com"
      }
    },
  ]

  return (
    <ul className="grid gap-4">
      {
        cardsInfo.map((cardInfo, index) => (
          <>
            <CourseScheduleCard {...cardInfo} key={index}/>
            {
              index < (cardsInfo.length - 1) ? <hr className="border-box-border" /> : <></>
            }
          </>
        ))
      }
    </ul>
  )
}