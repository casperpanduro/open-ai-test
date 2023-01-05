import {ref} from "vue";

export const useHeadlinesLoading = (initial) => {
    const headline = ref(initial);

    const stages = [
        "Starter robotten...",
        "Udarbejder...",
        "Henter data...",
        "Næsten færdig..."
    ];

    const loadingHeadlines = () => {
        let i = 0;

        return setInterval(() => {
            if(stages.length > i) {
                headline.value = stages[i];
                i++;
            }
        }, 2000);
    }

    return {
        headline,
        loadingHeadlines
    }
}
