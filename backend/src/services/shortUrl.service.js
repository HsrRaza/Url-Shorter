import { saveShortUrl } from "../dao/shortUrl.js";

import { generateShortUrl } from "../utils/helper.js";


export const createShortUrlWithoutUserService = async (url) => {

    const shortUrl = generateShortUrl(7);

    if (!shortUrl) throw new Error("Failed to generate short URL");

    await saveShortUrl(shortUrl, url);
    return shortUrl;


};

export const createShortUrlWithUserService = async (url, userId, slug=null) => {
    const shortUrl = slug ||  generateShortUrl(7);

     const exits = await getCustomUrl(slug);
     if(exits) throw new Error("Custom URL already exists");
     
    await saveShortUrl(shortUrl, url, userId);
    return shortUrl;
};

