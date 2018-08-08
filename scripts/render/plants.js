const templates = require('../templates/template')
const request = require('../requests/requests.js')

let page = 1

let searchState = {
  scientific_name: "",
  data: {
    bloomPeriod: "",
    category: "",
    coarseSoil: "",
    duration: "",
    fineSoil: "",
    flowerColor: "",
    flowerConsp: "",
    growPeriod: "",
    habit: "",
    invasive: "",
    medSoil: "",
    moisture: "",
    shade: "",
    tempMin: "",
  }
}

if (window.location.href.indexOf('/views/plants.html') > -1) {
  document.addEventListener('DOMContentLoaded', async function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {
      option: ""
    });
    formListeners()
    const somePlants = await getSomePlants(searchState, page)
    renderPlants(somePlants)
  });
}


function formListeners () {
  // getPlants()
  searchName()
  searchDuration()
  searchHabit()
  searchGrowth()
  searchFlowerColor()
  searchFlowerConsp()
  searchSoil()
  searchMoisture()
  searchShade()
  searchMinTemp()
  searchBloom()
  pagination()
}

async function getPlants() {
  const allPlants = await request.plantRequest()
  console.log(allPlants.data.response)
  // const tempHigh = allPlants.data.response.map(plant => {
  //   if (plant.data.tempMin[0] === '-') {
  //     return -parseInt(plant.data.tempMin.slice(1))
  //   } else {
  //     return parseInt(plant.data.tempMin)
  //   }
  // })
  // console.log(Math.min(...tempHigh))
  // const allBloom = allPlants.data.response.map(plant => {
  //   return plant.data.bloomPeriod
  // })
  // const uniqBloom = allPlants.data.response.filter((plant, index, self) => {
  //   return plant.data.bloomPeriod === 'Indeterminate'
  // })
  // console.log(uniqBloom)
  return allPlants.data.response
}

async function getSomePlants (searchState, page) {
  const somePlants = await request.plantPage(searchState, page)
  return somePlants
}

function searchName() {
  const nameInput = document.querySelector('#scientific-name')
  nameInput.addEventListener('blur', (e) => {
    searchState.scientific_name = nameInput.value
    setTimeout( () => {
      search(searchState, page)
    }, 2000)
  })
}

function searchDuration() {
  const durInput = Array.from(document.querySelectorAll('.duration-radio-div input'))
  durInput.forEach(input => input.addEventListener('click', (e) => {
    console.log(e.target.value)
    searchState.data.duration = e.target.value
    setTimeout( () => {
      search(searchState, page)
    }, 2000)
  }))
}

function searchHabit () {
  const habitInput = document.querySelector('.growth-habit select')
  habitInput.addEventListener('change', () => {
    console.log(habitInput.value)
    searchState.data.habit = habitInput.value
    setTimeout( () => {
      search(searchState, page)
    }, 2000)
  })
}

function searchGrowth () {
  const growthInput = document.querySelector('.active-growth-period select')
  growthInput.addEventListener('change', () => {
    console.log(growthInput.value)
    searchState.data.growPeriod = growthInput.value
    setTimeout( () => {
      search(searchState, page)
    }, 2000)
  })
}

function searchFlowerColor () {
  const colorInput = document.querySelector('.flower-color select')
  colorInput.addEventListener('change', () => {
    console.log(colorInput.value)
    searchState.data.flowerColor = colorInput.value
    setTimeout( () => {
      search(searchState, page)
    }, 2000)
  })
}

function searchFlowerConsp() {
  const conspInput = Array.from(document.querySelectorAll('.flower-conspicuous-div input'))
  conspInput.forEach(input => input.addEventListener('click', (e) => {
    console.log(e.target.value)
    searchState.data.flowerConsp = e.target.value
    setTimeout( () => {
      search(searchState, page)
    }, 2000)
  }))
}

