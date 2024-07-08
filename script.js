// script.js

document.getElementById('downloadButton').addEventListener('click', function() {
    // Create an invisible anchor element
    var downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'Dashrath Arvind Yadav'); // Specify file name
    downloadLink.setAttribute('href', 'C:/Users/Dashrath/Downloads/Dashrath_Arvind_Yadav_Resume.pdf'); // Specify the path of the file
  
    // Append the anchor element to the body
    document.body.appendChild(downloadLink);
  
    // Trigger the click event on the anchor element
    downloadLink.click();
  
    // Clean up
    document.body.removeChild(downloadLink);
  });
  