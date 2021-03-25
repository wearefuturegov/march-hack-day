# March 2021 FG hack day app

A [Next.js](https://nextjs.org/) app with [Prisma](https://www.prisma.io/). It follows Rails-like CRUD patterns for familiarity.

## Developing

You need Node and npm installed.

```
npm i
npx prisma generate
npm run dev
```

It will be on `localhost:3000`.

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
