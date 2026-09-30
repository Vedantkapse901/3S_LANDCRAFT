import { NextRequest, NextResponse } from "next/server";

export type EnquiryPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredContact?: "Phone" | "Email" | "WhatsApp";
  interest?: string;
};

// Placeholder handler — validates shape and returns 200 so the form works
// end-to-end. Wire this up to a real CRM/email/notification backend before
// launch; nothing is persisted or sent yet.
export async function POST(req: NextRequest) {
  let body: Partial<EnquiryPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  if (!body.name || !body.phone || !body.email) {
    return NextResponse.json(
      { ok: false, error: "Name, phone and email are required" },
      { status: 422 }
    );
  }

  // TODO: forward `body` to the real enquiry backend (CRM / email / webhook).
  console.log("[enquiry:placeholder]", body);

  return NextResponse.json({ ok: true });
}
