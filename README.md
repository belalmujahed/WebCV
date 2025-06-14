# Dev-Folio

Dev-Folio is a developer portfolio template built with Next.js, TypeScript, and Material UI. This project is designed to
help developers showcase their skills, experience, and projects in a modern, responsive web application.

## Features

- Next.js 14 (App Router)
- TypeScript
- Material UI (MUI)
- Responsive design
- Easy customization

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/dev-folio.git
   cd dev-folio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Customization

- Update your personal information, skills, and projects in the files under `src/data/` and `src/components/`.
- Modify styles in `src/app/globals.css` or `src/app/custom-styles.css` as needed.

## Environment Variables

To enable the contact form email functionality, you need to set up SMTP credentials. Copy the provided `.env.example`
file to `.env.local` and fill in your real SMTP and destination email details:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your SMTP provider's information:

- `SMTP_HOST`: Your SMTP server host (e.g., smtp.gmail.com)
- `SMTP_PORT`: SMTP port (usually 587)
- `SMTP_USER`: Your SMTP username
- `SMTP_PASS`: Your SMTP password
- `CONTACT_EMAIL`: The email address where you want to receive contact form messages

## Building for Production

To build the app for production:

```bash
npm run build
npm start
```

## Deploying to Firebase Hosting

You can deploy this project to [Firebase Hosting](https://firebase.google.com/products/hosting) for free (within
generous usage limits).

### Steps

1. **Install Firebase CLI:**

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**

   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project:**

   ```bash
   firebase init
   ```

    - Select **Hosting** (and optionally **Functions** if you want to use serverless functions).
    - Set `build` as your public directory (for Next.js static export) or follow the prompts for SSR.
    - Configure as a single-page app if prompted.

4. **Build your Next.js app:**

   ```bash
   npm run build
   ```

5. **Deploy to Firebase:**
   ```bash
   firebase deploy
   ```

For more advanced Next.js support (SSR, API routes), see
the [Firebase Hosting with Next.js documentation](https://firebase.google.com/docs/hosting/frameworks/nextjs).

Be sure to set your Firebase environment variables in `.env.local` as shown in `.env.example`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
