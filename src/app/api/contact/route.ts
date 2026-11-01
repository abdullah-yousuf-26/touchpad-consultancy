import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { error: "Invalid form data." },
      { status: 400 }
    );
  }

  const data = body as Record<string, unknown>;

  const read = (key: string) =>
    typeof data[key] === "string" ? data[key].trim() : "";

  // Hidden field: ordinary visitors leave this empty.
  if (read("website")) {
    return NextResponse.json(
      { error: "Unable to submit this enquiry." },
      { status: 400 }
    );
  }

  const firstName = read("firstName");
  const lastName = read("lastName");
  const email = read("email");
  const phone = read("phone");
  const company = read("company");
  const message = read("message");

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!validEmail || /[\r\n]/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (
    firstName.length > 100 ||
    lastName.length > 100 ||
    email.length > 254 ||
    phone.length > 40 ||
    company.length > 200 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Some fields are too long. Please shorten your message." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json(
      {
        error:
          "The form is temporarily unavailable. Please email info@touchpadconsultancy.com.",
      },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { data: result, error } = await resend.emails.send({
      from,
      to: ["info@touchpadconsultancy.com"],
      replyTo: email,
      subject: "New website enquiry — TouchPad Consultancy",
      text: [
        "New website enquiry",
        "",
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Organization: ${company || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error || !result?.id) {
        console.error("Contact email delivery failed:", error);
      return NextResponse.json(
        { error: "Your message could not be submitted. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again or email info@touchpadconsultancy.com.",
      },
      { status: 500 }
    );
  }
}
