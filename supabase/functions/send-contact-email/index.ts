import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, phone, email, message }: ContactRequest = await req.json();

    console.log("Received contact form submission:", { firstName, lastName, phone, email });

    // Send email to business owner
    const emailResponse = await resend.emails.send({
      from: "ŠUŠI MUŠI <onboarding@resend.dev>",
      to: ["jerneja@susimusi.si"],
      subject: `Novo povpraševanje od ${firstName} ${lastName}`,
      html: `
        <h1>Novo povpraševanje s spletne strani</h1>
        <p><strong>Ime in priimek:</strong> ${firstName} ${lastName}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>E-pošta:</strong> ${email}</p>
        <p><strong>Sporočilo:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">To sporočilo je bilo poslano prek kontaktnega obrazca na spletni strani susimusi.si</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
