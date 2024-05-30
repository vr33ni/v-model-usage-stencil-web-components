<script>

import { mapMutations } from 'vuex'

export default {
  computed: {
  displayNameComputed: {
    get() {
      return this.$store.getters['tools/displayName'];
    },
    set(value) {
      this.setDisplayName(value);
    }
  }
},
watch: {
  displayNameComputed(newVal, oldVal) {
    if (newVal !== oldVal) {
      console.log('displayNameComputed changed to: ', newVal);
    }
  }
},
  methods: {
    ...mapMutations({
      setDisplayName: 'tools/setDisplayName'
    }),
    updateDisplayName(newDisplayName) {
      this.setDisplayName(newDisplayName);
    },
    handleInput(newDisplayName) {
      // Perform your action here
      console.log('Input changed to: ', newDisplayName);
    }
  }

}
</script>

<template>
  <form>
    <div class="form-row">
      <div class="row">
        <div class="form-group col-md-6 mb-2">
          <ifx-text-field required id="tool-name" v-model="displayNameComputed" size="s" @input="handleInput"
            placeholder="Enter the tool name">Tool
            Name</ifx-text-field>
          <p> Display Name: {{ displayNameComputed }}
          </p>
        </div>

        <div class="form-group col-md-6 mb-2">
          <ifx-text-field required v-model="displayNameComputed" size="s" placeholder="Enter Artifact ID">Artifact
            Id</ifx-text-field>

        </div>
      </div>
    </div>
  </form>

</template>
