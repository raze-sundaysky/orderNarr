const fs = require("fs-extra"); //File system
const path = require("path"); //Path
const globby = require("globby"); //batch files
const chalk = require("chalk"); //color terminal


module.exports = (workingDir, method) => {
    console.log(workingDir);
    const narrFilePaths = globby.sync(path.join(workingDir, "**.mp3"));

    for (let i = 0; i < narrFilePaths.length; i++) {
      if(method === "old") {
      let fileNameSeparated = path.basename(narrFilePaths[i]).split(" ");
      fs.moveSync(narrFilePaths[i], path.join(workingDir, fileNameSeparated[0], fileNameSeparated[1], fileNameSeparated[2].replace("-cm", "")));
    } else {
        let fileName = path.basename(narrFilePaths[i]).replace("-cm", "").replace(/\s/g, "_");
        fs.moveSync(narrFilePaths[i], path.join(workingDir, fileName));
      }
    }
    console.log(chalk.green("Finished!"));
};
