# March 2021 FG hack day app

## Developing

```
npm i
npx prisma generate
npm run dev
```

## Deploying it

Suitable for anywhere Next.js apps can run, including Netlify, Vercel and Heroku.

You can apply the schema to a fresh database with:

```
npx prisma push db --preview-featue
```

## Configuration

It needs these configuration variables to be set. You can use a `.env` file locally.

```
DATABASE_URL
NEXTAUTH_URL
SESSION_SECRET
```
