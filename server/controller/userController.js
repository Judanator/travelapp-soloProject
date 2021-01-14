const User = require("../models/userModel");

exports.postNewUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user === null) {
      User.create(
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
        (err, result) => {
          if (err) res.status(418);
          else {
            res.send("POST request" + result);
            res.redirect('/main')
          }
        }
      );
    } else {
      console.log('user already exists')
      res.redirect('/main')
    }
  });
};

exports.test = (req, res) => {
  console.log('test working')
  res.send('test working')
}