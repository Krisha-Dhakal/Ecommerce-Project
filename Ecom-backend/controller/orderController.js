const order = require("../models/orderModel");
// const productModel = require("../models/productModel");

// app.use("/",(req,res)=>{}) <---middleware // "/" handled by router & (req,res).... is handled here
exports.createOrder = async (req, res) => {
  const { product, status, customer } = req.body;
  console.log(customer);

  if (
    !status ||
    !product ||
    !product.productName ||
    !product.productId ||
    !product.productImage ||
    !product.price ||
    !customer ||
    !customer.fullName ||
    !customer.email ||
    !customer.contact
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newOrder = await order.create({
      customer: {
        fullName: customer.fullName,
        contact: customer.contact,
        email: customer.email,
      },
      product: {
        productName: product.productName,
        productId: product.productId,
        productImage: product.productImage,
        price: product.price,
      },
      status: status,
    });

    // product quantity count functionality
    // const product = await productModel.findById(product.productId);
    // const updateQuantity= await productModel.updateOne({quantity:product.quantity-1})

    console.log("The newly created data are:", newOrder);

    res.status(201).json({ message: "new order successfully created" });
  } catch (err) {
    res.status(400).json({ message: "new order couldn't be created" });

    console.log(err.message);
  }
};

exports.getAllOrders = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;
  const status = req.query.status || "";

  try {
    const orders = await order
      .find(status ? { status } : {})
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json({ orders });
  } catch (err) {
    console.log(err.message);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const requestedOrder = await order.findById(req.params.id);

    if (!requestedOrder) {
      res.status(404).json({ message: "Requested Order not found" });
    }

    res.status(200).json({ message: requestedOrder });
  } catch (err) {
    console.log(err.message);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const requestedOrder = await order.findById(req.params.id);

    if (requestedOrder) {
      await requestedOrder.deleteOne();
      res.status(201).json({ message: "Succesfully deleted user" });
    }
    res.status(404).json({ message: "Order with corresponding ID not found" });
  } catch (err) {
    console.log(err.message);
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { product, status } = req.body;
    // const updatedOrder = await order.findByIdAndUpdate(req.params.id,{

    // })

    console.log(product, "\n This is product");
    console.log(`Status:${status}`);

    if (
      !product ||
      !status ||
      !product.productName ||
      !product.productId ||
      !product.productImage ||
      !product.price
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const updatedData = await order.findByIdAndUpdate(
      req.params.id,
      { product, status },
      { new: false }
    );

    res.status(201).json({ updatedData });
    // const requestedData = await order.findByIdAndUpdate(req.params.id, {});
  } catch (err) {
    console.log(err.message);
  }
};

exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const statusList = ["accepted", "pending", "requested"];

    // console.log(Boolean(status in ["accepted", "pending", "requested"]));

    // if (!(status in ["accepted", "pending", "requested"])) {
    //   return res.status(400).json({ message: "Invalid Status" });
    // }

    console.log(Boolean(statusList.some((item) => item === status)));

    console.log(status);

    // if (!statusList.some((item) => item === status)) {
    //   return res.status(400).json({ message: "Invalid status" });
    // }

    const updatedStatus = await order.findByIdAndUpdate(id, { status: status });

    if (!updatedStatus) {
      return res.status(400).json({ message: "Invalid status" });
    }

    res.status(200).json({ updatedStatus, message: "successfully" });
  } catch (err) {
    next(err);
  }
};
