

import '../assets/css/radio.css'
 


function RadioButton() {
   
 
  return (
    <div>
  <label className="container" id="radiocontainer">
  <input type="radio" name="radio"/>
  <span className="checkmark" id="check"></span>
</label>

</div>
  );
}

export default RadioButton;
