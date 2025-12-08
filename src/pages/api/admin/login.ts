import type { APIRoute } from 'astro';

// CHANGE THIS PASSWORD! This is just a default - set your own secure password
const ADMIN_PASSWORD = 'villacar123';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { password } = await request.json();

    if (password === ADMIN_PASSWORD) {
      // Set a simple auth cookie (valid for 8 hours)
      cookies.set('admin_token', 'villacar_admin_2025', {
        path: '/',
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'lax',
        maxAge: 60 * 60 * 8 // 8 hours
      });

      return new Response(JSON.stringify({ 
        success: true,
        message: 'Login successful'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ 
        success: false,
        message: 'Invalid password. Please try again.'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false,
      message: 'Server error. Please try again.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
