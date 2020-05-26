module.exports = {

  index: (req, res) => {
    res.render('default/index');
  },

  login: (req, res) => {
    res.send('You have reached the login page.');
  },

  register: (req, res) => {
    res.send('You have reached the register page.');
  }

};