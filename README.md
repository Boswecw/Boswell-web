# Boswell Web Development Solutions LLC

A modern, responsive portfolio website built with React and Vite, showcasing web development projects and services.

## Features

- 🎨 Modern design with Framer Motion animations
- 📱 Fully responsive layout
- 🔗 GitHub integration for dynamic portfolio display
- 🎯 Professional contact and social media integration
- ⚡ Fast loading with Vite
- 🎪 Error boundaries for graceful error handling
- 🔧 Configurable via environment variables

## Tech Stack

- **Frontend**: React 19.1.0, Vite 7.0.6
- **Styling**: Tailwind CSS 4.1.11
- **Animations**: Framer Motion 12.23.9
- **Routing**: React Router DOM 7.7.1
- **Icons**: React Icons 5.5.0
- **UI Components**: Custom components with Radix UI
- **Build Tool**: Vite
- **Linting**: ESLint 9.32.0

## Getting Started

### Prerequisites

- Node.js (>=20.19.0 or >=22.12.0)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Boswecw/boswell-web.git
   cd boswell-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   ```env
   VITE_GITHUB_USERNAME=your-github-username
   VITE_CONTACT_EMAIL=your-email@example.com
   VITE_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
   VITE_GITHUB_URL=https://github.com/your-username
   ```

4. Add your resume:
   Place your `resume.html` file in the `public` folder.

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
public/
├── favicon.png            # Company logo/icon (32x32)
└── resume.html           # Interactive HTML resume
src/
├── components/
│   ├── ui/
│   │   └── button.jsx      # Reusable button component
│   └── ErrorBoundary.jsx   # Error boundary component
├── pages/
│   ├── LandingPage.jsx     # Main landing page
│   └── Portfolio.jsx       # GitHub projects showcase
├── App.jsx                 # Main app component with routing
├── main.jsx               # App entry point
└── index.css              # Global styles and Tailwind imports
```

## Customization

### HTML Resume

The portfolio includes an interactive HTML resume that showcases web development skills while presenting professional information. The resume features:

- **Modern styling** with CSS gradients and animations
- **Responsive design** that works on all devices  
- **Print-friendly** CSS for hard copy needs
- **Interactive elements** with hover effects
- **Professional typography** using Google Fonts
- **Direct navigation** back to the main portfolio

This approach demonstrates technical skills while serving as a functional resume.

### GitHub Integration

The portfolio page automatically fetches and displays your GitHub repositories. Configure your GitHub username in the `.env` file:

```env
VITE_GITHUB_USERNAME=your-github-username
```

### Contact Information

Update your contact information in the `.env` file:

```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
```

### Company Information

The landing page displays company information. You can customize:

- Company logo: Update the image URL in `LandingPage.jsx`
- Company description: Modify the text in `LandingPage.jsx`
- Certification badge: Update the image URL in `LandingPage.jsx`

## Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GITHUB_USERNAME` | Your GitHub username for portfolio display | Yes |
| `VITE_CONTACT_EMAIL` | Your contact email address | Yes |
| `VITE_LINKEDIN_URL` | Your LinkedIn profile URL | No |
| `VITE_GITHUB_URL` | Your GitHub profile URL | No |
| `VITE_APP_NAME` | Application name | No |
| `VITE_APP_DESCRIPTION` | Application description | No |

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Charles Boswell - [charlesboswell@boswellwebdevelopment.com](mailto:charlesboswell@boswellwebdevelopment.com)

Project Link: [https://github.com/Boswecw/boswell-web](https://github.com/Boswecw/boswell-web)

---

**Boswell Web Development Solutions LLC**  
*Veteran-owned and AI-powered development studio*  
Based in Lexington, KY