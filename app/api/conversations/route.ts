import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    organization: "org-LfWtUIONUBuBm5XKGhtzgDCd",
    apiKey: process.env.OPENAI_API_KEY,
});

const openaiInstance = new OpenAIApi(configuration); // Rename the variable to avoid conflict


export async function POST (req:any) {
    try {   
      const {userId} = auth();  
    } catch (error) {
        console.log(error);
    }
}