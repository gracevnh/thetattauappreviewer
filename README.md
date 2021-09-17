A basic tool for viewing theta tau apps. Apps should be saved as a CSV and converted to JSOJ and saved as lib/apps.json. Made in ~4 hours so please dont judge.


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
