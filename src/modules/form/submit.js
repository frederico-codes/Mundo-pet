import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import {schedulesDay} from "../schedules/load.js" 

const form =document.querySelector("form")
const tutorName = document.getElementById("tutor-name")
const petName = document.getElementById("pet-name")
const telNumber = document.getElementById("tel")
const serviceDescription = document.getElementById("service-description")
const selectedDate = document.getElementById("date")
const selectedHour = document.getElementById("time")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday
selectedDate.min = inputToday


 
//   selectedHour.value = inputTime
//   selectedHour.min = inputTime







form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    
    const tutor = tutorName.value.trim()
    const pet = petName.value.trim()
    const tel = telNumber.value.trim()
    const service = serviceDescription.value.trim()
    const selectedHourValue = selectedHour.value

    if(!tutor){
      return alert("Informe o nome do cliente!")
    }
    if(!pet){
      return alert("Informe o nome do pet!")
    }
    if(!tel){
      return alert("Informe o nome do telefone!")
    }
    if(!service){
      return alert("Informe o nome do service!")
    } 


   
 const when = dayjs(`${selectedDate.value}T${selectedHourValue}`).format()


    const id = new Date().getTime()

    await scheduleNew({
      id,
      tutor,
      pet,
      service,
      when,
    })
   
    await schedulesDay()

    tutorName.value = ""
    petName.value = ""
    telNumber.value = ""
    serviceDescription.value = ""
    selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")
    selectedHour.value = ""

  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }

 
}