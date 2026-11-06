const OPENAI_API_KEY = "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";
const OPENAI_FALLBACK_KEY = "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";

export async function askOpenAI(prompt) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY || OPENAI_FALLBACK_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content;
}
