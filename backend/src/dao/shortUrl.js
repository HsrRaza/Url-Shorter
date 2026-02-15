import ShortUrl from "../models/shortUrl.models.js";
import { ConflictError } from "../utils/errorHandler.js";
export const saveShortUrl = async (shortUrl, longUrl, userId) => {
console.log("user id",userId);

    try {
        const newUrl = new ShortUrl({
            full_url: longUrl,
            short_url: shortUrl,
        });

        if (userId) {
            newUrl.user = userId;
        }
        newUrl.save();

    } catch (err) {
        if (err.code == 11000) {
            throw new ConflictError("Short URL already exists");
        }
        throw new Error(err);


    }

}

export const getUrlFromShortUrl = async (shortUrl) => {

    return await ShortUrl.findOneAndUpdate({ short_url: shortUrl }, { $inc: { clicks: 1 } })
}

export const getCustomUrl = async(slug)=>{
     return  await ShortUrl.findOne({ short_url: slug })
    
}