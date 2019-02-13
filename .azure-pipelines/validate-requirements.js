const awesomeLint = require('awesome-lint');
const fs = require('fs');
const ncp = require('child_process');
const path = require('path');
const vfileReporterPretty = require('vfile-reporter-pretty');

const testFileName = path.join(__dirname, 'test-results.xml');

// Pull out urls of awesome lists added
var getAwesomeRepoUrlsFromPR = function () {
    var awesomeRepoUrls = ['../readme.md'];
    var prId = process.env['SYSTEM_PULLREQUEST_PULLREQUESTNUMBER'];
    var output = ncp.execSync('git --no-pager diff origin/master refs/remotes/pull/' + prId + '/merge', {stdio: 'pipe'});
    output = (output || '').toString().trim();
    output.split('\n')
        .forEach(line => {
            if (line.startsWith('+')) {
                // Match github urls
                var githubRegEx = /(http|ftp|https):\/\/github\.com\/([\w.,@?^=%&:/~+-]*[\w@?^=%&/~+-])/;
                var matched = line.match(githubRegEx);
                if (matched) {
                    awesomeRepoUrls.push(matched[0]);
                }
            }
        });
    console.log('Will run awesome-lint on the following repos:');
    awesomeRepoUrls.forEach(url => {
        console.log(url)
    });
    console.log('https://github.com/sindresorhus/awesome-lint');

    return awesomeRepoUrls;
}

// Function to write test results to file if publishTests is enabled
var writeToTestFile = function(text) {
    fs.appendFileSync(testFileName, text, function (err) {
        if (err) throw err;
    });
} 

// Custom reporter that appends test results to a file if publish tests is enabled.
// Returns nicely formatted results for the console.
var appendTestResults = function (vFileArr) {
    var appendToFile = '';
    if (vFileArr.length > 0) {
        var {messages} = vFileArr[0];
        messages.forEach((message) => {
            appendToFile += `\t\t<testcase classname="awesome-lint" name="${message.ruleId}">\n`;
            appendToFile += `\t\t\t<failure> ${message.reason} </failure>\n`
            appendToFile += `\t\t</testcase>\n`;
        });
    }
    else {
        appendToFile += `\t\t<testcase classname="awesome-lint" name="Lint checks">\n`;
        appendToFile += `\t\t</testcase>\n`;
    }
    appendToFile += '\t</testsuite>\n';
    writeToTestFile(appendToFile);
    return vfileReporterPretty(vFileArr);
}

// Run awesome-lint on all repos we've pulled out
var runAwesomeLint = function (awesomeRepoUrls) {
    if (awesomeRepoUrls.length != 0) {
        var url = awesomeRepoUrls[awesomeRepoUrls.length - 1];
        writeToTestFile(`\t<testsuite tests="1" name="${url}">\n`);
        awesomeRepoUrls.splice(awesomeRepoUrls.length - 1);
        console.log('\n---------------------------------------------------------------------');
        console.log('Running awesome-lint on', url);
        console.log('---------------------------------------------------------------------\n');
        var options = { config: require(path.join(__dirname, 'config')), filename: url, reporter: appendTestResults };
        awesomeLint.report(options).then((vFile) => {
            runAwesomeLint(awesomeRepoUrls);
        });
    }
    else {
        writeToTestFile('</testsuites>');
    }
}

if (fs.existsSync(testFileName)) {
    fs.unlinkSync(testFileName, function (err) {
        if (err) throw err;
    });
}
writeToTestFile('<testsuites>\n');
var buildReason = (process.env['BUILD_REASON'] || '').toLowerCase();
console.log('Build reason:', buildReason);
if (buildReason == 'pullrequest') {
    var awesomeRepoUrls = getAwesomeRepoUrlsFromPR();
    runAwesomeLint(awesomeRepoUrls);
}
else {
    runAwesomeLint(['../readme.md']);
}