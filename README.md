# Portfolio Website

A modern, responsive single-page portfolio built with React.js, Tailwind CSS, and Framer Motion animations.

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and glass effects
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Interactive Elements**: Hover effects, smooth scrolling, and interactive components
- **Contact Form**: Functional contact form with validation
- **Social Links**: Easy integration with GitHub, LinkedIn, and resume links

## Sections

1. **Home**: Hero section with introduction and call-to-action buttons
2. **Description**: Skills showcase with interactive cards
3. **About**: Personal story, experience timeline, and achievements
4. **Contact**: Contact information and working contact form
5. **Footer**: Social links and additional information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Personal Information

Update the following files with your personal information:

#### 1. Home Section (`src/components/Home.js`)
- Change "Your Name" to your actual name
- Update the job title and description
- Modify the call-to-action buttons if needed

#### 2. About Section (`src/components/About.js`)
- Update the personal story
- Modify the experience timeline with your work history
- Update achievements list
- Replace the emoji with your photo (optional)

#### 3. Contact Section (`src/components/Contact.js`)
- Update email, phone, and location information
- Modify the contact form fields if needed

#### 4. Footer Section (`src/components/Footer.js`)
- Update social media links (GitHub, LinkedIn)
- Add your resume file path
- Update copyright information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in the config file
- **Animations**: Adjust animation timings in component files
- **Layout**: Modify spacing, sizing, and layout in component files

### Adding Your Resume

1. Place your resume PDF in the `public` folder
2. Update the resume link in `src/components/Footer.js`:
   ```javascript
   {
     name: 'Resume',
     icon: 'file-text',
     url: '/your-resume.pdf', // Update this path
     color: 'hover:text-primary-400'
   }
   ```

## Technologies Used

- **React.js**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hooks**: State management
- **CSS3**: Custom styles and effects

## Browser Support

This portfolio works on all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify

1. Build the project
2. Drag and drop the `build` folder to Netlify
3. Your portfolio will be live!

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy your changes
3. Your portfolio will be live!

## Customization Tips

1. **Images**: Add your photos to the `public` folder and reference them in components
2. **Projects**: Add a projects section to showcase your work
3. **Skills**: Modify the skills array in the Description component
4. **Colors**: Experiment with different color schemes in the Tailwind config
5. **Animations**: Adjust animation delays and durations for different effects

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

## License

This project is open source and available under the [MIT License](LICENSE).
