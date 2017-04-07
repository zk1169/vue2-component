// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'step one': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[name=userName]', '2057')
      .setValue('input[name=password]', '111111')
      .click('button[name=btnLogin]')
      .pause(1000)
      //.assert.elementPresent('.hello')
      //.assert.containsText('h1', 'Welcome to Your Vue.js App')
      //.assert.elementCount('img', 1)
  },
  'step two':function(browser){
    browser
      .waitForElementVisible('.dashboard-component', 5000)
      .assert.containsText('.dashboard-component', 'Dashboard')
      .end();
  }
}
