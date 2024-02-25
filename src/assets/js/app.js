$('#select_money_receive').ddslick({
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }   
});
$('#select_money_contry').ddslick({
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }   
});
$('#select_money_valuta').ddslick({
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }   
});

// let rowSelected = document.querySelectorAll('[data-selected]');
// let imageSelected = document.querySelectorAll('[data-selectimage]');

// let screenSize= window.innerWidth;
// if(screenSize > 769){
//     rowSelected.forEach(element => {
//         element.addEventListener('mousemove',()=>{
//             element.style.color = 'white';
//             element.style.background = 'black';
//         });
//         element.addEventListener('mouseleave',()=>{
//             element.style.color = 'black';
//             element.style.background = '#e7e7f0';
//         });
//     });
// }