const User = require('../models/User');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const Orders = require('../models/Orders');

const userControllers = {
    //get all users admin
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json('Lấy thông tin tài khoản tất bại');
        }
    },

    //delete user admin
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            const listuser = await User.find();
            res.status(200).json(listuser);
        } catch (error) {
            res.status(500).json('Xóa tài khoản thất bại');
        }
    },

    //update info listUser admin
    updateListUser: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body.body);
            const listuser = await User.find();
            res.status(200).json(listuser);
        } catch (error) {
            res.status(500).json('Cập nhật thông tin thất bại');
        }
    },

    //get all products admin
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json('Lấy danh sách sản phẩm thất bại');
        }
    },

    //Create product admin
    createProduct: async (req, res) => {
        try {
            const newProduct = await new Product({
                name: req.body.name,
                product: {
                    avatar: req.body.avatar,
                    description: req.body.description,
                    number: req.body.number,
                    price: req.body.price,
                    cost: req.body.cost,
                    percent: req.body.percent,
                    cpu: req.body.cpu,
                    hardrive: req.body.hardrive,
                    muxSwitch: req.body.muxSwitch,
                    creen: req.body.creen,
                    webcam: req.body.webcam,
                    connection: req.body.connection,
                    weight: req.body.weight,
                    pin: req.body.pin,
                    operetingSystem: req.body.operetingSystem,
                },
            });

            const product = await newProduct.save();
            const listProduct = await Product.find();
            res.status(200).json(listProduct);
        } catch (error) {
            res.status(500).json('Tạo sản phẩm mới thất bại');
        }
    },

    //delete product admin
    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            const listProduct = await Product.find();
            res.status(200).json(listProduct);
        } catch (error) {
            res.status(500).json('Xóa sản phẩm thất bại');
        }
    },

    //update Product admin
    updateProduct: async (req, res) => {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body.body);
            const listProduct = await Product.find();
            res.status(200).json(listProduct);
        } catch (error) {
            res.status(500).json('Cập nhật thông tin sản phẩm thất bại');
        }
    },

    //add product to cart
    createCart: async (req, res) => {
        try {
            const newCart = await new Cart({
                userId: req.body.userId,
                productId: req.body.productId,
                description: req.body.description,
                avatar: req.body.avatar,
                price: req.body.price,
                count: req.body.count,
                productTotal: req.body.productTotal,
            });

            const cart = await newCart.save();
            const allCarts = await Cart.find();
            res.status(200).json(allCarts);
        } catch (error) {
            res.status(500).json('Thêm sản phẩm thất bại');
        }
    },

    //get all products to cart
    getAllCarts: async (req, res) => {
        try {
            const allCarts = await Cart.find();
            res.status(200).json(allCarts);
        } catch (error) {
            res.status(500).json('Lấy tất cả giỏ hàng thất bại');
        }
    },

    //delete product from cart
    deleteProductCarts: async (req, res) => {
        try {
            const product = await Cart.findByIdAndDelete(req.params.id);
            const newCarts = await Cart.find();

            res.status(200).json(newCarts);
        } catch (error) {
            res.status(500).json('Xóa thất bại');
        }
    },

    //create new order
    createNewOrder: async (req, res) => {
        try {
            //Đang lỗi khi tiến hành đặt hàng thành công thì số lượng sản phẩm trong database chưa giảm
            // let arrListProducts = [];
            // //lấy id và số lượng của từng sản phẩm trong list đặt hàng ra
            // req.body.listproduct.map((item) => {
            //     arrListProducts.push({
            //         productId: item.productId,
            //         count: item.count,
            //     });
            // });

            // //Cập nhật lại số lượng sản phẩm trong kho
            // arrListProducts.map((item) => {
            //     const product = Product.findById(item.productId);
            //     product._doc.listproduct.number = product._doc.listproduct.number - req.body.count;
            //     const { ...other } = { ...product._doc };
            //     // await Product.findByIdAndUpdate(req.body.productId, { ...other });
            // });

            const newOrder = await new Orders({
                listproduct: req.body.listproduct,
                paymentMethods: req.body.paymentMethods,
                total: req.body.total,
                tradingCode: req.body.tradingCode,
                isPayment: req.body.isPayment,
                istransported: req.body.istransported,
                isSuccess: req.body.isSuccess,
            });

            const order = await newOrder.save();
            const allOrders = await Orders.find();

            await res.status(200).json(allOrders);
        } catch (error) {
            res.status(500).json('Đặt hàng thất bại');
        }
    },

    //get all orders
    getAllOders: async (req, res) => {
        try {
            const allOrders = await Orders.find();
            res.status(200).json(allOrders);
        } catch (error) {
            res.status(500).json('Lấy tất cả đơn hàng thất bại');
        }
    },
};

module.exports = userControllers;
