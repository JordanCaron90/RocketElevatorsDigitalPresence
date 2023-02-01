
hit0 = document.getElementById('number-of-apartements')
hit0.style.display ='none'
hit1 = document.getElementById('number-of-floors')
hit1.style.display ='none'
hit2 = document.getElementById('maximum-of-occupancy')
hit2.style.display ='none'
hit3 = document.getElementById('number-of-elevators')
hit3.style.display ='none'

const dropdown = document.getElementById('dropdown')

// Les value peuve etre
// building type
// residential
// commercial
// industrial

dropdown.addEventListener('change', (event) => {
    console.log(dropdown.value)
    if (dropdown.value == 'residential') {
        hit0.style.display = ('block');
        hit1.style.display = ('block');
        hit2.style.display = ('none');
        hit3.style.display = ('none');
    }  else if (dropdown.value =='commercial') {
        hit0.style.display = ('none');
        hit1.style.display = ('block');
        hit2.style.display = ('block');
        hit3.style.display = ('none');
    }  else if (dropdown.value =='industrial') {
        hit0.style.display = ('none');
        hit1.style.display = ('none');
        hit2.style.display = ('none');
        hit3.style.display = ('block');
    }  else if (dropdown.value =='buildingType') {
        hit0.style.display = ('none');
        hit1.style.display = ('none');
        hit2.style.display = ('none');
        hit3.style.display = ('none');
    }
})

function calculateResidential() {
    const app = document.getElementById('number-of-appartements').value;
    const floor = document.getElementById('number-of-floors').value;
    
    const AppPerFloor = app/floor
    const ascRequis = kkchose.Roundup (AppPerFloor/6)
    const columnAditionel = floor/20
    const vraiAscenseurRequis = ascRequis * columnAditionel
    document.getElementById('elevators-ouput').value = vraiAscenseurRequis;

}
function calculateCommmercial() {
    const floor = document.getElementById('numer-of-floors').value;
    const occup = document.getElementById('maximum-occupancy').value;

    const occupantMax = floor * occup
    const ascRequis = occupantMax/200 
    const coloneNumber = floors/10 
    const vraiAscenseurRequis = ascRequis + coloneNumber
    document.getElementById('elevators-output').value = vraiAscenseurRequis;

}

function calculateIndustrial() {
    const ascRequis = document.getElementById('number-of-elevators').value;

    const vraiAscenseurRequis = ascDemander
    const returnvalue = documment.getElementById('industrial-output').value = vraiAscenseurRequis;
    
}