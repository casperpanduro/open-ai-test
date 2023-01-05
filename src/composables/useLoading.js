import {ref} from "vue";

export const useLoading = () => {
    const loading = ref(false);
    const setLoading = (value) => {
        loading.value = value;
    };

    return {
        loading,
        setLoading
    };
}
