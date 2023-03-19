const router = require("express").Router();
const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//' Create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//'Update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, //? mongo DB $set
      },
      { new: true } //?return the modified document rather than the original
    );
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//'Delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//'Get Product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//'Get All Products
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  //? Only Admin get any user
  const query = req.query.new;
  try {
    const user = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    const { password, ...others } = user._doc; //? have no idea

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//'Get User Stats

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date(); //? create current date
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1)); //? return last year of today

  try {
    //' mongo DB aggregate
    //?
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" }, //?september => month: 9
        },
      },
      {
        $group: {
          _id: "$month", //? month: 9 (up there)
          total: { $sum: 1 }, //?sum and get total number of every register user
        },
      },
    ]);
    res.status(200).json(data); //? => [{"_id": 9, "total": 2 }]
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
