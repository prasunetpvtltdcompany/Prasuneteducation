# Images Folder

This folder contains all static images used in the web application.

## Usage

Place your image files directly in this folder. You can then reference them in your components using:

```jsx
// For images in the public folder, use absolute paths starting with /
<img src="/images/your-image.jpg" alt="Description" />

// Or using Next.js Image component
import Image from 'next/image'
<Image src="/images/your-image.jpg" alt="Description" width={500} height={300} />
```

## Organization

You can organize images into subfolders if needed:
- `/images/logos/` - Company logos and branding
- `/images/products/` - Product screenshots
- `/images/team/` - Team member photos
- `/images/backgrounds/` - Background images
- `/images/icons/` - Custom icons

## File Naming

- Use lowercase letters
- Use hyphens instead of spaces (e.g., `mobile-app-screenshot.jpg`)
- Include descriptive names (e.g., `hero-banner-main.jpg` instead of `img1.jpg`)

## Optimization

- Use appropriate image formats (JPEG for photos, PNG for graphics with transparency, WebP for modern browsers)
- Compress images before uploading
- Consider using Next.js Image component for automatic optimization