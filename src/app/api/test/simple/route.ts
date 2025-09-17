// src/app/api/test/simple/route.ts
// 1. 必须在文件顶部导出 Edge Runtime 配置（不可放在函数内）
export const runtime = 'edge' as const;

// 2. 你的 API 处理逻辑（如 GET/POST 请求）
export async function GET() {
  return new Response('Success from Edge Runtime!', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}

// （可选）如果有其他请求方法（如 POST），也需正确导出
// export async function POST(req: Request) { ... }
