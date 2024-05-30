# Vue 3 + Vite example app consuming a custom web component from an external library to demonstrate v-model usage

We have two v-model directives bound to the same data property. Vue.js cannot detect property addition or deletion, so when I added a new property to the object after it has been created, Vue was not able to make that new property reactive.

By using a getter, we're ensuring that Vue.js can track the dependencies of the computed property and update the DOM whenever the data changes. A getter function will be reactive and will re-evaluate its return value whenever a reactive property it depends on changes.

In this case, the getter is returning the value of a data property, and we're using v-model with that getter, so that Vue.js will be able to track when the data property changes and update the DOM accordingly.
