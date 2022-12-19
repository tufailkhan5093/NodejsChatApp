const { User, Chat } = require("../models");

const bcrypt = require("bcrypt");
async function adduser(req, res) {
  const salt = await bcrypt.genSalt(10);
  const check = await User.findOne({ where: { name: req.body.email } });
  if (check) {
    return res.json({
      status: "0",
      message: "User already exist",
      data: {},
    });
  }

  const service_image = req.file;
  let tmpPath = service_image.path;
  let imagePath = tmpPath.replace(/\\/g, "/");

  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.image = imagePath;
  user.password = await bcrypt.hash(req.body.password, salt);
  user
    .save()
    .then((data) => {
      return res.json({
        status: "1",
        message: "User Added",
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        status: "0",
        message: err,
        data: {},
      });
    });
}
async function login(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (user) {
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (validPassword) {
      return res.json({
        status: "1",
        message: "Login Successfully",
        data: user,
      });
    } else {
      return res.json({
        status: "0",
        message: "Password Mismatch",
        data: {},
      });
    }
  } else {
    return res.json({
      status: "0",
      message: "User not available",
      data: {},
    });
  }
}

async function all_users(req, res) {
  const users = await User.findAll({});
  return res.json({ status: "1", message: "", data: users });
}

async function send_message(req, res) {
  const receiver = new Chat();
  receiver.name = req.body.message;
  receiver.ReceiverId = req.body.SenderId;
  receiver.SenderId = req.body.ReceiverId;
  receiver.sender = req.body.Sender;
  await receiver.save();

  const chat = new Chat();
  chat.name = req.body.message;
  chat.SenderId = req.body.SenderId;
  chat.sender = req.body.Sender;
  chat.ReceiverId = req.body.ReceiverId;
  chat
    .save()
    .then((dat) => {
      return res.json({ status: "1", data: dat, message: "Sent" });
    })
    .catch((err) => {
      return res.json({ status: "0", data: {}, message: err });
    });
}

async function get_messages(req, res) {
  const messages = await Chat.findAll({
    where: [
      { SenderId: req.params.userId },
      { ReceiverId: req.params.receiverId },
    ],
    include: [
      { model: User, as: "Sender" },
      { model: User, as: "Receiver" },
    ],
  });
  return res.json({ status: "1", message: "", data: messages });
}

module.exports = {
  adduser,
  login,
  send_message,
  all_users,
  get_messages,
};
