# Code Reuse in ES6

(This is a code sample from [this blog post](oren.github.io/blog/js-best-practices.html)

```js
// example for code reuse using Object.create()

let doctor = Object.assign(Object.create(drawBlood), {
  name: 'josh',
  access: 'MedicalRecords',
  specialty: 'oncologist'

  prescribe (drug) {
    return `${this.name}, ${specialty}, prescribe ${drug}.`;
  }
});
```

## Run the examples

    docker-compose build
    docker-compose run app reuse.js
