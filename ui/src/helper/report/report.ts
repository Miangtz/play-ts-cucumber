const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Tests report for Playwright with cucumber",
    displayDuration: false,
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Modify this value" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});