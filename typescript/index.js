document
  .querySelectorAll(".leftSide button")
  .forEach((button, index, buttons) => {
    button.addEventListener("mouseenter", function () {
      const currentWidth = this.clientWidth + "px";
      const middleIndex = Math.floor(buttons.length / 2);

      buttons.forEach((btn, idx) => {
        const distance = Math.abs(idx - index);
        const widthPercentage = 100 - 20 * distance;
        const width = widthPercentage + "%";
        btn.style.width = width;
      });
    });

    button.addEventListener("mouseleave", function () {
      buttons.forEach((btn) => {
        btn.style.width = "25%";
      });
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const rightSideImage = document.querySelector(".rightSide img");
  const rightSideText = document.querySelector(".rightSide .text");
  const playButton = document.querySelector(".rightSide .playButton");

  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const button3 = document.getElementById("button3");
  const button4 = document.getElementById("button4");
  const button5 = document.getElementById("button5");

  function updateContent(imageSrc, newText, playButtonAction) {
    rightSideImage.src = imageSrc;
    rightSideText.textContent = newText;
    playButton.removeEventListener("click", playButtonAction);
    playButton.addEventListener("click", playButtonAction);
  }

  button1.addEventListener("mouseenter", function () {
    updateContent(
      "https://i.kym-cdn.com/photos/images/original/001/661/465/f30.png",
      "Express your creativity in this drawing game!",
      function () {
        window.location.href = "Drawing.html";
      }
    );
  });

  button2.addEventListener("mouseenter", function () {
    updateContent(
      "https://pestdude.com/wp-content/uploads/2022/12/Snails.png.webp",
      "Explanation about the whole anatomy of snails funny",
      function () {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      }
    );
  });

  button3.addEventListener("mouseenter", function () {
    updateContent(
      "https://i.ytimg.com/vi/fuHdpQVtpHc/mqdefault.jpg",
      "Philosophical analysis about modern society",
      function () {
        window.location.href = "PostTruth.html";
      }
    );
  });

  button4.addEventListener("mouseenter", function () {
    updateContent(
      "https://static.wikia.nocookie.net/lethalcompanyzeekerss/images/c/c8/Logo-transparent.png/revision/latest?cb=20231118213853",
      "Review about the game: Lethal Company",
      function () {
        window.location.href = "LethalCompany.html";
      }
    );
  });

  button5.addEventListener("mouseenter", function () {
    updateContent(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a243a29-186e-46e2-b5fd-3581c92b8930/ddpvp4h-4882a258-f903-4395-8045-5da664451621.png/v1/fill/w_801,h_341/png___meme___the_boys_by_supercaptainn_ddpvp4h-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQxIiwicGF0aCI6IlwvZlwvNGEyNDNhMjktMTg2ZS00NmUyLWI1ZmQtMzU4MWM5MmI4OTMwXC9kZHB2cDRoLTQ4ODJhMjU4LWY5MDMtNDM5NS04MDQ1LTVkYTY2NDQ1MTYyMS5wbmciLCJ3aWR0aCI6Ijw9ODAxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.RfQvKE_cdBf8wj5xQP9Ci7nuw6jrSgFnCLNZt9Rz6co",
      "About Us",
      function () {
        window.location.href = "about.html";
      }
    );
  });
});
