var idtemp1 = -2;
function fn_arrow(id) 
    {
        image_fn_arrow(idtemp1)
        if (idtemp1 == 2) {
            idtemp1 = -2;
        } else {
            idtemp1 = idtemp1 + 1;
        }
        var id_1 = idtemp1+"_a";
      
        var id_1 = "car"+id_1;
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("carousel-descrip_t1");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
       
        document.getElementById(id_1).style.display = "block";
        // evt.currentTarget.className += " active";
    }


    const state_arrow = {};
const carouselList_arrow = document.querySelector('.carousel_list');
const carouselItems_arrow = document.querySelectorAll('.carousel_item1');
const elems_arrow = Array.from(carouselItems_arrow);

var temp_var_arrow = 0

function image_fn_arrow(idtemp1){
    // var newActive_arrow = event.target;
    // var isItem_arrow = newActive_arrow.closest('.carousel__item');
    if (temp_var_arrow == 5) {
        temp_var_arrow = 0 
    } else {
        temp_var_arrow = temp_var_arrow + 1
    }
    var newActive_arrow = temp_var_arrow

    // if (!isItem || newActive_arrow.classList.contains('carousel__item_active')) {
    //     return;
    // };

    update_arrow(newActive_arrow);
};

var ite_tear_arrow = NaN;

// carouselList_arrow.addEventListener('click', function (event) {
//     var newActive_arrow = event.target;
//     var isItem_arrow = newActive_arrow.closest('.carousel_item1');

//     if (!isItem_arrow || newActive_arrow.classList.contains('carousel_item1_active')) {
//         return;
//     };
//     ite_tear_arrow = newActive_arrow

//     update(newActive_arrow);
//     // console.log(newActive_arrow)
// });

const update_arrow = function(newActive_arrow) {
// const newActivePos_arrow = newActive_arrow.dataset.pos;
const newActivePos_arrow = 1;
// console.log(newActivePos_arrow)

const current_arrow = elems_arrow.find((elem) => elem.dataset.pos == -2);
const prev_arrow = elems_arrow.find((elem) => elem.dataset.pos == -1);
const next_arrow = elems_arrow.find((elem) => elem.dataset.pos == 0);
const first_arrow = elems_arrow.find((elem) => elem.dataset.pos == 1);
const last_arrow = elems_arrow.find((elem) => elem.dataset.pos == 2);

console.log(current_arrow,prev_arrow)

current_arrow.classList.remove('carousel_item1_active');

[current_arrow, prev_arrow, next_arrow, first_arrow, last_arrow].forEach(item => {
    var itemPos_arrow = item.dataset.pos;

    item.dataset.pos = getPos(itemPos_arrow, newActivePos_arrow)
});
};

const getPos_arrow = function (current_arrow, active_arrow) {
const diff_arrow = current_arrow - active_arrow;

if (Math.abs(current_arrow - active_arrow) > 2) {
    return -current_arrow
}

return diff_arrow;
}