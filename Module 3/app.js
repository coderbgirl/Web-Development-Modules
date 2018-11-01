let fileData = require('./fileData');
let textMetrics = require('./textMetrics');

for (let i = 1; i <= 3; i++) {
    let filename = "chapter" + i;
    let jsonFileResult = fileData.getFileAsJSON(filename + ".result.json");


    jsonFileResult.then((data) => {
        console.log("Step 1: " + filename + ".result.json read successfully:");
        console.log(data);
        console.log("Step 1 successful for " + filename + ". Ending steps as per Lab 3 steps.")
        return "Step 1 successful. Ignore other steps";
    }, (error) => {
        console.log("Step 1: Error parsing " + filename + ".result.json. Moving to step 2.");
    }).then((data) => {
        if (data === "Step 1 successful. Ignore other steps") {
            return "Step 1 successful. Ignore other steps";
        }
        return fileData.getFileAsString(filename + ".txt");
    }).catch((error) => {
        console.log("Error opening text file: " + filename + ".txt");
        console.log(error);
    }).then((text) => {
        if (text === "Step 1 successful. Ignore other steps") {
            return "Step 1 successful. Ignore other steps";
        }
        return textMetrics.createMetrics(text);
    }).then((data) => {
        if (data === "Step 1 successful. Ignore other steps") {
            return "Step 1 successful. Ignore other steps";
        }
        console.log("Step 3: " + filename + ".txt text metrics created successfully.");
        return fileData.saveJSONToFile(filename + ".result.json", data);
    }, (error) => {
        console.log("Error writing JSON file: " + filename + ".result.json");
        console.log(error);
    }).then((data) => {
        if (data === "Step 1 successful. Ignore other steps") {
            return "Step 1 successful. Ignore other steps";
        }
        console.log("Step 4: Printing text metrics for " + filename + ":");
        console.log(data);
    });
}