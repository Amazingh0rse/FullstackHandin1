const fs = require("fs")
 
for (let i = 1; i < 6; i++) {
  fs.mkdirSync(`Folder${i}`)
  fs.writeFileSync(`Folder${i}/file${i}.js`, "console.log('HI')")
}


async function testerParallel() {
    try {
        const p1 = filterDirMyPromise("Folder1", ".js");
        const p2 = filterDirMyPromise("Folder2", ".js");
        const p3 = filterDirMyPromise("Folder3", ".js");
        const p4 = filterDirMyPromise("Folder4", ".js");
        const p5 = filterDirMyPromise("Folder5", ".js");
        const allResults = await Promise.all([p1, p2, p3, p4, p5]);
        return allResults.join(", ");
    } catch (err) {
        console.error(err);
    }
}

async function outputParallel() {
    try {
        const data = await testerParallel();
        console.log(data);
    } catch (e) {
        console.log("Error: " + e);
    } finally {
        console.log("Done");
    }
}

outputParallel();