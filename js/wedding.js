// Get that hamburger menu cookin'
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        if ($target) {
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        }
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  var target = $($.attr(this, "href"));
  if (target.length) {
    $("html, body").animate(
      {
        scrollTop: target.offset().top
      },
      500
    );
  }
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var toTopBtn = document.getElementById("toTop");
  if (!toTopBtn) return; // Prevent error if element doesn't exist

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});

// Replace deprecated $(window).load()
$(window).on('load', function() {
  $("body").addClass("preloader-site");
});




// Get URL parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const guestName = getQueryParam("name") || "ආදරණීය";
const type = getQueryParam("type")?.trim().toLowerCase();

let inviteLine = "";
switch(type) {
  case "mr": inviteLine = "මහත්මයාගේ ගෞරවනීය පැමිණීම අපේක්ෂා කරමු"; break;
  case "mrs": inviteLine = "මහත්මියගේ ගෞරවනීය පැමිණීම අපේක්ෂා කරමු"; break;
  case "miss": inviteLine = "මහත්මියගේ ගෞරවනීය පැමිණීම අපේක්ෂා කරමු"; break;
  case "family": inviteLine = "පවුලේ සැමගේ ගෞරවනීය පැමිණීම අපේක්ෂා කරමු"; break;
  case "couple": inviteLine = "ඔබ දෙපළගේ ගෞරවනීය පැමිණීම අපේක්ෂා කරමු"; break;
  default: inviteLine = "ඔබගේ ගෞරවනීය පැමිණීම අපේක්ෂා කරමු";
}

const inviteEl = document.getElementById("invite-line");
const guestEl = document.getElementById("guest-name");

inviteEl.textContent = inviteLine;

// Typing animation for guest name
function typeText(element, text, speed = 100) {
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

// Delay before typing starts
setTimeout(() => {
  typeText(guestEl, guestName, 150); // adjust speed (ms) here
}, 500);
