"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AuthCallbackPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // This handles the OAuth redirect with code exchange
    const handleAuthRedirect = async () => {
      try {
        setLoading(true);
        
        // Get the URL hash
        const hash = window.location.hash;
        
        if (hash && hash.includes('access_token')) {
          // For older browser compatibility or certain OAuth flows
          // that return tokens in hash fragment
          const accessToken = extractTokenFromHash(hash);
          if (accessToken) {
            await handleSession(accessToken);
            return;
          }
        }
        
        // For code flow - allow Supabase client to handle URL params
        const { data, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) throw sessionError;
        
        if (data.session) {
          await handleSession(data.session.access_token);
        } else {
          // Try to exchange code for token using the URL
          const { error: signInError } = await supabase.auth.exchangeCodeForSession(
            window.location.search
          );
          
          if (signInError) throw signInError;
          
          // Get session again after code exchange
          const { data: refreshedData } = await supabase.auth.getSession();
          
          if (refreshedData.session) {
            await handleSession(refreshedData.session.access_token);
          } else {
            throw new Error('No session found after code exchange');
          }
        }
      } catch (err: any) {
        console.error('Auth error:', err);
        setError(err.message || 'Authentication failed');
      } finally {
        setLoading(false);
      }
    };
    
    const extractTokenFromHash = (hash: string) => {
      // Extract access_token from URL hash
      const match = hash.match(/access_token=([^&]*)/);
      return match ? match[1] : null;
    };

    const handleSession = async (accessToken: string) => {
      try {
        // Get user data to determine provider
        const { data: { user } } = await supabase.auth.getUser(accessToken);
        
        if (!user) throw new Error('No user data found');
        
        // Determine the auth provider
        const provider = user.app_metadata?.provider || 'unknown';
        
        // Call the appropriate backend endpoint
        const endpoint = provider === 'google' 
          ? 'http://localhost:8000/api/auth/google-auth/' 
          : 'http://localhost:8000/api/auth/github-auth/';
        
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            access_token: accessToken 
          }),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Authentication failed');
        }
        
        // After successful authentication and getting user data from backend
localStorage.setItem('user', JSON.stringify(data.user));
localStorage.setItem('hasAccount', 'true');

// Try a different approach to notify components of localStorage changes
// This is a common workaround since storage events only fire for other tabs/windows
const key = 'user';
const oldValue = localStorage.getItem(key);
localStorage.setItem(key, oldValue || '{}'); // Set to same value to avoid actual changes
localStorage.setItem(key, JSON.stringify(data.user)); // Set it back
        
        router.push('/');
      } catch (error) {
        console.error('Session handling error:', error);
        throw error;
      }
    };

    handleAuthRedirect();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Authenticating...</h1>
          <p className="mt-2 text-gray-600">Please wait while we complete your sign-in.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
          <p>Authentication error: {error}</p>
          <button 
            onClick={() => router.push('/auth/login')}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Authentication successful!</h1>
        <p className="mt-2 text-gray-600">Redirecting you...</p>
      </div>
    </div>
  );
}