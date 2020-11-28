var idtemp1_arrow11 = -2;
function fn_arrow1(id) 
    {
        image_fn_arrow1(idtemp1_arrow11)
        if (idtemp1_arrow11 == 2) {
            idtemp1_arrow11 = -2;
        } else {
            idtemp1_arrow11 = idtemp1_arrow11 + 1;
        }
        var id_1 = idtemp1_arrow11+"_b";
      
        var id_1 = "car"+id_1;
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("carousel-descrip_tb");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
       
        document.getElementById(id_1).style.display = "block";
        // evt.currentTarget.className += " active";
    }


    const state_arrow1 = {};
const carouselList_arrow1 = document.querySelector('.carousel_list2');
const carouselItems_arrow1 = document.querySelectorAll('.carousel_item2');
const elems_arrow1 = Array.from(carouselItems_arrow1);

var temp_var_arrow1 = 0

function image_fn_arrow1(idtemp1_arrow11){
    // var newActive_arrow1 = event.target;
    // var isItem_arrow1 = newActive_arrow1.closest('.carousel__item');
    if (temp_var_arrow1 == 5) {
        temp_var_arrow1 = 0 
    } else {
        temp_var_arrow1 = temp_var_arrow1 + 1
    }
    var newActive_arrow1 = temp_var_arrow1

    // if (!isItem || newActive_arrow1.classList.contains('carousel__item_active')) {
    //     return;
    // };

    update_arrow1(newActive_arrow1);
};

var ite_tear_arrow1 = NaN;

// carouselList_arrow1.addEventListener('click', function (event) {
//     var newActive_arrow1 = event.target;
//     var isItem_arrow1 = newActive_arrow1.closest('.carousel_item2');

//     if (!isItem_arrow1 || newActive_arrow1.classList.contains('carousel_item2_active')) {
//         return;
//     };
//     ite_tear_arrow1 = newActive_arrow1

//     update(newActive_arrow1);
//     // console.log(newActive_arrow1)
// });

const update_arrow1 = function(newActive_arrow1) {
// const newActivePos_arrow1 = newActive_arrow1.dataset.pos;
const newActivePos_arrow1 = 1;
// console.log(newActivePos_arrow1)

const current_arrow1 = elems_arrow1.find((elem) => elem.dataset.pos == -2);
const prev_arrow1 = elems_arrow1.find((elem) => elem.dataset.pos == -1);
const next_arrow1 = elems_arrow1.find((elem) => elem.dataset.pos == 0);
const first_arrow1 = elems_arrow1.find((elem) => elem.dataset.pos == 1);
const last_arrow1 = elems_arrow1.find((elem) => elem.dataset.pos == 2);

console.log(current_arrow1,prev_arrow1)

current_arrow1.classList.remove('carousel_item2_active');

[current_arrow1, prev_arrow1, next_arrow1, first_arrow1, last_arrow1].forEach(item => {
    var itemPos_arrow1 = item.dataset.pos;

    item.dataset.pos = getPos(itemPos_arrow1, newActivePos_arrow1)
});
};

const getPos_arrow1 = function (current_arrow1, active_arrow1) {
const diff_arrow1 = current_arrow1 - active_arrow1;

if (Math.abs(current_arrow1 - active_arrow1) > 2) {
    return -current_arrow1
}

return diff_arrow1;
}
