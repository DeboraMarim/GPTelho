import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(config);

export default async function GPTelho(arrg) {
  const prompt = `Gerar uma frase positiva ou um conselho para: ${arrg}`;

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 100,
    //   stop: ["\n"]
    });
    return completion.data.choices[0].text.trim();
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}
