define(['sigma'], function (sigma) {
    var initialize,
        graph;

    initialize = function () {
          document.write(sigma, sigma === window.sigma);
//        console.log('init', sigma, sigma === window.sigma);
        // Here, d3 is well loaded and even MyOwnModule.
        // But unfortunately, sigma is undefined even if window.sigma is loaded
        // And of course, sigma === window.sigma returns false.
        graph = new sigma('graph-container');
    }

    return {
        'initialize': initialize
    }
});
