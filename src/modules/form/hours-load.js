import dayjs from "dayjs"
import  { openingHours } from "../../utils/opening-hours.js"

const hours = document.getElementById("hours")

export function hoursLoad({date,dailySchedules}){
  hours.innerHTML = ""

  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm") 
  )
 
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")    
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
    const available = !unavailableHours.includes(hour)  &&  !isHourPast   

    return{
      hour,
      available,
    }
  })
}
