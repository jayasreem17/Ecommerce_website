function permissionGuard(rolesAllowed = []) {
  return (req, res, next) => {
    if (!req.user || !rolesAllowed.includes(req.user.role)) {
      return res.status(403).json({ msg: 'You do not have permission' });
    }
    next();
  };
}

module.exports = permissionGuard;