// example for code reuse using Object.create()
'use strict';

require('core-js'); // needed for Object.assign()

let drawBlood = {
  access: 'waitingRoom',
  draw () {
    return `${this.name}, ${this.specialty}, draws blood.`;
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

doctor = Object.assign(Object.create(drawBlood), doctor);

var result = doctor.prescribe('tylenol');
console.log(result);
result = doctor.draw();
console.log(result);

// josh, oncologist, prescribes tylenol.
// josh, oncologist, draws blood.
