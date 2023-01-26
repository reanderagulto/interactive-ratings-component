var selectedRate = 0;

$(document).ready(function(){
    rates();
    submit();
})

function rates(){
    $(document).on('click', '.rate', function(){
        $('.rate').removeClass('selected');
        selectedRate = parseInt($(this).text());
        $('#rate').text(selectedRate);
        $(this).addClass('selected');
    })
}

function submit(){
    $(document).on('click', '#submit', function(){
        if(selectedRate === 0){
            alert('Please Select a rating!');
        }
        else if(selectedRate !== 0){
            $('.review-container').addClass('inactive').hide();
            $('.thankyou-container').addClass('active').show();
        }
    });
}