function searchSoil() {
  const soilInput = Array.from(document.querySelectorAll('.soil-type input'))
  soilInput.forEach(input => input.addEventListener('click', (e) => {
    console.log(e.target.value)
    if (e.target.value === 'Medium') {
      searchState.data.medSoil = "Yes"
      searchState.data.coarseSoil = ""
      searchState.data.fineSoil = ""
    } else if (e.target.value === 'Course') {
      searchState.data.medSoil = ""
      searchState.data.coarseSoil = "Yes"
      searchState.data.fineSoil = ""
    } else if (e.target.value === 'Fine') {
      searchState.data.medSoil = ""
      searchState.data.coarseSoil = ""
      searchState.data.fineSoil = "Yes"
    } else {
      searchState.data.medSoil = ""
      searchState.data.coarseSoil = ""
      searchState.data.fineSoil = ""
    }
    setTimeout( () => {
      search(searchState, page)
    }, 2000)
  }))
}

function searchMoisture() {
  const moistureInput = document.querySelector('.moisture-level select')
  moistureInput.addEventListener('change', () => {
    console.log(moistureInput.value)
    searchState.data.moisture = moistureInput.value
    setTimeout( () => {
      search(searchState, page)
    }, 2000)
  })
}

function searchShade() {
  const shadeInput = Array.from(document.querySelectorAll('.shade-tolerance input'))
  shadeInput.forEach(input => input.addEventListener('click', (e) => {
    console.log(e.target.value)
    searchState.data.shade = e.target.value
    setTimeout( () => {
      search(searchState, page)
    }, 2000)
  }))
}

function searchMinTemp() {
  const tempInput = document.querySelector('.range-field input')
  tempInput.addEventListener('change', () => {
    console.log(tempInput.value)
    searchState.data.tempMin = tempInput.value
    setTimeout( () => {
      search(searchState, page)
    }, 2000)
  })
}

function parseNegInt(string) {
  if (string[0] === '-') {
    return -parseInt(string.slice(1))
  } else {
    return parseInt(string)
  }
}

function searchBloom() {
  const bloomInput = document.querySelector('.bloom-period select')
  bloomInput.addEventListener('change', () => {
    console.log(bloomInput.value)
    searchState.data.bloomPeriod = bloomInput.value
    setTimeout( () => {
      search(searchState, page)
    }, 2000)
  })
}

function pagination () {
  const pages = Array.from(document.querySelectorAll('.pagination a'))
  pages.forEach(pageNum => pageNum.addEventListener('click', (e) => {
    e.preventDefault()
    const number = e.target.innerHTML
    pages.forEach(pageNum => {
      if (pageNum.parentNode.classList.contains('active')) {
        pageNum.parentNode.classList.remove('active')
      }
    })
    e.target.parentNode.classList.add('active')
    console.log(number)
    page = number
    console.log(page)
    search(searchState, page)
  }))
}

async function search (searchState, page) {
  const somePlants = await getSomePlants(searchState, page)
  // const allPlants = await getPlants()
  // const filterPlants = allPlants.filter(plant => {
  //   if (searchState['scientific_name'] !== "") {
  //     // console.log(plant['scientific_name'].includes(searchState['scientific_name']))
  //     if (!plant['scientific_name'].includes(searchState['scientific_name'])) return false
  //   }
  //   if (searchState.data['habit'] !== "") {
  //     if (!plant.data['habit'].includes(searchState.data['habit'])) return false
  //   }
  //   if (searchState.data['growPeriod'] !== "") {
  //     if (!plant.data['growPeriod'].includes(searchState.data['growPeriod'])) return false
  //   }
  //   if (searchState.data['flowerColor'] !== "") {
  //     if (!plant.data['flowerColor'].includes(searchState.data['flowerColor'])) return false
  //   }
  //   if (searchState.data['tempMin'] !== "") {
  //     if (parseNegInt(plant.data['tempMin']) > parseNegInt(searchState.data['tempMin'])) return false
  //   }
  //   for (let key in searchState.data) {
  //     if (key !== 'habit' && key !== 'growPeriod' && key !== 'flowerColor' && key !== 'tempMin') {
  //       let filterValue = searchState.data[key]
  //       if (filterValue !== "" && plant.data[key] !== filterValue) return false
  //     }
  //   }
  //   return true
  // })
  renderPlants(somePlants)
}

function renderPlants (array) {
  var container = document.querySelector('.plant-cards-container')
  container.innerHTML = ""
  array.data.response.forEach(plant => {
    container.innerHTML += templates.cardTemplate(plant)
  })
}
