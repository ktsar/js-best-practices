// example for concatenative inheritance using Object.assign

'use strict';

require('core-js'); // needed for Object.assign()

let canDrawBlood = {
  drawBlood () { // ES6 concise method
   console.log(`${this.name}, ${this.specialty}, draws blood.`);
  }
};

let canTestSugar = {
  testSugar () {
    console.log(`${this.name}, ${this.specialty}, test sugar level.`);
  }
}

let doctor = {
  name: 'josh',
  specialty: 'oncologist',

  // a short-hand way to declare a function within an object literal
  prescribe (drug) {
    console.log(`${this.name}, ${this.specialty}, prescribes ${drug}.`);
  }
};

// copying all of the properties in testSugarLevel, drawBlood, and doctor.
// This technique is called concatenative inheritance, and the prototypes you inherit from are sometimes referred to as exemplar prototypes, which differ from delegate prototypes in that you copy from them, rather than delegate to them.
// it's not sharing the memory as in delegate prototype

// note: assign mutate the first argument
doctor = Object.assign({}, canTestSugar, canDrawBlood, doctor);

doctor.prescribe('tylenol');
doctor.drawBlood();
doctor.testSugar();

// josh, oncologist, prescribes tylenol.
// josh, oncologist, draws blood.
// josh, oncologist, test sugar level.
