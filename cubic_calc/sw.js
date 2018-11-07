

importScripts("sw-toolbox.js"); 
 
toolbox.precache( ["https://profghost.github.io","index.html","sw.js","sw-toolbox.js" , "/css/main.css" , "/js/main.js",
                   "/images/n.jpg" , "/fonts/Linearicons-Free-v1.0.0/icon-font.min.css" , 
                   "/vendor/animate/animate.css", "/vendor/animsition/css/animsition.min.css", 
                   "/vendor/select2/select2.min.css", "/vendor/css-hamburgers/hamburgers.min.css"  , 
                   "/vendor/daterangepicker/daterangepicker.css" , "/images/bg-03.jpg" ,
                   "/fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.ttf" , 
                   "/fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.eot" , 
                   "/fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.woff",
                   "/fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.svg" , 
                   "/fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.woff2" ,
                   "https://profghost.github.io/fonts/font-awesome-4.7.0/css/font-awesome.min.css ",
                   "https://profghost.github.io/fonts/iconic/css/material-design-iconic-font.min.css",
                   "https://profghost.github.io/css/util.css",
                   "https://profghost.github.io/images/icons/logo.png",
                   "https://profghost.github.io/vendor/jquery/jquery-3.2.1.min.js",
                   "https://profghost.github.io/vendor/animsition/js/animsition.min.js",
                   "https://profghost.github.io/vendor/select2/select2.min.js",
                   "https://profghost.github.io/vendor/daterangepicker/moment.min.js",
                   "https://profghost.github.io/vendor/daterangepicker/daterangepicker.js",
                   "https://profghost.github.io/fonts/montserrat/Montserrat-Regular.ttf",
                   "https://profghost.github.io/fonts/montserrat/Montserrat-Bold.ttf",
                   "https://cdn.linearicons.com/free/1.0.0/Linearicons-Free.woff2",
                   "https://cdn.linearicons.com/free/1.0.0/Linearicons-Free.ttf",
                   "https://cdn.linearicons.com/free/1.0.0/Linearicons-Free.woff"
                   
                   ] ); 
  
toolbox.router.get("index.html", toolbox.cacheFirst); 
//toolbox.router.get("https://profghost.github.io", toolbox.networkFirst, { networkTimeoutSeconds: 5});
self.addEventListener('fetch', function(event) {



event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});
  
