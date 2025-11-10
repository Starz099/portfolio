// src/app/api/wakatime/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  const today = new Date().toISOString().slice(0, 10);
  const url = `https://wakatime.com/api/v1/users/current/summaries?start=${today}&end=${today}`;

  const headers = {
    Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
  };

  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json({ error: errText }, { status: res.status });
    }

    const data = await res.json();
    const text: string = data?.data?.[0]?.grand_total?.text ?? "0 mins"; // example: "3 hrs 18 mins"

    return NextResponse.json({ text });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
