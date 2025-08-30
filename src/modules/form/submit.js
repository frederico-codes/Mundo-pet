import dayjs from "dayjs"
import { scheduleFechByDay } from "../../services/schedule-fetch-by-day.js";
import { scheduleNew } from "../../services/schedule-new.js"
import {schedulesDay} from "../schedules/load.js" 

const form =document.querySelector("form")
const tutorName = document.getElementById("tutor-name")
const petName = document.getElementById("pet-name")
const telNumber = document.getElementById("tel")
const serviceDescription = document.getElementById("service-description")
const selectedDate = document.getElementById("form-date")
const selectedHour = document.getElementById("time")

telNumber.oninput = () => {
  let value = telNumber.value.replace(/\D/g, "")
  telNumber.value = value
   
}

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday
selectedDate.min = inputToday

const scheduleDate = document.getElementById("schedule-date")
scheduleDate.value = inputToday
scheduleDate.min = inputToday


async function updateAvailableHours() {
  const selected = selectedDate.value;      
  const now = dayjs();
  const isToday = selected === now.format("YYYY-MM-DD");

  
  const daily = await scheduleFechByDay({ date: selected }); 
  

  
  const booked = new Set(
    daily.map(item => dayjs(item.when).format("HH:mm"))
  );

  
  Array.from(selectedHour.options).forEach(option => {
    if (!option.value) return; 

    const optionTime = dayjs(`${selected}T${option.value}`);
    const isPast   = isToday && optionTime.isBefore(now);
    const isBooked = booked.has(option.value);

    const disable = isPast || isBooked;

    option.disabled = disable;
      
  });
}


selectedDate.addEventListener("change", updateAvailableHours)
updateAvailableHours() // Executa uma vez ao carregar


form.onsubmit = async (event) => {
  event.preventDefault()

  try {    
    const tutor = tutorName.value.trim()
    const pet = petName.value.trim()
    const tel = telNumber.value.trim()
    const service = serviceDescription.value.trim()
    const selectedDateValue = selectedDate.value
    const selectedHourValue = selectedHour.value

    if(!tutor){
      return alert("Informe o nome do cliente!")
    }
    if(!pet){
      return alert("Informe o nome do pet!")
    }
    if(!tel){
      return alert("Informe o número do telefone!")
    }
    if(!service){
      return alert("Informe o nome do serviço!")
    } 
    if(!selectedHourValue){
      return alert("Informe a hora!")
    } 

   
    const when = dayjs(`${selectedDateValue}T${selectedHourValue}`).format()


    const id = new Date().getTime()

    await scheduleNew({
      id,
      tutor,
      pet,
      tel,
      service,
      when,
    })
    
  
   
    await schedulesDay()

    tutorName.value = ""
    petName.value = ""
    telNumber.value = ""
    serviceDescription.value = ""
    selectedDate.value = inputToday
    selectedHour.value = ""
    tutorName.focus()

    updateAvailableHours()
    

  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }

 
}



