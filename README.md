# Ja3he - Minimalist Portfolio

A sleek, dark-themed portfolio site with smooth animations and modern design.

## Features

- **NEW:** Custom background image (test3.jpg) with film aesthetic
- **NEW:** Film grain effect for vintage photography feel
- **NEW:** Click-to-enter entrance screen with auto-playing music
- Minimalist dark design with monochromatic color palette
- Glass-morphism UI with subtle backdrop blur effects
- Custom cursor glow effect that follows your mouse
- Typing text animation with rotating phrases
- About section with 4 customizable info cards
- 3D tilt effects on all interactive elements
- Instagram social link with animations
- Music player for SUGAR by BROCKHAMPTON
- Fully responsive design
- Smooth animations and transitions
- Easter egg (Konami code)

## How It Works

When visitors first arrive at your site, they'll see a beautiful entrance screen with:
- Your name "Ja3he" with glowing animation
- Floating particles
- "Click to Enter" prompt with bounce animation
- Animated line divider

When they click anywhere on the entrance screen:
1. The entrance fades out smoothly
2. Main content fades in
3. Music automatically starts playing (if music.mp3 is present)
4. All animations and effects become active

This creates an immersive, cinema-like experience while bypassing browser autoplay restrictions!

## Setup

### Background Image (Required)

The site uses `test3.jpg` as the background image:

1. Add your background image to the project folder
2. Name it `test3.jpg` (or update the filename in `style.css` line 55)
3. Recommended: Use a high-quality image (1920x1080 or higher)

The site includes:
- Dark overlay (85% opacity) for text readability
- Film grain texture overlay for vintage feel
- Glass-morphism effects on all cards

**Without a background image**, the site will show a solid dark background instead.

### Music File (Optional)

To enable auto-playing music on the entrance screen:

1. Download or obtain the MP3 file for "SUGAR" by BROCKHAMPTON
2. Rename it to `music.mp3`
3. Place it in the root directory (same folder as index.html)
4. When visitors click the entrance screen, music will automatically start

The site will work perfectly without the music file - the entrance screen will still appear, but music won't auto-play. Visitors can still use the music player button manually.

## Deployment to Vercel (Free)

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Navigate to your project folder:
   ```bash
   cd "C:\Users\xwest\Desktop\site ja3he"
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? Yes
   - Which scope? (select your account)
   - Link to existing project? No
   - Project name? (suggest: ja3he-portfolio)
   - In which directory is your code located? ./
   - Want to override settings? No

5. Your site will be live at a URL like: `https://ja3he-portfolio.vercel.app`

### Option 2: Using Vercel Website

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub, GitLab, or Bitbucket
3. Click "Add New Project"
4. Import your project folder
5. Click "Deploy"

Your site will be automatically deployed and given a free Vercel URL.

## Project Structure

```
site ja3he/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # JavaScript for interactivity
├── favicon.svg         # Site favicon
├── test3.jpg           # Background image
├── music.mp3           # (Optional) Background music
└── README.md           # This file
```

## Customization

### Background Image
Change the background image in `style.css` (line 55):
```css
background-image: url('test3.jpg');
```

Replace `test3.jpg` with your own image file. For best results:
- Use high-resolution images (1920x1080 or higher)
- Dark or moody images work best with the light text
- The overlay adds a dark tint automatically for readability

**Adjust overlay darkness** (line 69):
```css
background: linear-gradient(to bottom, rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.75));
```
Change `0.85` and `0.75` to control opacity (0.0 = transparent, 1.0 = fully dark)

**Film grain** - Adjust the texture intensity (line 37):
```css
opacity: 0.4;  /* Change to 0.2-0.6 for more/less grain */
```

### Entrance Screen
Customize the entrance screen text in `index.html` (line 39):
```html
<h1 class="entrance-name">Ja3he</h1>
```

You can also modify:
- Animation speeds in `style.css` (lines 80-290)
- Particle count by adding/removing `<div class="particle"></div>` in HTML
- Click text prompt (line 43 in HTML)

### About Cards
Edit the 4 info cards in `index.html` (lines 47-94):
- **Card Title:** Change the text in `<h3 class="card-title">`
- **Card Text:** Update `<p class="card-text">`
- **Icons:** Replace the SVG with different icons from [Feather Icons](https://feathericons.com/)

Example card structure:
```html
<div class="about-card tilt-card" data-tilt>
    <div class="card-icon">
        <!-- SVG icon here -->
    </div>
    <h3 class="card-title">Your Title</h3>
    <p class="card-text">Your description</p>
</div>
```

### Colors
The color scheme is defined in CSS variables in `style.css`:
```css
--dark-bg: #0a0a0a;
--light-grey: #e8e8e8;
--mid-grey: #a0a0a0;
```

### Music Volume
Adjust the background music volume in `script.js` (line 7):
```javascript
bgMusic.volume = 0.3;  // 0.0 = mute, 1.0 = full volume
```
Current setting: **30%** (0.3) - perfect for background music

### Typing Text
Edit the phrases in `script.js`:
```javascript
const typingTexts = [
    'MINIMALIST',
    'CREATIVE',
    'SLEEK',
    'MODERN'
];
```

### 3D Tilt Settings
Adjust the tilt intensity in `script.js` (lines 202-207):
```javascript
new TiltEffect(card, {
    max: 10,        // Maximum tilt angle (degrees)
    perspective: 1000,  // Perspective depth
    scale: 1.03,    // Scale on hover
    speed: 400      // Animation speed (ms)
});
```

### Add More Social Links
Add new links in the `.socials` section of `index.html` using the existing structure.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

All modern browsers are supported. Best viewed on Chrome for optimal performance.

## Credits

Built for Ja3he by Alexander West
