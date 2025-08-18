# Deployment Guide

## Deploy to Netlify

### One-time Setup
1. Install Netlify CLI globally (already done):
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize your site (run this in the project directory):
   ```bash
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Select your team
   - Enter a site name (or leave blank for auto-generated)

### Deploy Commands

#### Quick Deploy (Preview)
```bash
npm run build
netlify deploy --dir=out
```

#### Production Deploy
```bash
npm run deploy
```

Or manually:
```bash
npm run build
netlify deploy --prod --dir=out
```

### Automatic Deployment
- Connect your GitHub repository to Netlify for automatic deployments
- Push to main branch will trigger automatic builds

### Environment Variables (if needed)
Set in Netlify dashboard under Site Settings > Environment Variables:
- `NODE_ENV=production`
- Any other API keys or configuration variables

### Build Settings in Netlify Dashboard
- Build command: `npm run build`
- Publish directory: `out`
- Node version: `18`

### Custom Domain (Optional)
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Configure DNS settings as instructed

## Local Development

```bash
npm run dev
```

Visit http://localhost:3000

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage with demo map
│   └── example/
│       └── [example-name]/
│           └── page.tsx   # Dynamic demo pages
├── components/
│   └── TodoDemo.tsx      # Interactive components
└── data/
    └── examples.ts       # Demo examples data
```

## Adding New Demos

1. Add demo data to `src/data/examples.ts`
2. Create component in `src/components/`
3. Update dynamic page in `src/app/example/[example-name]/page.tsx`
4. Deploy: `npm run deploy`