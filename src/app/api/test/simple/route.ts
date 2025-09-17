export const runtime = 'edge' as const;

// 你的其他 API 路由逻辑...
export async function GET() {
  return new Response('Hello from Edge Runtime!', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
    
