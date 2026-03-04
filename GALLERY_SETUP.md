# Gallery Setup Instructions

## 📁 Folder Structure

Create a `gallery` folder inside the `public` directory:

```
public/
  └── gallery/
      ├── 1.jpg
      ├── 2.jpg
      ├── 3.jpg
      ├── 4.jpg
      ├── 5.jpg
      ├── 6.jpg
      ├── 7.jpg
      ├── 8.jpg
      └── 9.jpg
```

## 🖼️ How Many Images?

The gallery is currently configured for **9 images**, but you can add as many as you want!

### To add more images:

1. Add your images to `public/gallery/` folder
2. Name them: `1.jpg`, `2.jpg`, `3.jpg`, etc.
3. Update the `galleryImages` array in `src/app/gallery/page.tsx`

Example:
```typescript
const galleryImages = [
  { src: "/gallery/1.jpg", alt: "Your description" },
  { src: "/gallery/2.jpg", alt: "Your description" },
  // Add more...
  { src: "/gallery/10.jpg", alt: "Your description" },
];
```

## 📐 Image Recommendations

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 1200x1200px or larger
- **Aspect Ratio**: Square (1:1) works best for the grid
- **File Size**: Keep under 500KB for faster loading

## ✨ Features

- **Responsive Grid**: 2 columns on mobile, 3 on desktop
- **Click to Enlarge**: Click any image to view full size
- **Smooth Animations**: Hover effects and transitions
- **Keyboard Support**: Press ESC to close enlarged view
- **Dark Mode Compatible**: Works with your theme toggle

## 🎨 Customization

To change the grid layout, edit `SimpleGallery.tsx`:

```typescript
// Change from 2/3 columns to 3/4 columns:
<div className="grid grid-cols-3 md:grid-cols-4 gap-4">
```

To change the gap between images:
```typescript
// Change gap-4 to gap-2, gap-6, gap-8, etc.
<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
```

## 🚀 Quick Start

1. Create the folder: `public/gallery/`
2. Add 9 images named `1.jpg` through `9.jpg`
3. Refresh your browser
4. Navigate to `/gallery` to see your images!

That's it! Your gallery is ready to go! 🎉
