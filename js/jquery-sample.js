            //JQuery
//$('div').html('<h1>Hello jQuery!</h1>'); 



            //Виконати після завантаження сторінки
// $(function() {
//     let divs = document.getElementsByTagName('div');
//     for (let i = 0; i < divs.length; i++) {
//         divs[i].innerHTML = '<h1>Hello jQuery!</h1>';
//     }

//     $('div').click(function() {
//         alert('Click');
//     });
// });


// $(function() {
//     let divs = document.getElementsByTagName('div');
//     for (let i = 0; i < divs.length; i++) {
//         divs[i].innerHTML = `<h1>Hello jQuery! ${i} </h1>`;
//     }

//     $('div').click(function() {
//       // $(this).fadeOut(1000);
//       //$(this).addClass('selected');
//       $(this).toggleClass('selected');
//     });
// });




$(function() {
  
    $('#btn-tab1').click(function(){
        hideAllTabs();
        showTab('#tab1');
    });
    $('#btn-tab2').click(function(){
        hideAllTabs();
        showTab('#tab2');
    });
    $('#btn-tab3').click(function(){
        hideAllTabs();
        showTab('#tab3');
    });
    
     setInterval(function(){
        $('#clock').html( (new Date()).toLocaleTimeString() );
    }, 1000);
    
});


function hideAllTabs() {
    $('.tab').hide();
}

function showTab(tabId) {
    $(tabId).show();
}



