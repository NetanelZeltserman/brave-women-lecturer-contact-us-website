![Intro Banner](public/vid/intro_banner.mp4)

# Brave Women Lecturer Contact Website

This project is a Next.js-based website for a lecturer who empowers women through her life story. The site showcases her background and provides a contact form for potential clients or event organizers.

## Features

- Responsive design using Tailwind CSS
- Contact form with custom email sending functionality using a custom SMTP server (can be configured to Gmail or other services as well)
- Animated background using HTML5 Canvas
- Sentry Integration for error tracking
- Performance monitoring with Vercel Analytics and Speed Insights

## Getting Started

### Prerequisites

- Node.js (version 16 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:


```
pnpm install
```

or

```
npm install
```

or

```
yarn install
```


3. Create a `.env` file in the root directory and add the following environment variables, make sure to replace the values with your own:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASSWORD=password
MY_EMAIL=my@email.com
```

### Running the Development Server

```
npm run dev
```

or

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/`: Contains the main application code
- `components/`: Reusable React components
- `public/`: Static assets
- `utils/`: Utility functions

## Key Components

- Home Page: `app/page.tsx`
- Contact Form: `components/forms/contact.tsx`
- Email Sending Logic: `app/api/email/route.ts`

## Deployment

This project is set up for deployment on Vercel. Simply push to the main branch to trigger a deployment.

## Error Tracking and Monitoring

Sentry is integrated for error tracking. Configuration can be found in:

```typescript:sentry.client.config.ts
startLine: 1
endLine: 28
```

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
