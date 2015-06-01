# JavaScript Best Practices

(This is a code sample from [this blog post](oren.github.io/blog/js-best-practices.html)

```js
// example for code reuse using Object.create()

let drawBlood = {
  access: 'waitingRoom',
  
  draw () {
    return `${this.name}, ${specialty}, draws blood.`;
  }
};

let doctor = Object.assign(Object.create(drawBlood), {
  name: 'josh',
  access: 'MedicalRecords',
  specialty: 'oncologist',

  prescribe (drug) {
    return `${this.name}, ${specialty}, prescribe ${drug}.`;
  }
});

// josh, oncologist, prescribes tylenol.
// josh, oncologist, draws blood.
```

## Run the examples

    docker-compose build
    docker-compose run app node reuse.js

For running in the browser

    docker-compose run app node node_modules/.bin/browserify reuse.js -t babelify --outfile bundle.js

## eslint

    docker-compose run app node_modules/.bin/eslint reuse.js

## About the different NPM packages

We need `browserify`, `babel`, and `babelify` for running this code in the browser.  
`core-js` is needed for [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
