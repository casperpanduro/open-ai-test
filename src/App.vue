<script setup>
import {ref} from "vue";
import Label from "./components/Label.vue";
import SelectField from "./components/SelectField.vue";

const form = ref({
  who: '',
  mood: '',
  long: ''
});

const longOptions = [
  {value: 'short', text: 'Kort'},
  {value: 'medium', text: 'Mellem'},
  {value: 'long', text: 'Lang'}
]

const moodOptions = [
  {
    value: 'happy',
    text: 'Glad'
  },
  {
    value: 'sad',
    text: 'Trist'
  },
  {
    value: 'angry',
    text: 'Vred'
  },
  {
    value: 'confused',
    text: 'Forvirret'
  },
  {
    value: 'bored',
    text: 'Træt'
  },
  {
    value: 'funny',
    text: 'Sjov'
  },
  {
    value: 'serious',
    text: 'Alvorlig'
  }
]

const handleSubmit = () => {
  let text = `Write a speach to ${form.value.who}. The length should be ${form.value.long} and the mood should be ${form.value.mood}.`;
  alert(text);
}

</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div class="max-w-sm">
      <h1 class="text-center text-6xl font-semibold mb-12">Hjælp til talen</h1>
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-wrap space-y-4 items-end">
          <div class="w-full">
            <Label for="navn">Hvem er talen til?</Label>
            <input type="text" id="navn" class="h-10 text-gray-800 w-full" placeholder="Skriv navn..." v-model="form.who">
          </div>
          <div class="w-full">
            <Label for="mood">Hvilket humør skal talen være i?</Label>
            <SelectField
              :value="form.mood"
              @update:value="form.mood = $event"
              default-value="Vælg humør.."
              :options="moodOptions"
            />
          </div>
          <div class="w-full">
            <Label for="long">Skal det være en kort eller lang tale?</Label>
            <SelectField
                :value="form.long"
                @update:value="form.long = $event"
                default-value="Vælg længde.."
                :options="longOptions"
            />
          </div>
          <button class="bg-blue-500 h-10 text-white font-semibold px-8 mt-8 w-full" type="submit">Skriv udkast</button>
        </div>
      </form>
    </div>
  </div>
</template>
