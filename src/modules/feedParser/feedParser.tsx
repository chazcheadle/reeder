import Parser from 'rss-parser';
const parser = new Parser();

const feedUrls = [
  'https://www.cbsnews.com/latest/rss/main',
  'http://feeds.nbcnews.com/nbcnews/public/news',
]

export const feedParser = async () => {
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
  let feeds = [];

    let feed = await parser.parseURL(CORS_PROXY + feedUrls[0]);

    feeds.push(feed);

  return feeds;
}
