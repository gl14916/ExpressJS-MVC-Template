var modes = {
    local: {
        mode: 'local',
        port: 3000
    },
    staging: {
        mode: 'staging',
        port: 3001
    },
    production: {
        mode: 'production',
        port: 3002
    }
}

module.exports.dbAuth = require('./db.js');

module.exports.serverMode = (mode) => {
    return modes[mode || process.argv[2] || 'local'] || modes.local;
}
