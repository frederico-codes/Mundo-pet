import { schedulesDay } from "./schedules/load.js"
import dayjs from "dayjs"


document.addEventListener("DOMContentLoaded", function(){
  const scheduleDate = document.getElementById("schedule-date")

  if (scheduleDate) {
    const today = dayjs().format("YYYY-MM-DD")
    scheduleDate.value = today
    scheduleDate.min = today
  }

  schedulesDay()
})