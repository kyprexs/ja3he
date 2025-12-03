# How to Customize Your About Cards

The site has 4 info cards you can easily customize to show whatever you want about yourself!

## Quick Guide

### Step 1: Open index.html
Find lines 47-94 where the cards are defined.

### Step 2: Edit Each Card
Each card has 3 parts you can change:

1. **Icon** - The SVG image at the top
2. **Title** - The bold text (e.g., "Creative")
3. **Text** - The description below (e.g., "Designer & Visionary")

### Current Cards:

**Card 1:**
- Title: Creative
- Text: Designer & Visionary
- Icon: Person/user icon

**Card 2:**
- Title: Location
- Text: Worldwide
- Icon: Layers/location icon

**Card 3:**
- Title: Passion
- Text: Music & Art
- Icon: Star icon

**Card 4:**
- Title: Status
- Text: Always Creating
- Icon: Clock icon

## Ideas for Customization

### What You Could Show:
- Age (e.g., "Age" / "19 Years Old")
- Favorite music (e.g., "Genre" / "Hip Hop")
- What you do (e.g., "Student" / "Studying Design")
- Hobbies (e.g., "Gaming" / "FPS & RPG")
- Your vibe (e.g., "Aesthetic" / "Minimalist")
- Languages (e.g., "Languages" / "EN / ES / FR")
- Current project (e.g., "Working On" / "New Music")
- Zodiac sign (e.g., "Sign" / "Capricorn ♑")

## How to Change Icons

All icons are from Feather Icons. To change an icon:

1. Go to https://feathericons.com/
2. Find an icon you like
3. Copy the SVG code
4. Replace the `<svg>...</svg>` code in the card

### Popular Icon Suggestions:
- **Music:** `music`, `headphones`, `disc`
- **Code/Tech:** `code`, `terminal`, `cpu`
- **Creative:** `pen-tool`, `edit`, `feather`
- **Gaming:** `target`, `zap`, `activity`
- **Social:** `instagram`, `twitter`, `github`
- **Location:** `map-pin`, `globe`, `compass`
- **Time:** `calendar`, `sunrise`, `moon`

## Example: Changing a Card

### Before:
```html
<div class="about-card tilt-card" data-tilt>
    <div class="card-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    </div>
    <h3 class="card-title">Status</h3>
    <p class="card-text">Always Creating</p>
</div>
```

### After (changed to show age):
```html
<div class="about-card tilt-card" data-tilt>
    <div class="card-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
    </div>
    <h3 class="card-title">Age</h3>
    <p class="card-text">21 Years Old</p>
</div>
```

## Tips

- Keep titles short (1-2 words)
- Keep text brief (2-5 words)
- Use icons that match your theme
- All icons use the same viewBox settings, so you can just copy/paste from Feather Icons
- The 3D tilt effect works automatically - no need to configure anything!

## Need Help?

- The cards are in `index.html` starting at line 47
- Each card is wrapped in `<div class="about-card tilt-card" data-tilt>`
- Don't remove the `tilt-card` or `data-tilt` attributes - these make the 3D effect work!
- If you break something, you can always refer back to this guide to see the structure

---

Have fun customizing! Make it your own.
