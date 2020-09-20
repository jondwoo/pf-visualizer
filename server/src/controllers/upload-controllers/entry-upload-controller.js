const entryUploadController = (req, res) => {
  return res.json({
    message: 'Success',
    amount: req.body.amount,
    type: req.body.type,
    category: req.body.category,
    description: req.body.description,
  });
};

module.exports = entryUploadController;
