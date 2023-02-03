
hit0 = document.getElementById('number-of-apartements')
hit0.style.display ='none'
hit1 = document.getElementById('number-of-floors')
hit1.style.display ='none'
hit2 = document.getElementById('maximum-of-occupancy')
hit2.style.display ='none'
hit3 = document.getElementById('number-of-elevators')
hit3.style.display ='none'

const dropdown = document.getElementById('dropdown')

//input variables
let app = document.getElementById('apartements-input').value;
let floor = document.getElementById('floors-input').value;
let occup = document.getElementById('occupancy-input').value;
let ascRequis = document.getElementById('elevators-input').value;


// Les value peuve etre
// building type
// residential
// commercial
// industrial

dropdown.addEventListener('change',  (event) => {
    if (dropdown.value == 'residential') {
        hit0.style.display = ('block');
        hit1.style.display = ('block');
        hit2.style.display = ('none');
        hit3.style.display = ('none');
        calculateResidential(app, floor);
        document.getElementById('elevators-required').value = calculateResidential(app, floor);
    }  else if (dropdown.value =='commercial') {
        hit0.style.display = ('none');
        hit1.style.display = ('block');
        hit2.style.display = ('block');
        hit3.style.display = ('none');
        calculateCommmercial(floor, occup);
        document.getElementById('elevators-required').value = calculateCommmercial(floor, occup);
    }  else if (dropdown.value =='industrial') {
        hit0.style.display = ('none');
        hit1.style.display = ('none');
        hit2.style.display = ('none');
        hit3.style.display = ('block');
        document.getElementById('elevators-required').value = calculateIndustrial(ascRequis);
    }  else if (dropdown.value =='buildingType') {
        hit0.style.display = ('none');
        hit1.style.display = ('none');
        hit2.style.display = ('none');
        hit3.style.display = ('none');
    }
})

// residential.addEventListener('input')

function calculateResidential(app, floor) {
    app = document.getElementById('apartements-input').value;
    floor = document.getElementById('floors-input').value;
    const AppPerFloor = Math.ceil(app/floor)
    const ascRequis = Math.ceil(AppPerFloor/6)
    const columnAditionel = Math.ceil(floor/20)
    const vraiAscenseurRequis = ascRequis * columnAditionel
    return vraiAscenseurRequis;
}


function calculateCommmercial(floor, occup) {
    floor = document.getElementById('floors-input').value;
    occup = document.getElementById('occupancy-input').value;
    const occupantMax = floor * occup
    const ascRequis = Math.ceil(occupantMax/200)
    const coloneNumber = Math.ceil(floor/10)
    const vraiAscenseurRequis = ascRequis + coloneNumber
    return vraiAscenseurRequis;

}

function calculateIndustrial(ascRequis) {
    ascRequis = document.getElementById('elevators-input').value;

    const vraiAscenseurRequis = ascRequis
    return vraiAscenseurRequis
    
} 
  //3 nouveau add listener for radio click

  let standard = document.getElementById('stand');
  let premium = document.getElementById('prem');
  let excelium = document.getElementById('exce');
  let priceOfElevators = document.getElementById('price-of-elevators');
  //variable pour frais dinstallation
  let instalationField = document.getElementById('instalation-price')

  standard.addEventListener('click', function () {
    let elevRequire = document.getElementById('elevators-required').value;
    let price = 8000;
    let percentage = 0.10;
    priceOfElevators.value = price 
    elevRequire * price * percentage

  });

  premium.addEventListener('click', function () {
    let price = 12000;
    let percentage = 0.15;
    priceOfElevators.value = price + price * percentage;
  });

  excelium.addEventListener('click', function (){
    let price = 15000;
    let percentage = 0.20;
    priceOfElevators.value = price + price * percentage;
  });

let numberOfLifts = document.getElementById('elevators-required').value;
let installationCost = document.getElementById('instalation-price').value;

let totalCost = (priceOfElevators * numberOfLifts) + installationCost;

document.getElementById('total-price').value = totalCost;