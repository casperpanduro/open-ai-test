import {Configuration, OpenAIApi} from "openai";

export const useOpenAI = async (text) => {
    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPEN_AI_KEY
    });

    const openai = new OpenAIApi(configuration);

    // Simulate error and return it
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0.3,
            max_tokens: 600,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        return response.data.choices[0].text;
    }
    catch (error) {
        throw error;
    }







}
