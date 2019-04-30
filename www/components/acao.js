$(document).on('click','#camera', function(){
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL });
    saveToPhotoToAlbum: true;

  function onSuccess(imageData) {
      var image = document.getElementById('imagem');
      image.src = "data:image/jpeg;base64," + imageData;
  }

  function onFail(message) {
      alert('Failed because: ' + message);
  }
});

$(document).on('click','#scan', function(){
  scanBarcode();
});

function scanBarcode() {
        window.plugins.barcodeScanner.scan( function(result) {
                alert("We got a barcode\n" +
                          "Result: " + result.text + "\n" +
                          "Format: " + result.format + "\n" +
                          "Cancelled: " + result.cancelled);
            }, function(error) {
                alert("Scanning failed: " + error);
            }
        );

    }
