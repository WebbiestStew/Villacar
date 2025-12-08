import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ cookies }) => {
  cookies.delete('admin_token', { path: '/' });
  
  return new Response(JSON.stringify({ 
    success: true,
    message: 'Logged out successfully'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
