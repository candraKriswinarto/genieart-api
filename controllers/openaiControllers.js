const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration)

const generateImage = async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt)

  try {
    const response = await openai.createImage({
      prompt
    });
    const image_result = response.data.data;
    res.status(200).json({
      success: true,
      data: image_result
    });
  } catch(error) {
    console.log(error)
  }


}

module.exports = { generateImage };