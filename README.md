# Aaron's Twitch Streamer Portfolio

A modern, responsive portfolio website built with Next.js 15 for Twitch streamers and content creators. This project showcases streaming content, community engagement, and provides a professional platform for building your streaming brand.

## 🚀 Features

- **Modern Design**: Clean, responsive UI with dark/light mode support
- **Multiple Pages**: 
  - Home with hero section and featured content
  - About page with streamer bio and achievements
  - Streams page with live status and schedule
  - Projects showcase for collaborations and events
  - Gallery for memorable moments and highlights
  - Blog for articles and updates
  - Contact form for business inquiries
- **Responsive Layout**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in metadata and OpenGraph support
- **Type Safety**: Full TypeScript implementation
- **Modern Styling**: Tailwind CSS with custom design system
- **Smooth Animations**: Framer Motion for engaging interactions
- **Theme Support**: Dark/light mode with system preference detection

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **UI Components**: Radix UI primitives
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aaron-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Streamer Information
Edit the data in `src/lib/data.ts` to customize:
- Personal information and bio
- Social media links
- Stream schedule
- Projects and achievements
- Blog posts and gallery images

### Modify Styling
The design system is configured in:
- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - Global styles and CSS variables
- Color scheme and typography can be customized via CSS variables

### Add New Pages
1. Create a new page in `src/app/[page-name]/page.tsx`
2. Add navigation link in `src/components/navbar.tsx`
3. Update the footer links in `src/components/footer.tsx`

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── blog/           # Blog page
│   ├── contact/        # Contact page
│   ├── gallery/        # Gallery page
│   ├── projects/       # Projects page
│   ├── streams/        # Streams page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable React components
│   ├── navbar.tsx      # Navigation component
│   ├── footer.tsx      # Footer component
│   ├── theme-provider.tsx  # Theme provider
│   └── theme-toggle.tsx    # Theme toggle button
├── lib/                # Utility functions and data
│   ├── data.ts         # Static data and content
│   └── utils.ts        # Utility functions
└── types/              # TypeScript type definitions
    └── index.ts        # Type definitions
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 🎯 Future Enhancements

- **Twitch API Integration**: Real-time stream status and follower count
- **Discord Integration**: Live member count and recent messages
- **Analytics**: Google Analytics or similar tracking
- **CMS Integration**: Headless CMS for blog posts
- **Email Notifications**: Contact form email handling
- **Social Login**: OAuth integration for user accounts
- **Comments System**: Blog post comments and interactions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide React for beautiful icons
- The streaming community for inspiration

---

Built with ❤️ for the streaming community

