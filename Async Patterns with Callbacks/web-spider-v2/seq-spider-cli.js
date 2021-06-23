import { sequentialSpider } from "./sequential-spider";

const url = process.argv[2];
const nesting = Number.parseInt(process.argv[3], 10) || 1;

sequentialSpider(url, nesting, err => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Download complete');
});