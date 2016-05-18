(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var el = document.getElementById("deviceready");
        el.innerHTML = 'Take Picture';
        el.className += ' ready';
        el.addEventListener('click', function(e){
            navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI });
        })

        function onSuccess(imageURI) {
            var img = document.createElement('img');
            img.src = imageURI;
            document.body.appendChild(img);
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();
