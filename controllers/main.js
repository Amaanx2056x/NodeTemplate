const index = (req, res)=> {
  res.render("main", {
    message: 'THIS TEMPLATE IS USING HBS AS THE TEMPLATE ENJINE. YOU CAN CUSTOMISE INDEX.JS AS PER YOUR WISH.'
  })
}
module.exports = {
  index
}