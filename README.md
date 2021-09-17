A basic tool for viewing theta tau apps.  Made in ~4 hours so please dont judge.


## Getting Started
First, export the apps as CSV from the google sheet.
Place the file in `lib` and call it `apps.csv`.
Then, run `yarn jsonify` to convert the file to `apps.json`.

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`.

If the questions change, just find the `<QA>` element in `index` and change the text to match _exactly_
