(function () {
    let answerGroups = document.querySelectorAll('.group-cautraloi');
    let opinionInputs = document.querySelectorAll('.input-ykien');

    answerGroups.forEach(group => {
        group.querySelectorAll('input[type=radio]')[4].setAttribute('checked', 'checked');
    });
    answerGroups[answerGroups.length - 2].querySelectorAll('input[type=radio]')[2].setAttribute('checked', 'checked');
    answerGroups[answerGroups.length - 1].querySelectorAll('input[type=radio]')[2].setAttribute('checked', 'checked');
    opinionInputs.forEach(input => {
        input.value = 'Không có ý kiến';
    });

    document.querySelector('input[type=submit]').click();
})();
