# Geelong Excavator Hire Website

This is the website for Geelong Excavator Hire, built with Next.js.

## Local Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying to Netlify

This project is configured for easy deployment to Netlify. Follow these steps to deploy:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Log in to Netlify and click "New site from Git"

3. Connect to your Git provider and select the repository

4. Configure the build settings (these should be automatically detected from the netlify.toml file):
   - Build command: `npm run build`
   - Publish directory: `.next`

5. Click "Deploy site"

Netlify will automatically install the Next.js plugin and configure the necessary settings for a successful deployment.

### Environment Variables

If you need to set environment variables for your production deployment, you can do so in the Netlify dashboard under Site settings > Build & deploy > Environment.

## Project Structure

- `src/app/`: Contains all the Next.js pages and layouts
- `src/components/`: Reusable React components
- `src/data/`: Data files, including service area information
- `public/`: Static assets like images

## Service Areas

Service area data is organized in a modular structure:

- `src/data/service-areas/types.ts`: TypeScript interfaces and constants
- `src/data/service-areas/a-b.ts`, `c-d.ts`, etc.: Service area data split by alphabetical groups
- `src/data/service-areas/index.ts`: Combines and exports all service area data
