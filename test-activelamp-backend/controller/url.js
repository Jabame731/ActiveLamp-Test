import { connection } from '../config/db.js';
import { generateUniqueId, validateUrl } from '../helper/helper.js';

export const generateShortUrl = (req, res) => {
  const originalURL = req.body.url;

  const generateUniqueCharacters = 'shorten.com/' + generateUniqueId();

  const query = 'SELECT * FROM `urls` WHERE `long_url` = ?';

  connection.query(query, [originalURL], (err, data) => {
    if (err) return res.json(err);

    //check for existing URLs in the Database
    if (data.length) return res.status(409).json({ message: 'URL exists' });

    //validate if the input is a URL
    if (validateUrl(originalURL)) {
      const query =
        'INSERT INTO `urls` (`long_url`, `short_url`) VALUES (?, ?)';

      connection.query(
        query,
        [originalURL, generateUniqueCharacters],
        (err, data) => {
          if (err) return res.json(err);

          return res.status(200).json({
            message: 'URL has been shortened',
            long_url: originalURL,
            short_url: generateUniqueCharacters,
          });
        }
      );
    } else {
      return res.status(400).json({
        message: 'URL is not Valid',
      });
    }
  });
};

export const generateLongUrlFromShortUrl = (req, res) => {
  const shortUrlCode = 'shorten.com/' + req.params.shortCode;

  // shortUrl ---> Long based on the database

  //check if the shortUrl exist
  const query = 'SELECT `long_url` FROM `urls` WHERE `short_url` = ?';

  connection.query(query, [shortUrlCode], (err, data) => {
    if (err) return res.json(err);

    if (!data.length)
      return res.status(409).json({
        message: 'Short URL not found',
      });

    const longUrl = data[0].long_url;

    return res.status(200).json({
      message: 'Original URL found',
      originalUrl: longUrl,
    });
  });
};
