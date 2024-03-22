// Immediately Invoked Function Expressions (IIFE)

(function chai()
{
    // Named IIFE
    console.log(`DB Connected`);
})();

// chai()

((name)=>{
    console.log(`DB Connected Two ${name}`);
})('Skr Suman')
