<template>
  <div>
    <form action="">
      <v-row>
        <v-col>
          <v-text-field outlined placeholder="First Name"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field outlined placeholder="Last Name"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-text-field
            outlined
            placeholder="Age"
            :append-icon="incrementIcon"
            type="number"
            v-model="sliderValue"
            :max="100"
            :min="0"
            class="inputAge"
            @click:append="ageSlider"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
            outlined
            placeholder="Identification Card"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field outlined placeholder="Major"></v-text-field>
        </v-col>
      </v-row>
      <v-row v-show="slider">
        <v-col>
            <label>
                <v-col>
                    Drag for your age
                </v-col>
                <v-slider v-model="sliderValue" :max="100" :step="1"></v-slider>
            </label>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field outlined placeholder="Address"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea
            outlined
            placeholder="Describe yourself.."
            v-model="text"
            :counter="wordCount"
            @input="checkWordCount"
            hint="300 characters maximum"
            persistent-hint
            :rows="5"
            :max-height="300"
            maxlength="300"
          ></v-textarea>
        </v-col>
      </v-row>
    </form>
    <br />
    <hr />
    <br />
    <v-btn block>SUBMIT</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      wordCount: 300,
      sliderValue: 50,
      incrementIcon: "mdi-arrow-down-drop-circle",
      slider: 0,
    };
  },
  methods: {
    ageSlider() {
      this.slider = 1 - this.slider;
    },
    checkWordCount() {
      let words = this.text.split(" ");
      if (this.wordCount > 300) {
        words.splice(300);
        this.text = words.join(" ");
        this.wordCount = 300;
      }
    },
  },
};
</script>

<style scoped>
.inputAge >>> input[type="number"] {
  -moz-appearance: textfield;
}
.inputAge >>> input::-webkit-outer-spin-button,
.inputAge >>> input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>