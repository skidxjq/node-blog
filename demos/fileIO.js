var fs=require("fs");
console.log(fs);

function readAndWriteFile(destSrc,originSrc){
    //fs.write
    fs.writeFileSync(destSrc, fs.readFileSync(originSrc));
}


function main(argv){
    readAndWriteFile(argv[0],argv[1]);
}

main(process.argv.slice(2));
