# SetTimeout.dev - the Halo Lab's mailing list

This project helps create mailing list.

## Requirements

1. Latest LTS version of NodeJS
2. `npm` >= 7

## Usage

At first, add JSON with data to the `data` package. The name of the file should match a date of the mail creation in the format of `Day-Month-Year`.

The data for an email should have the following structure:

```ts
type Tag = "English" | "Youtube" | "Twitter" | "Переведено";

interface Card {
	readonly link: string;
	readonly tags: readonly Tag[];
	readonly title: string;
	readonly author: string;
	readonly description: string;
}

interface Section {
	readonly title: string;
	readonly cards: readonly Card[];
}

interface Mail {
	readonly sections: readonly Section[];
}
```

> Issue number and issue date will be generated authomatically.

There are only four tags recognizable now (see `Tag` type). If you need to add more, then edit `shared/assets/index.js` file and add corresponding image.

#### Images

All images are located in `src/shared/assets` folder. There is `index.js` file that contains functions to get the image URL depending on current environment. It is designed to work both for emails and the landing. Please, edit that file when you add a new image or remove some.

### Build

To build an email for the most recent JSON file type:

```sh
make build_email
# or just
make
```

_Parcel_ puts generated email into a **dist** folder (`email.html` file).

To develop landing page for the mailing list type:

```sh
make build_site
```

You may need to test the landing with Netlify functions. Thus run:

```sh
npx netlify dev
```
