const moment=require('moment')

function plantTemp(plant){
  return `
  <div class="col s4">
      <div class="card medium blue">
      <div class="card-content activator blue darken-1 waves-effect waves-block waves-light">
        <span class="card-title activator grey-text text-darken-4">${plant.scientific_name}<i class="material-icons right">more_vert</i></span>
      </div>
        <a class="waves-effect waves-light btn white-text" href="#" style="position: absolute; bottom: 30px; right: 30px;">Remove</a>
      <div class="card-reveal">
        <span class="card-title black-text">${plant.scientific_name}<i class="material-icons right">close</i></span>
        <p style="position: absolute; left: 10%;">
          Symbol: ${plant.data.symbol}<br>
          Location: ${plant.data.state}<br>
          Category: ${plant.data.category}<br>
          Duration: ${plant.data.duration}<br>
          Habit: ${plant.data.habit}<br>
          Invasive: ${plant.data.invasive}<br>
          Grow Period: ${plant.data.growPeriod}<br>
          Flower Color: ${plant.data.flowerColor}<br>
          Flower Conspicuous: ${plant.data.flowerConsp}<br>
          Foliage Color: ${plant.data.foliageColor}<br>
          Coarse Soil: ${plant.data.coarseSoil}<br>
          Medium Soil: ${plant.data.medSoil}<br>
          Fine Soil: ${plant.data.fineSoil}<br>
          Moisture: ${plant.data.moisture}<br>
          Shade: ${plant.data.shade}<br>
          Temperature Minimum: ${plant.data.tempMin} °F<br>
          Bloom Period: ${plant.data.bloomPeriod}<br>
          Commercial Availability: ${plant.data.commAvailability}
      </p>
      </div>
    </div>
  </div>

  `
}

//returns either line 'Created ___ ago' or 'Updated ___ ago' depending on if the data has been updated or not
function timeFrom(board){
  const time;
  const timeLine;
  if(board.created_at===board.updated_at){ // board has yet to be updated
    time = moment(board.created_at).toNow(true);
    timeLine = `Created ${time} ago`;
  } else { //board has been updated
    time = moment(board.updated_at).toNow(true);
    timeLine = `Updated ${time} ago`;
  }
  return timeLine;
}

module.exports = {
  plantTemp
}
