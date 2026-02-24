/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { LinkIcon, Scissors } from "lucide-react";
import { useState } from "react";
import { createShortUrl } from "../api/shortUrl.api";
import { useSelector } from "react-redux";
import {  useQueryClient } from "@tanstack/react-query";

const UrlForm = () => {

  const [url, setUrl] = useState('https://www.google.com/');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const [customSlug, setCustomSlug] = useState('');
  const queryClient = useQueryClient();

  const {isAuthenticated} =useSelector((state)=>state.auth)

  // console.log(url);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const shortUrl = await createShortUrl(url, customSlug)
      setShortUrl(shortUrl);
      queryClient.invalidateQueries({ queryKey: ['userUrls'] });  // we are invalidating the query to refetch the data and update the UI
     setError(null)
    } catch (error) {
      setError(error.message);
    }
  }

  // const mutation = useMutation({
  //     mutationFn: handleSubmit,
  //     onSuccess: (data) => {
  //         setShortUrl(data);
  //     }
  // })



  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }





return (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="max-w-3xl mx-auto mt-20 p-6 md:p-8 rounded-2xl 
    bg-black/60 backdrop-blur-xl border border-red-900/40 
    shadow-[0_0_40px_rgba(69,10,10,0.5)]"
  >
    {/* URL Input + Button */}
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative grow">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <LinkIcon size={20} className="text-gray-500" />
        </div>

        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your long link here..."
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 
          text-white placeholder-gray-500 
          focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
        />
      </div>

     <button
        onClick={handleSubmit}
        className="bg-linear-to-r from-red-700 to-red-900 text-white px-8 py-4 rounded-xl 
        font-medium hover:scale-105 transition-all shadow-lg shadow-red-900/20 
        flex items-center justify-center gap-2 whitespace-nowrap"
      >
        <Scissors size={18} />
        Shorten
      </button>
    </div>

    {/* Custom Slug */}
    {isAuthenticated && (
      <div className="mt-6">
        <input
          type="text"
          value={customSlug}
          onChange={(e) => setCustomSlug(e.target.value)}
          placeholder="Custom slug (optional)"
          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 
          text-white placeholder-gray-500 
          focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
        />
      </div>
    )}

    {/* Error */}
    {error && (
      <div className="mt-6 p-3 bg-red-900/40 border border-red-700/40 rounded-lg text-red-300 text-sm">
        {error}
      </div>
    )}

    {/* Result */}
    {shortUrl && (
      <div className="mt-8">
        <p className="text-sm text-white/60 mb-2">Your shortened link</p>

        <div className="flex items-center">
          <input
            readOnly
            value={shortUrl}
            className="flex-1 bg-white/5 border border-white/10 rounded-l-xl py-3 px-4 text-white"
          />

          <button
            onClick={handleCopy}
            className={`px-6 py-3 rounded-r-xl transition-all ${
              copied
                ? "bg-green-600 text-white"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    )}
  </motion.div>
);
}

export default UrlForm