const router = require("express").Router();
let Item = require("../modules/Item");

//Insert
router.route("/add").post((req, res) => {
  const Title = req.body.Title;
  const SubTitle = req.body.SubTitle;
  const Author = req.body.Author;
  const Quantity = parseInt(req.body.Quantity);
  const Price = req.body.Price;
  const Description = req.body.Description;
//   const Images = req.body.Images;
  const Category = req.body.Category;
  const ItemAvailabilityStatus = req.body.ItemAvailabilityStatus;
  const Date = req.body.Date;
  const CustomerID = req.body.CustomerID;

  const newItem = new Item({
    Title,
    SubTitle,
    Author,
    Quantity,
    Price,
    Description,
    // Images,
    Category,
    ItemAvailabilityStatus,
    Date,
    CustomerID
  });

  newItem
    .save()
    .then(() => {
      res.json({
        newItem: {
          _id: newItem._id,
          Title: newItem.Title,
          Author: newItem.Author,
          SubTitle: newItem.SubTitle,
          Quantity: newItem.Quantity,
          Price: newItem.Price,
          Description: newItem.Description,
        //   Images: newItem.Images,
          Category: newItem.Category,
          ItemAvailabilityStatus : newItem.ItemAvailabilityStatus,
          Date : newItem.Date,
          CustomerID : newItem.CustomerID
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// retrive

// route("/") this can use for fetching all the data from the DB
router.route("/get").get((reg, res) => {
  Item.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
    });
});

// update
router.route("/update/:id").put(async (req, res) => {
  let itemID = req.params.id;
  const {
    Item_name,
    SubTitle,
    Quantity,
    Price,
    Description,
    // Images,
    Category,
    ItemAvailabilityStatus,
    CustomerID
  } = req.body;

  const updateItem = {
    Item_name,
    SubTitle,
    Quantity,
    Price,
    Description,
    // Images,
    Category,
    ItemAvailabilityStatus,
    CustomerID
  };

  const update = await Item.findByIdAndUpdate(itemID, updateItem)
    .then(() => {
      res.status(200).send({ status: "Item updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

// delete
router.route("/delete/:id").delete(async (req, res) => {
  let itemID = req.params.id;

  await Item.findByIdAndDelete(itemID)
    .then(() => {
      res.status(200).send({ status: "Item Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with delete", error: err.message });
    });
});

// get one item details
router.route("/get/:id").get(async (req, res) => {
  let itemID = req.params.id;
  const items = await Item.findById(itemID)
    .then((itemss) => {
      // res.status(200).send({status:"Item fetched"});
      res.json(itemss);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});


module.exports = router;
