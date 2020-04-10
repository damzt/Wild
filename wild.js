/*Write you JS code here. Solve the problem described under the prices section.
*/

let nbr_adults_field = document.getElementById("nbr_adults");
let nbr_childs_field = document.getElementById("nbr_childs");
let total_price_element = document.getElementById("total_price");


document.querySelectorAll('input[type="number"]').forEach(input_field => {
  input_field.addEventListener("change", function() {
    generateTotalPrice();
  });
  input_field.addEventListener("keyup", function() {
    generateTotalPrice();
  });
});

function generateTotalPrice() {

  nbr_adults = Number(nbr_adults_field.value);
  nbr_childs = Number(nbr_childs_field.value);

 // console.log(`Adults ${nbr_adults}. Childs ${nbr_childs}`);
    
//  ((Math.sign(nbr_adults) === 1 && Math.sign(nbr_childs) === 1))

  if ((nbr_adults > 0) && (nbr_childs > 0)) {
    let total_price = (nbr_adults * 8) + (nbr_childs * 5);

    total_price_element.innerText = `${total_price}$`;
  } else {
    total_price_element.innerText = 'Please fill positive numbers !!!';
  
  }
}


