var config = require('../config');
describe("Server mode config setup", () => {
    it("should load local configurations", (next) => {
        var modeConf = config.serverMode();
        expect(modeConf.mode).toBe('local');
        next();
    });
    it("should load staging configurations", (next) => {
        var modeConf = config.serverMode('staging');
        expect(modeConf.mode).toBe('staging');
        next();
    });
    it("should load production configurations", (next) => {
        var modeConf = config.serverMode('production');
        expect(modeConf.mode).toBe('production');
        next();
    });
});