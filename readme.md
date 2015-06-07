# JavaScript Best Practices

(This is a code sample from [this blog post](http://oren.github.io/blog/js-best-practices.html))

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

doctor = Object.assign(Object.create(drawBlood), doctor);

var result = doctor.prescribe('tylenol');
console.log(result);
result = doctor.draw();
console.log(result);

// josh, oncologist, prescribes tylenol.
// josh, oncologist, draws blood.
```

## Setup

    docker-compose build
    docker-compose run app npm install

## Run the exampels

    docker-compose run app node reuse.js

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
Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
