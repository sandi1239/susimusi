import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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

    const web3formsKey = Deno.env.get("WEB3FORMS_ACCESS_KEY");
    
    if (!web3formsKey) {
      throw new Error("WEB3FORMS_ACCESS_KEY not configured");
    }

    // Send email using Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: web3formsKey,
        subject: `Novo povpraševanje od ${firstName} ${lastName}`,
        from_name: `${firstName} ${lastName}`,
        to: "jerneja@susimusi.si",
        name: `${firstName} ${lastName}`,
        email: email,
        phone: phone,
        message: message,
        botcheck: false,
      }),
    });

    const result = await response.json();
    console.log("Web3Forms response:", result);

    if (!result.success) {
      throw new Error(result.message || "Failed to send email");
    }

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
