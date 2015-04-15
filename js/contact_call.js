$(document).ready(function() {

    function error(errorId, errorMsg) {
        alert(errorId);
    }

    $("#webcam").scriptcam({
        path: 'js/scriptcam/',
        onError: error,
        width: 400,
        height: 300
    });
});
