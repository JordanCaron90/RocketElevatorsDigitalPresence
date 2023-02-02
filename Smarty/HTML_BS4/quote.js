
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

//output variables
let standard = document.getElementById('standard-output').value;
let premium = document.getElementById('premium-output').value;
let excelium = document.getElementById('standard-output').value;

// Les value peuve etre
// building type
// residential
// commercial
// industrial

dropdown.addEventListener('change',  (event) => {
    console.log(dropdown.value)
    if (dropdown.value == 'residential') {
        hit0.style.display = ('block');
        hit1.style.display = ('block');
        hit2.style.display = ('none');
        hit3.style.display = ('none');
        calculateResidential(app, floor);
        document.getElementById('elevators-output').value = calculateResidential(app, floor);
    }  else if (dropdown.value =='commercial') {
        hit0.style.display = ('none');
        hit1.style.display = ('block');
        hit2.style.display = ('block');
        hit3.style.display = ('none');
        calculateCommmercial(floor, occup);
        document.getElementById('elevators-output').value = calculateCommmercial(floor, occup);
    }  else if (dropdown.value =='industrial') {
        hit0.style.display = ('none');
        hit1.style.display = ('none');
        hit2.style.display = ('none');
        hit3.style.display = ('block');
        document.getElementById('elevators-output').value = calculateIndustrial(ascRequis);
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
    console.log(app)
    console.log(floor)
    const AppPerFloor = Math.ceil(app/floor)
    console.log(AppPerFloor)
    const ascRequis = Math.ceil(AppPerFloor/6)
    console.log(ascRequis)
    const columnAditionel = Math.ceil(floor/20)
    console.log('Column : ' + columnAditionel)
    const vraiAscenseurRequis = ascRequis * columnAditionel
    console.log(vraiAscenseurRequis)
    return vraiAscenseurRequis;
}


function calculateCommmercial(floor, occup) {
    floor = document.getElementById('floors-input').value;
    occup = document.getElementById('occupancy-input').value;
    console.log(floor)
    console.log(occup)
    const occupantMax = floor * occup
    console.log(occupantMax)
    const ascRequis = Math.ceil(occupantMax/200) 
    console.log(ascRequis)
    const coloneNumber = Math.ceil(floor/10) 
    console.log('Column')
    const vraiAscenseurRequis = ascRequis + coloneNumber
    console.log(vraiAscenseurRequis)
    return vraiAscenseurRequis;

}

function calculateIndustrial(ascRequis) {
    ascRequis = document.getElementById('elevators-input').value;

    const vraiAscenseurRequis = ascRequis
    return vraiAscenseurRequis
    
}

var price;
var percentage;
priceQuality.addEventListener('click', () => {
    console.log(priceQuality)
    if (priceQuality.value =='standard') {
        price = 8000
        percentage = 0.10
        document.getElementId('standard-ouput').value = price;
        //return
    } else if (priceQuality.value =='premium') {
        price = 12000
        percentage = 0.15
        document.getElementId('premium-ouput').value = price;
        //return
    } else if (priceQuality.value =='excelium') {
        price = 15000
        percentage = 0.20
        document.getElementId('excelium-ouput').value = price;
        //return
    }
     
  });