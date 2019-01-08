function validateQuestion(req, res, next) {
  if (!req.body.meetupId) {
    return res.status(400).json({
      status: 400,
      error: 'This meetup is not registered',
    });
  }
  if (!req.body.createdBy) {
    return res.status(400).json({
      status: 400,
      error: 'This user is not registered',
    });
  }
  if (!req.body.title) {
    return res.status(400).json({
      status: 400,
      error: 'There is not such topic',
    });
  }
  if (!req.body.body) {
    return res.status(400).json({
      status: 400,
      error: 'Sorry! this question is not found',
    });
  }
  if (!Number.parseInt(req.body.createdBy, 10)) {
    return res.status(400).json({
      status: 400,
      error: 'Wrong input',
    });
  }
  if (!Number.parseInt(req.body.meetupId, 10)) {
    return res.status(400).json({
      status: 400,
      error: 'Wrong input',
    });
  }
  next();
}

export {
  validateQuestion,
};