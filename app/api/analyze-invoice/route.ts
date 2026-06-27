import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mimeType } = await req.json();

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: { url: `data:${mimeType};base64,${imageBase64}` }
            },
            {
              type: 'text',
              text: `אתה מומחה לקריאת חשבוניות בעברית.
קרא את החשבונית הזו והחזר JSON בלבד (ללא טקסט נוסף) במבנה הבא:
{
  "supplier": "שם הספק",
  "date": "תאריך בפורמט YYYY-MM-DD",
  "total": סכום_כולל_מספר,
  "vat": מעמ_מספר,
  "items": [
    {
      "name": "שם מוצר",
      "quantity": כמות_מספר,
      "unit_price": מחיר_יחידה_מספר,
      "total": סכום_שורה_מספר
    }
  ]
}`
            }
          ]
        }
      ],
      max_tokens: 2000
    });

    const text = response.choices[0].message.content || '';
    const clean = text.replace(/```json|```/g, '').trim();
    const data = JSON.parse(clean);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'שגיאה בניתוח החשבונית' }, { status: 500 });
  }
}