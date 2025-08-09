

export async function GET(request: any) {
  return new Response(JSON.stringify({ message: "Hello from Next.js App Router" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}