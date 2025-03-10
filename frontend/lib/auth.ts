// This is a basic authentication helper for the GitHub OAuth flow

// Define environment variables for Supabase (you'll need to add these to your .env.local file)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Function to initiate GitHub authentication
export const signInWithGitHub = () => {
  // In a real implementation, you'd use the Supabase client
  // This is just a placeholder for now
  window.location.href = `${SUPABASE_URL}/auth/v1/authorize?provider=github&redirect_to=${window.location.origin}/auth/callback`;
};

// Function to handle the authentication callback
export const handleAuthCallback = async () => {
  // Get access token from URL fragment or query parameter
  // This is a simplified version; in reality, you'd extract tokens from the URL or use Supabase client
  const urlParams = new URLSearchParams(window.location.search);
  const accessToken = urlParams.get('access_token');
  
  if (!accessToken) {
    throw new Error('No access token found');
  }
  
  // Call your backend to verify the token and get user info
  const response = await fetch('http://localhost:8000/api/auth/github-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ access_token: accessToken }),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Authentication failed');
  }
  
  const data = await response.json();
  
  // Store user data in localStorage or use a state management solution
  localStorage.setItem('user', JSON.stringify(data.user));
  localStorage.setItem('token', data.token);
  
  return data;
};