hashtagInput.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      event.stopPropagation();
    }
  });