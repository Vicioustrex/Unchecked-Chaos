      //get the fullscreen button
      var exit_button = document.getElementById("close");

      //if the fullscreen button is clicked open in fullscreen
      exit_button.addEventListener("click", () => {
        document.getElementById("save-popup").style.display = "none";

      });
