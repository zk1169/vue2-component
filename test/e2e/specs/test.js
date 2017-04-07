// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    // before: function(browser) {
    //     console.log('Setting up...');
    // },

    // after: function(browser) {
    //     console.log('Closing down...');
    // },

    // beforeEach: function(browser, done) {
    //     console.log('beforeEach');
    //     setTimeout(function() {
    //         // finished async duties
    //         console.log('beforeEach.done');
    //         done();
    //     }, 100);
    // },

    // afterEach: function(browser, done) {
    //     console.log('afterEach');
    //     setTimeout(function() {
    //         // finished async duties
    //         console.log('afterEach.done');
    //         done();
    //     }, 100);
    // },
    'Login Page Initial Render': function(browser) {
        var loginPage = browser.page.login();

        loginPage.navigate()
            .waitForElementVisible('body', 5000)
            .verify.visible('@userName')
            .verify.visible('@password')
            .setValue('@userName', '2057')
            .setValue('@password', '111')
            .click('@submit');
        //browser.end();
    },
    // 'step one': function(browser) {
    //     // automatically uses dev Server port from /config.index.js
    //     // default: http://localhost:8080
    //     // see nightwatch.conf.js
    //     const devServer = browser.globals.devServerURL

    //     browser
    //         .url(devServer)
    //         .waitForElementVisible('#app', 5000)
    //         .setValue('input[name=userName]', '2057')
    //         .setValue('input[name=password]', '111111')
    //         .click('button[name=btnLogin]')
    //         .pause(1000)
    //         //.assert.elementPresent('.hello')
    //         //.assert.containsText('h1', 'Welcome to Your Vue.js App')
    //         //.assert.elementCount('img', 1)
    // },
    // 'step two': function(browser) {
    //     browser
    //         .waitForElementVisible('.dashboard-component', 5000)
    //         .assert.containsText('.dashboard-component', 'Dashboard')
    //         .end();
    // }
}