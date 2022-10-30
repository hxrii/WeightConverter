let num = document.getElementById('form-c');

num.addEventListener('input',(e)=>{
    e.preventDefault();
    console.log('hi');
    let gram = e.target.value;
    let ounc = 0.035 * gram;
    let kg = 0.001 * gram;
    let poun = 0.0022 *gram;

   document.getElementById('PoundsOutput').innerHTML = poun;
   document.getElementById('kgOutput').innerHTML = kg;
   document.getElementById('ounceOutput').innerHTML = ounc;

   

})


