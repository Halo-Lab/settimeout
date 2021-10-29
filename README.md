# Mailing - builder of the Halo Lab mailing list

This project helps create mailing list.

## Requirements

1. Latest LTS version of NodeJS
2. `npm` >= 7

## Usage

At first, add JSON with data to the `data` package. The name of the file should match a date of the mail creation in the format of `Day-Month-Year`.

To build a HTML for the most recent JSON file type:

```sh
npm run build:email
```
