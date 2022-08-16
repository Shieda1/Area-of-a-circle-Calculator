const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofacircleRadio = document.getElementById('areaofacircleRadio');
const radiusofthecircleRadio = document.getElementById('radiusofthecircleRadio');

let areaofacircle;
const PI = Math.PI;
let radiusofthecircle = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

areaofacircleRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius of the circle';
  radiusofthecircle = v1;
  result.textContent = '';
});

radiusofthecircleRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of a circle';
  areaofacircle = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofacircleRadio.checked)
    result.textContent = `Area of a circle = ${computeAreaofacircle().toFixed(5)}`;

  else if(radiusofthecircleRadio.checked)
    result.textContent = `Radius of the circle = ${computeRadiusofthecircle().toFixed(5)}`;
})

// calculation

function computeAreaofacircle() {
  return PI * Math.pow(Number(radiusofthecircle.value), 2);
}

function computeRadiusofthecircle() {
  return Math.sqrt(Number(areaofacircle.value) / PI);
}