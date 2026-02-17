
import { getUrlFromShortUrl, saveShortUrl } from "../dao/shortUrl.js";
import { createShortUrlWithoutUserService, createShortUrlWithUserService } from "../services/shortUrl.service.js";
import { NotFoundError } from "../utils/errorHandler.js";
import { wrapAsync } from "../utils/tryCatch.js";




const createShortUrl = wrapAsync(async (req, res) => {

    const data = req.body;
    // console.log(data.slug);
    let shortUrl;
    // console.log(req.user);

    if (req.user) {
        shortUrl = await createShortUrlWithUserService(data.url, req.user.id, data.slug);

    } else {

        shortUrl = await createShortUrlWithoutUserService(data.url);
    }


    res.status(201).json({
        success: true,
        message: "Short URL created successfully",
        shortUrl: process.env.APP_URL + shortUrl
    })
});



const redirectFromShortUrl = wrapAsync(async (req, res,) => {

    const { id } = req.params;

    const url = await getUrlFromShortUrl(id)

    if (!url) throw new NotFoundError("URL not found");

    // console.log(url);
    res.redirect(url.full_url);



});


// const createCustomUrl = wrapAsync(async (req, res) => {
//     const { url, slug } = req.body;

//     const shortUrl = await createShortUrlWithUserService(url, req.user.id, slug);

//     res.status(201).json({
//         success: true,
//         message: "Custom URL created successfully",
//         shortUrl: process.env.APP_URL + shortUrl
//     })
// })

export { createShortUrl, redirectFromShortUrl };
