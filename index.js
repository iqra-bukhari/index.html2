import { GoogleGenAI } from '@google/genai';
import type { Interactions } from '@google/genai';

const ai = new GoogleGenAI({
    apiKey: process.env['GEMINI_API_KEY'],
});

const tools: Interactions.Tool[] = [
    {
        type: 'google_search',
    },
];

const generationConfig = {
    max_output_tokens: 65536,
    thinkingLevel: 'medium',
};

async function main() {
    const interaction = await ai.interactions.create({
        model: 'models/gemini-3.5-flash',
        input: 'INSERT_INPUT_HERE',
        system_instruction: 'aik asa Ai bna k do jis sy khud he videos bn jyn',
        tools: tools,
        generation_config: generationConfig,
    });

    console.log(interaction.steps?.at(-1));
}

main();


