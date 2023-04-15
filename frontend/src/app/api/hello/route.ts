
export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL