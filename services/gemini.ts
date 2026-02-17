
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const analyzeApplication = async (data: {
  revenue: string;
  objective: string;
  structure: string;
  timeline: string;
}) => {
  if (!API_KEY) return "AI Assessment Unavailable";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this strategic application for Juan Carlos Zermeño:
      Revenue: ${data.revenue}
      Objective: ${data.objective}
      Marketing Structure: ${data.structure}
      Timeline: ${data.timeline}
      
      Evaluate if they are a high-value fit. Provide a 2-sentence authority assessment.`,
    config: {
      temperature: 0.7,
      maxOutputTokens: 200,
    }
  });

  return response.text;
};
