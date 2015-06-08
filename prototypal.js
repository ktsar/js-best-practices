// example for code reuse using Object.create()
'use strict';

require('core-js'); // needed for Object.assign()

let canDraw = {
  drawBlood () { // ES6 concise method
   console.log(`${this.name}, ${this.specialty}, draws blood.`);
  }
};

let doctor = {
  name: 'josh',
  specialty: 'oncologist',

  // a short-hand way to declare a function within an object literal
  prescribe (drug) {
    console.log(`${this.name}, ${this.specialty}, prescribes ${drug}.`);
  }
};

// first argument is the prototype that we want to reuse
// it's called delegate prototype
doctor = Object.assign(Object.create(canDraw), doctor);

doctor.prescribe('tylenol');
doctor.drawBlood();

// josh, oncologist, prescribes tylenol.
// josh, oncologist, draws blood.
