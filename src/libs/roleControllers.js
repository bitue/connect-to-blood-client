const roleSchema = {
    user: ['user'],
    donor: ['donor', 'user'],
    admin: ['user', 'donor', 'admin']
};

module.exports = {
    roleSchema
};
