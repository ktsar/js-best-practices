// example for code reuse using Object.create()
require('core-js');

let doctor = Object.assign(Object.create(drawBlood), {
  name: 'josh',
  access: 'MedicalRecords',
  specialty: 'oncologist'

  prescribe (drug) {
    return `${this.name}, ${specialty}, prescribe ${drug}.`;
  }
});

doctor.prescribe('tylenol');
doctor.drawBlood();
