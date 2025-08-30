import dayjs from "dayjs"


const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")


export function schedulesShow({ dailySchedules }){
  try {
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      item.setAttribute("data-id", schedule.id)

      const firstLine = document.createElement("div")
      firstLine.classList.add("first-line")
      
      const time = document.createElement("strong")
      time.textContent = dayjs(schedule.when).format("HH:mm")
      
      const petName = document.createElement("span")
      petName.classList.add("pet-name")
      petName.textContent =  schedule.pet
      
      const ownerName = document.createElement("span")
      ownerName.classList.add("owner-name")
      ownerName.textContent =  schedule.tutor
      
      firstLine.append(time, petName, ownerName)
      
      const service = document.createElement("span")
      service.classList.add("service")
      service.textContent =  schedule.service
      
      const remove = document.createElement("span")
      remove.classList.add("remove")
      remove.textContent = "Remover agendamento"
      
      item.append(firstLine, service, remove)
      

      const hour = dayjs(schedule.when).hour()


      if(hour <= 12){
        periodMorning.appendChild(item)
      } else if(hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })

     
    
  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
    
  }

}