
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
// residential
// commercial
// industrial

dropdown.addEventListener('change', (event) => {
    console.log(dropdown.value)
    if (dropdown.value == 'building type') {
        hit0.style.display = ('none');
        hit1.style.display = ('none');
        hit2.style.display = ('none');
        hit3.style.display = ('none');
    }
    else if (dropdown.value == 'residential') {
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
    }
})