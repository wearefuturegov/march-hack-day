# March 2021 FG hack day app

A [Next.js](https://nextjs.org/) app with [Prisma](https://www.prisma.io/). It follows Rails-like CRUD patterns for familiarity.

- `prisma/prisma.schema` overlaps with Rails' models and migrations. Some database-level validations (unique constraints and so on) can be defined here
- `pages/api` contains API endpoints that are conceptually similar to Rails controller actions.
- Everything else in `pages` is the view layer, which, in a React app, is where most functionality tends to be. Some include `getServerSideProps` functions that may either call API endpoints or the database directly to populate data pages need.

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
npx prisma push db --preview-feature
```

## Configuration

It needs these configuration variables similar to these to be set. You can use a `.env` file locally.

```
DATABASE_URL=url://to/your/database
NEXTAUTH_URL=http://localhost:3000/api/auth/signin
SESSION_SECRET=secret
```
