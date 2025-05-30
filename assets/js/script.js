document.addEventListener("DOMContentLoaded", function () {
  const secretInput = document.getElementById("secret");
  const submitButton = document.getElementById("submit");
  const resultDiv = document.getElementById("result");
  const totpCodeDisplay = document.getElementById("totp-code");
  const timerDisplay = document.getElementById("countdown");
  const progressBar = document.getElementById("progress");
  const errorMessage = document.getElementById("error");
  const copyButton = document.getElementById("copy-button");
  const copyTooltip = document.getElementById("copy-tooltip");

  const urlParams = new URLSearchParams(window.location.search);
  const secretParam = urlParams.get("secret");

  if (secretParam) {
    secretInput.value = secretParam;

    window.addEventListener("load", function () {
      setTimeout(function () {
        submitButton.click();
      }, 100);
    });
  }

  let intervalId = null;

  // Focus on secret input when page loads (only on mobile)
  if (window.innerWidth < 768) {
    setTimeout(() => {
      secretInput.focus();
    }, 500);
  }

  // Copy to clipboard functionality
  copyButton.addEventListener("click", function () {
    const code = totpCodeDisplay.textContent;
    navigator.clipboard
      .writeText(code)
      .then(() => {
        // Show tooltip
        copyTooltip.style.opacity = "1";

        // Hide tooltip after 2 seconds
        setTimeout(() => {
          copyTooltip.style.opacity = "0";
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });

  submitButton.addEventListener("click", function () {
    const secret = secretInput.value.replace(/\s+/g, "");

    if (!secret) {
      errorMessage.style.display = "block";
      resultDiv.style.display = "none";
      return;
    }

    try {
      // Clear previous interval if exists
      if (intervalId) {
        clearInterval(intervalId);
      }

      errorMessage.style.display = "none";

      // Create TOTP object
      const totp = new OTPAuth.TOTP({
        issuer: "TOTP Generator",
        label: "User",
        algorithm: "SHA1",
        digits: 6,
        period: 30,
        secret: OTPAuth.Secret.fromBase32(secret),
      });

      // Function to update TOTP code and timer
      function updateTOTP() {
        const token = totp.generate();
        totpCodeDisplay.textContent = token;

        // Calculate remaining time
        const epoch = Math.floor(Date.now() / 1000);
        const countdown = 30 - (epoch % 30);
        timerDisplay.textContent = countdown;

        // Update progress bar with smooth transition
        progressBar.style.width = `${(countdown / 30) * 100}%`;
      }

      // Show result div
      resultDiv.style.display = "block";

      // Initial update
      updateTOTP();

      // Set interval to update every second
      intervalId = setInterval(updateTOTP, 1000);
    } catch (error) {
      resultDiv.style.display = "none";
      errorMessage.style.display = "block";
      console.error("Error generating TOTP:", error);
    }
  });

  // Handle form submission when Enter key is pressed
  secretInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      submitButton.click();
    }
  });
});
