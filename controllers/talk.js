const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


exports.talk = async (req, res) => {
    console.log("i talked")

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: req.query.query,
        temperature: 0,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return res.send(response)
}