# JavaScript Best Practices

(This is a code sample from [this blog post](http://oren.github.io/blog/js-best-practices.html))

Demo of code reuse via two techniues:

* prototypal inheritance
* concatenative inheritance

## delegate prototype

```js
// example for code reuse using Object.create()

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

// first argument is the prototype that we want to reuse
// it's called delegate prototype
doctor = Object.assign(Object.create(drawBlood), doctor);

var result = doctor.prescribe('tylenol');
console.log(result);
result = doctor.draw();
console.log(result);

// josh, oncologist, prescribes tylenol.
// josh, oncologist, draws blood.
```

## concatenative inheritance

```js
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
```

## Setup

    docker-compose build
    docker-compose run app npm install

## Run the exampels

    docker-compose run app node prototypal.js
    docker-compose run app node concatenative.js

For running in the browser

    docker-compose run app node node_modules/.bin/browserify reuse.js -t babelify --outfile bundle.js

## eslint

    docker-compose run app node_modules/.bin/eslint reuse.js

## Misc

## About the different NPM packages

We need `browserify`, `babel`, and `babelify` for running this code in the browser.  
`core-js` is needed for [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

## New syntax for methods

ES6 allows a shorter version for methods: `draw()` istead of `draw: function() {}`  
Read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions).
