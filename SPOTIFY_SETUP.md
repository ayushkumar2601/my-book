# Spotify Integration Setup Guide

## Overview
This guide will help you set up Spotify integration for your portfolio to display your currently playing music and recently played tracks.

## Required Environment Variables

Add these to your `.env.local` file:

```env
SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_client_secret_here
SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
```

## Step-by-Step Setup

### 1. Create a Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click **"Create app"**
4. Fill in the details:
   - **App name**: `My Portfolio` (or any name you prefer)
   - **App description**: `Portfolio website Spotify integration`
   - **Redirect URI**: `http://localhost:3000/api/spotify/callback` (for development)
   - **Website**: Your portfolio URL (optional)
   - Check the box for **Web API**
5. Click **"Save"**

### 2. Get Your Client ID and Client Secret

1. In your app dashboard, you'll see:
   - **Client ID** - Copy this
   - Click **"Show client secret"** - Copy this too
2. Add them to your `.env.local`:
   ```env
   SPOTIFY_CLIENT_ID=abc123...
   SPOTIFY_CLIENT_SECRET=xyz789...
   ```

### 3. Get Your Refresh Token

This is the trickiest part. You need to authorize your app to access your Spotify data.

#### Option A: Using the provided script (Recommended)

1. Create a file `scripts/get-spotify-token.js` (already exists in your project)
2. Run the script:
   ```bash
   node scripts/get-spotify-token.js
   ```
3. Follow the instructions in the terminal
4. Copy the refresh token to your `.env.local`

#### Option B: Manual method

1. Create an authorization URL with these scopes:
   ```
   https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/api/spotify/callback&scope=user-read-currently-playing%20user-read-recently-played%20user-modify-playback-state%20user-read-playback-state%20streaming
   ```
   Replace `YOUR_CLIENT_ID` with your actual client ID

2. Visit this URL in your browser
3. Authorize the app
4. You'll be redirected to a URL like: `http://localhost:3000/api/spotify/callback?code=AQD...`
5. Copy the `code` parameter from the URL

6. Exchange the code for a refresh token using this curl command:
   ```bash
   curl -X POST https://accounts.spotify.com/api/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=authorization_code" \
     -d "code=YOUR_CODE_HERE" \
     -d "redirect_uri=http://localhost:3000/api/spotify/callback" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET"
   ```

7. The response will contain a `refresh_token` - copy this to your `.env.local`

### 4. Enable Spotify Component

Uncomment the Spotify component in `src/components/bento/NotSpotify.tsx`:
- Remove the `//` at the beginning of each line
- The entire file should be active code

### 5. Add Spotify to Bento Grid

Edit `src/components/sections/BentoSection.tsx` and add the Spotify component:

```tsx
import { Spotify } from "@/src/components/bento/NotSpotify";

// In the grid, add:
<div className="bg-card rounded-xl shadow-md border border-edge overflow-hidden min-h-[200px] md:col-span-1">
  <Spotify />
</div>
```

### 6. Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Open your portfolio in the browser
3. Play a song on Spotify (on any device)
4. The Spotify widget should show your currently playing track
5. You can control playback directly from your portfolio!

## Features

Once set up, you'll have:
- ✅ Real-time display of currently playing track
- ✅ Recently played tracks history
- ✅ Playback controls (play/pause)
- ✅ Progress bar with seek functionality
- ✅ Web Playback SDK integration (play music in browser)
- ✅ Beautiful animations and hover effects

## Troubleshooting

### "Missing Spotify environment variables" error
- Make sure all three variables are in `.env.local`
- Restart your dev server after adding them

### "Failed to get access token" error
- Your refresh token might be invalid
- Try generating a new refresh token
- Make sure your client ID and secret are correct

### Nothing playing shows up
- Make sure you're actively playing music on Spotify
- Check that your Spotify account matches the one used to create the app
- The API updates every 30 seconds, so wait a bit

### Can't control playback
- Make sure you have an active Spotify Premium account (required for Web Playback SDK)
- Check browser console for any errors
- Try refreshing the page

## Required Scopes

The integration needs these Spotify scopes:
- `user-read-currently-playing` - See what you're currently playing
- `user-read-recently-played` - See your recently played tracks
- `user-modify-playback-state` - Control playback
- `user-read-playback-state` - Read playback state
- `streaming` - Play music in the browser

## Security Notes

- Never commit your `.env.local` file to Git
- Keep your client secret private
- Refresh tokens don't expire unless revoked
- You can revoke access anytime from your Spotify account settings

## Need Help?

If you run into issues:
1. Check the browser console for errors
2. Check the terminal/server logs
3. Verify all environment variables are set correctly
4. Make sure you're using a Spotify Premium account for playback features
