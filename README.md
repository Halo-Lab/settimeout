# SetTimeout.dev - the Halo Lab's mailing list

This project helps create mailing list.

## Requirements

1. Latest LTS version of NodeJS
2. `npm` >= 7

## Usage

At first, add JSON with data to the `data` folder. The name of the file should match a date of the mail creation in the
format of `Day-Month-Year`.

The email structure is described in `/shared/types.ts` file.

> Issue number and issue date will be generated automatically (the issue number is the number of json-files in the
> data folder, date is the name of json-file).

> To add a mailing letter header, you need to fill in the "greetingTitle" and "greetingSubtitle" fields in the
> json-file.

There are only four tags recognizable now (see `Tag` type). If you need to add more, then edit `shared/assets/index.ts`
file and add corresponding images.

Available titles to which icons will be automatically added: "Вёрстка" | "JavaScript" | "Веб-разработка" | "Фреймворки
и библиотеки" | "Психология, продуктивность, soft skills". If you need to add more, then edit `shared/assets/index.ts`
file and add corresponding image.

#### Images

All images are located in `/shared/assets` folder. There is `index.ts` file that contains functions to get the image URL
depending on current environment. It is designed to work both for emails and the landing. Please, edit that file when
you add a new image or remove some.

### Build

To build an email for the most recent JSON file type execute:

```shell
make build_email && node dist/index.js
```

An `email.html` file will be generated in _dist_ folder.

To develop an email page run:

```shell
make email_dev
```

And then in separate terminal window run:

```shell
node dist/index.js && open dist/email.html
```

And you can preview email UI in the browser. **Do not forget to rerun last commands after any change in the code.**

To develop landing page for the mailing list type run:

```shell
npx netlify dev
```

To build site run:

```shell
make build_site
```

### Site

The main source of the site is settled in `app` folder. While extending site's functionality, you should avoid writing
there the code that should be run only on the server. There is a possibility to do it, but you should be confident that
server's code will be removed from final bundle as `App` and `Head` templates will be invoked in browser environment also.

`server` directory contains server's code only. Files with `.api.` suffix are treated differently. They are standalone
endpoints and are bundled as separate serverless functions. Other files are helpers, that's why you can create any structure
that comes to your mind there.

> `index.api.ts` is the main endpoint and therefore shouldn't be deleted or renamed.

`public` folder will be published to Netlify. So, if there is a need to include some static asset to application (for
example, fonts), you can place it there. Public path for those assets should start from `public` folder. For example,
public path for _favicon.ico_ image is `/favicon.ico`.

### Email

All source code is settled in `email` folder. There aren't any restrictions on organising folder structure.

### Shared

Any shared code between email and site should be placed in `shared` folder.

### Assets

As you can see, any asset can be imported in JS. Bundler will handle them.

### Env

There should be `.env` file with next variables:

1. DOMAIN=<site's domain name>
2. LIST_ID=<value>
3. GTAG_ID=<value>
4. BASE_NETLIFY_URL=<value>
5. UNISENDER_API_KEY=<value>
6. UNISENDER_BASE_URL=<value>

Use of these variables vary by the environment:

- on the server reach them by `env.DOMAIN` (do not forget to include `import { env } from 'process';`)
- on the client react them by `import.meta.env.DOMAIN`.

Not all variables are visible on the client. Only those declared in `rollup.common.config.js`. So, if you need to
add new one you should add it there and write type for that variable in `global.d.ts` file.

### Simemap updates

Every time you add new letter, remember to update `sitemap.xml`. It is necessary to inform Google about new content issue, and you can do it with updated and actual `sitemap.xml`. To update site map, run:

```
make build_sitemap
```
Then push updated `sitemap.xml` to the repository.


## Word from authors

Have fun ✌️
