// /app/api/test/simple/route.ts
import { NextRequest } from 'next/server';

export const runtime = 'edge';

// 定义响应类型
interface ApiResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export async function GET(request: NextRequest): Promise<Response> {
  try {
    const data = {
      message: '边缘运行时 API',
      environment: process.env.NODE_ENV,
      time: new Date().toISOString()
    };

    const response: ApiResponse = {
      success: true,
      data: data
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: 'Internal server error'
    };

    return new Response(JSON.stringify(response), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
