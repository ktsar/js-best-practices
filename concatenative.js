// example for concatenative inheritance using Object.assign

'use strict';

require('core-js'); // needed for Object.assign()

let drawBlood = {
  access: 'waitingRoom',
  draw () {
    return `${this.name}, ${this.specialty}, draws blood.`;
  }
};

let testSugarLevel = {
  testSugar () {
    return `${this.name}, ${this.specialty}, test sugar level.`;
  }
};

let doctor = {
  name: 'josh',
  access: 'MedicalRecords',
  specialty: 'oncologist',

  // a short-hand way to declare a function within an object literal
  prescribe (drug) {
    return `${this.name}, ${this.specialty}, prescribes ${drug}.`;
  }
};

// copying all of the properties in testSugarLevel, drawBlood, and doctor.
// This technique is called concatenative inheritance, and the prototypes you inherit from are sometimes referred to as exemplar prototypes, which differ from delegate prototypes in that you copy from them, rather than delegate to them.
// it's not sharing the memory as in delegate prototype
doctor = Object.assign(testSugarLevel, drawBlood, doctor);

var result = doctor.prescribe('tylenol');
console.log(result);
result = doctor.draw();
console.log(result);
result = doctor.testSugar();
console.log(result);

// josh, oncologist, prescribes tylenol.
// josh, oncologist, draws blood.
