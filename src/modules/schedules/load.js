import { scheduleFechByDay } from "../../services/schedule-fetch-by-day.js"
// import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "../schedules/show.js"



const selectedDate = document.getElementById("schedule-date")


export async function schedulesDay(){

  const date = selectedDate.value

  const dailySchedules = await scheduleFechByDay({ date })
  
  schedulesShow({ dailySchedules })
  
  // hoursLoad({ date,dailySchedules })
}