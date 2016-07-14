import $ from 'jquery';
import Person from '../models/person';

function savePerson(){
  let $newPerson=$(`
    <div class="personContainer">
    <h2>The Person Saver!</h2>
    <input class="firstName" placeholder="Enter firstname">
    <input class="lastName" placeholder="Enter last name">
    <input class="address" placeholder="Enter address">
    <input class="phoneNumber" placeholder="Enter phone number">
    <button type="button" name="button">Submit</button>
    </div>
    `);
    $('.container').append($newPerson);
    $newPerson.find('button').on('click', function(e){
      e.preventDefault();
      let person = new Person({
        firstName: $('.firstName'),
        lastName: $('.lastName'),
        address: $('.addres'),
        phoneNumber: $('.phoneNumber')
      });
      person.save(null,{
        success: function(response){
          console.log('You saved a person...figuratively');//<---THIS logged out, but not in blogsaver.js
        }
      });

    });
    return $newPerson;
  }
  export default savePerson;
