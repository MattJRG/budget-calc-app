function readBlob(opt_startByte, opt_stopByte) {
	  
	var files = document.getElementById('files').files;
	if (!files.length) {
	  alert('Please select a file!');
	  return;
	}

	var file = files[0];
	var start = parseInt(opt_startByte) || 0;
	var stop = parseInt(opt_stopByte) || file.size - 1;

	var reader = new FileReader();

	// If we use onloadend, we need to check the readyState.
	reader.onloadend = function(evt) {
	  if (evt.target.readyState == FileReader.DONE) { // DONE == 2
		document.getElementById('file_content').textContent = evt.target.result;
		var csvData = evt.target.result.split(",");
		  document.getElementById("sampleId").value = csvData[0];
		  document.getElementById("ph").value = csvData[1];
		  document.getElementById("conductivity").value = csvData[2];
		  document.getElementById("tds").value = csvData[3];
		  document.getElementById("nitrate").value = csvData[4];
		  document.getElementById("ammonia").value = csvData[5];
		  document.getElementById("calcium").value = csvData[6];
		  document.getElementById("chloride").value = csvData[7];
		  document.getElementById("magnesium").value = csvData[8];
		  document.getElementById("phosphorus").value = csvData[9];
		  document.getElementById("potassium").value = csvData[10];
		  document.getElementById("sodium").value = csvData[11];
		  document.getElementById("sulphate").value = csvData[12];
		  document.getElementById("aluminium").value = csvData[13];
		  document.getElementById("copper").value = csvData[14];
		  document.getElementById("iron").value = csvData[15];
		  document.getElementById("manganese").value = csvData[16];
		  document.getElementById("zinc").value = csvData[17];
		  document.getElementById("boron").value = csvData[18];
		  document.getElementById("hardness").value = (parseFloat(document.getElementById("calcium").value)*2.497 + parseFloat(document.getElementById("magnesium").value)*4.116).toFixed(0);
						  
			document.getElementById('byte_range').textContent = 
			['Read bytes: ', start + 1, ' - ', stop + 1,
             ' of ', file.size, ' byte file'].join('');

      }
	};

	var blob = file.slice(start, stop + 1);
	reader.readAsBinaryString(blob);
  }
  
  document.querySelector('.readBytesButtons').addEventListener('click', function(evt) {
	if (evt.target.tagName.toLowerCase() == 'button') {
	  var startByte = evt.target.getAttribute('data-startbyte');
	  var endByte = evt.target.getAttribute('data-endbyte');
	  readBlob(startByte, endByte);
	}
  }, false);