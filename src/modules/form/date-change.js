import { schedulesDay } from "../schedules/load"

const inputs = ["form-date", "schedule-date"]

inputs.forEach(id => {
  const input = document.getElementById(id)
  if (input) {
    input.onchange = () => schedulesDay()
  }
})










