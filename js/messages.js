const $ = require('jquery');

const messageClose = '<a href="#" class="js-close-message messages__close"><span>Close</span></a>';

/**
* Adds a close button to system message banner, with optional callback.
*
* @param {jQuery}   $messages  Object containing message divs to be modified.
* @param {function} callback   Callback fired after message is closed.
*/
function attachCloseButton($messages, callback = null) {
  // Create message close button
  $messages.append(messageClose);

  // Close message when 'x' is clicked:
  $messages.on('click', '.js-close-message', function (event) {
    event.preventDefault();
    $(this).parent('.messages').slideUp();

    if (callback && typeof callback === 'function') {
      callback();
    }
  });
}

// Prepare any messages in the DOM on load
$(document).ready(() => {
  attachCloseButton($('.messages'));
});

export default { attachCloseButton };
