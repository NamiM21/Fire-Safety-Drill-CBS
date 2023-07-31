function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5s8p8GTxPa5":
        Script1();
        break;
  }
}

function Script1()
{
  generatePDF()

 // Function to generate the PDF
  function generatePDF() {
  try {
	var player = GetPlayer();
	var name = player.GetVar("yourName");
	} catch (e) {
	console.log(e)
	var name = "Dummy Name"
	}
	console.log("running generatePDF")
	window.jsPDF = window.jspdf.jsPDF;

    // Create a new jsPDF instance
    const doc = new jsPDF('landscape');

      // Load the image
      const img = new Image();
      img.src = 'CBSCertificate.png';
	  
      // Wait for the image to load
      img.onload = function() {
        const imageWidth = 300; // You can adjust the image width as per your requirement
        const imageHeight = (img.height * imageWidth) / img.width;

        // Calculate the x and y position to center the image on the PDF page
        const x = (doc.internal.pageSize.getWidth() - imageWidth) / 2;
        const y = (doc.internal.pageSize.getHeight() - imageHeight) / 2;

        // Add the image to the PDF
        doc.addImage(img, 'PNG', x, y, imageWidth, imageHeight);

        // Add the word "Mark" in the center of the image
        // const text = 'Hello Name';
		const text = name
		doc.setFont('Georgia', 'normal');
		doc.setFontSize(50)
        const textWidth = doc.getStringUnitWidth(text) * 17; // Font size is assumed to be 12 here
        const textX = x + (imageWidth - textWidth) / 2;
        const textY = y + imageHeight / 2 + 5;
        doc.text(textX, textY, text);

        // Add today's date in the center of the image
        const date = new Date().toLocaleDateString();
		doc.setFontSize(15)
        const dateWidth = doc.getStringUnitWidth(date) * 5;
        const dateX = x + (imageWidth - dateWidth) / 2 + 30;
        const dateY = textY + 55; // You can adjust the vertical position as per your requirement
        doc.text(dateX, dateY, date);

        // Save the PDF with a specified name
        doc.save('Fire-safety-training-certificate-' + name + '.pdf');
      };
    }
}

