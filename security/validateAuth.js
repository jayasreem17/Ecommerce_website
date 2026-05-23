// This is a mock authentication for testing
function validateAuth(req, res, next) {
  const userHeader = req.headers['x-user'];
  if (!userHeader) return res.status(401).json({ msg: 'Unauthorized' });

  try {
    req.user = JSON.parse(userHeader);
    next();
  } catch {
    return res.status(400).json({ msg: 'Invalid header format' });
  }
}

module.exports = validateAuth;