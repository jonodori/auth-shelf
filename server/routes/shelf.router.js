const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  res.sendStatus(200); // For testing only, can be removed

  let queryText =
    `SELECT * 
    FROM "item"
    `;

    pool.query(queryText).then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
  const sqlQuery = `
    INSERT INTO "item" (description, image_url, "user_id")
      VALUES ($1, $2, $3)
  `

  pool.query(sqlQuery, [req.body.desc, req.body.imgSrc, req.user.id])
    .then(() => {console.log('post success'); res.sendStatus(201);})
    .catch((err) => {console.log('post failed', err); res.sendStatus(500)});
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  let queryText = `
  DELETE FROM item 
	WHERE id=$1 
	AND user_id =$2;
  `
  const sqlParms = 
  [ req.params.id, 
    req.user.id];
  pool.query(queryText, sqlParms).then(() => {
    res.sendStatus(200);
 }).catch((error) => {
     console.log('error getting delete :id', error);
     res.sendStatus(500);
});
});
/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
