// 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
import {Configuration, OpenAIApi} from "openai";

export const useOpenAI = async (question) => {
    const configuration = new Configuration({
        apiKey: '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'
    });

    const openai = new OpenAIApi(configuration);



    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: question,
        temperature: 0.9,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["<br/>"]
    });

    console.log(response.data);

    return response.data.choices[0].text;
}
