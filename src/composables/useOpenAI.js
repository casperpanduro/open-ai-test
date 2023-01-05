import {Configuration, OpenAIApi} from "openai";

export const useOpenAI = async (text) => {
    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPEN_AI_KEY
    });

    console.log(import.meta.env);

    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        temperature: 0.3,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });

    return response.data.choices[0].text;
}
