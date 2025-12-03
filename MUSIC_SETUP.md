# Music Setup Guide

The site includes a music player for "SUGAR" by BROCKHAMPTON with **auto-play** on the entrance screen. Here's how to set it up:

## Quick Steps

1. **Get the audio file**
   - You'll need the MP3 file for "SUGAR" by BROCKHAMPTON
   - You can extract this from Spotify, Apple Music, or YouTube (using a converter)

2. **Prepare the file**
   - Make sure it's in MP3 format
   - Rename the file to exactly: `music.mp3` (all lowercase)

3. **Add to your project**
   - Place `music.mp3` in the same folder as your `index.html` file
   - The file structure should look like:
     ```
     site ja3he/
     ├── index.html
     ├── style.css
     ├── script.js
     ├── music.mp3  ← Add here
     └── ...
     ```

4. **Test it**
   - Open `index.html` in your browser
   - You'll see the entrance screen first
   - Click anywhere on the entrance screen
   - Music will automatically start playing as the site loads
   - You can also pause/play using the music button on the main site

## Adjusting Volume

The music is set to **30% volume** by default (perfect for background music).

To change it, edit line 7 in `script.js`:
```javascript
bgMusic.volume = 0.3;  // Change to 0.1-1.0
```

Volume levels:
- `0.1` = 10% (very quiet)
- `0.3` = 30% (default - good background level)
- `0.5` = 50% (moderate)
- `1.0` = 100% (full volume)

## If Music Doesn't Work

- Check that the file is named exactly `music.mp3`
- Make sure the file is in MP3 format
- Try opening the browser console (F12) to see any errors
- Some browsers block autoplay - you need to click the button manually
- Music is set to 30% volume - if it's too quiet, increase the volume in script.js

## For Deployment

When deploying to Vercel:
- Make sure to include the `music.mp3` file when you upload/deploy
- The file will be uploaded along with your other files
- If using Git, make sure it's not in `.gitignore`

## Legal Note

Make sure you have the right to use this music file on your website. For personal portfolios this is usually fine, but be aware of copyright laws.

## Alternative: Remove Music Player

If you don't want the music player, you can remove it by:
1. Deleting the music player section from `index.html` (lines 44-59)
2. The site will work perfectly without it

---

Need help? The music player code is in `script.js` starting at line 45.
