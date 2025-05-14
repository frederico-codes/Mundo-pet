import dayjs from "dayjs"
import { scheduleFechByDay } from "../../services/schedule-fetch-by-day.js"
// import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "../schedules/show.js"


const selectedScheduleDate = document.getElementById("schedule-date")
selectedScheduleDate.value = inputToday
selectedScheduleDate.min = inputToday

export async function schedulesDay(){

  const date = inputToday

  const dailySchedules = await scheduleFechByDay({ date })
  
  schedulesShow({ dailySchedules })
  
  // hoursLoad({ date,dailySchedules })
} 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

