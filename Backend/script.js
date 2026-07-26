let n=5;
for (i=0;i<=5;i++){
    console.log("hello",+i);
}
console.log("bye");


let argv = process.argv;
for(let j=2;j<argv.length;j++){
    console.log("hello ",argv[j]);
}

const math=require("./math");
console.log(math);
