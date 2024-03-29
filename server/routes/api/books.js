const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").post(booksController.create);

router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/:id").delete(booksController.delete);

module.exports = router;
