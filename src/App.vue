<script setup>
import {ref} from "vue";
import Label from "./components/Label.vue";
import SelectField from "./components/SelectField.vue";
import {longOptions, moodOptions, occasionOptions} from "./data/options.js";
import LoadingIndicator from "./components/LoadingIndicator.vue";
import {useLoading} from "./composables/useLoading";
import {useHeadlinesLoading} from "./composables/useHeadlinesLoading";
import {useOpenAI} from "./composables/useOpenAI";

const form = ref({
  who: '',
  from: '',
  mood: '',
  occasion: '',
  long: ''
});

const {headline, loadingHeadlines} = useHeadlinesLoading("Hjælp til talen");

const result = ref('');
const {loading, setLoading} = useLoading();
const error = ref('');

const handleSubmit = async () => {
  const headlinesLoading = loadingHeadlines();
  result.value = "";
  setLoading(true);
  let text = `Write a speach to ${form.value.who}. The occasion is a ${form.value.occasion}. The length should be ${form.value.long} and the mood should be ${form.value.mood}. The speach is from ${form.value.from}. Write it in danish.`;

  await useOpenAI(text).then((res) => {
    error.value = "";
    setLoading(false);
    result.value = res;
  }).catch((err) => {
    console.log(err);
    error.value = "Der skete en fejl. Prøv igen senere.";
  }).finally(() => {
    clearInterval(headlinesLoading);
    headline.value = "Færdig!";
    setLoading(false);
  });

}
</script>

<template>
  <div class="min-h-screen py-12 flex items-center justify-center bg-gray-900 text-white">
    <div class="max-w-sm lg:max-w-md px-4">
      <h1 class="text-center text-3xl md:text-6xl font-semibold mb-12" v-text="headline"></h1>
      <form @submit.prevent="handleSubmit" v-if="!result && !loading">
        <div class="flex flex-wrap space-y-4 items-end">
          <div class="w-full">
            <Label for="navn">Hvem er talen til?</Label>
            <input type="text" id="navn" class="h-10 text-gray-800 w-full" placeholder="Skriv navn..." v-model="form.who">
          </div>
          <div class="w-full">
            <Label for="from">Hvem er talen fra?</Label>
            <input type="text" id="from" class="h-10 text-gray-800 w-full" placeholder="Skriv navn..." v-model="form.from">
          </div>
          <div class="w-full">
            <Label for="mood">I hvilken anledning?</Label>
            <SelectField
                :value="form.occasion"
                @update:value="form.occasion = $event"
                default-value="Vælg anledning..."
                :options="occasionOptions"
            />
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
      <LoadingIndicator :loading="loading" />
      <p v-html="result" v-if="result" class="mt-12"></p>
      <p v-html="error" v-if="error" class="mt-12 text-center"></p>
    </div>
  </div>
</template>
