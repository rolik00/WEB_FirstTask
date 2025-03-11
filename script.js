document.getElementById('info-btn').addEventListener('click', function() {
    var extraInfo = document.getElementById('extra-info');
    if (extraInfo.classList.contains('hidden')) {
        extraInfo.classList.remove('hidden');
    } else {
        extraInfo.classList.add('hidden');
    }
});
