var idtemp = -2;
        function fn(id) 
            {

                image_fn(idtemp)
                if (idtemp == 2) {
                    idtemp = -2;
                } else {
                    idtemp = idtemp + 1;
                }
                var id_1 = idtemp;
                var id_1 = "car"+id_1;
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("carousel-descrip_t");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }

                document.getElementById(id_1).style.display = "block";
                // evt.currentTarget.className += " active";
            }


            const state = {};
        const carouselList = document.querySelector('.carousel__list');
        const carouselItems = document.querySelectorAll('.carousel__item');
        const elems = Array.from(carouselItems);

        var temp_var = 0

        function image_fn(idtemp){
            // var newActive = event.target;
            // var isItem = newActive.closest('.carousel__item');
            if (temp_var == 5) {
                temp_var = 0 
            } else {
                temp_var = temp_var + 1
            }
            var newActive = temp_var

            // if (!isItem || newActive.classList.contains('carousel__item_active')) {
            //     return;
            // };
        
            update(newActive);
        };

        var ite_tear = NaN;

        // carouselList.addEventListener('click', function (event) {
        //     var newActive = event.target;
        //     var isItem = newActive.closest('.carousel__item');

        //     if (!isItem || newActive.classList.contains('carousel__item_active')) {
        //         return;
        //     };
        //     ite_tear = newActive
        
        //     update(newActive);
        //     // console.log(newActive)
        // });

        const update = function(newActive) {
        // const newActivePos = newActive.dataset.pos;
        const newActivePos = 1;
        // console.log(newActivePos)

        const current = elems.find((elem) => elem.dataset.pos == 0);
        const prev = elems.find((elem) => elem.dataset.pos == 1);
        const next = elems.find((elem) => elem.dataset.pos == 2);
        const first = elems.find((elem) => elem.dataset.pos == -1);
        const last = elems.find((elem) => elem.dataset.pos == -2);

        console.log(current,prev)
        
        current.classList.remove('carousel__item_active');
        
        [current, prev, next, first, last].forEach(item => {
            var itemPos = item.dataset.pos;

            item.dataset.pos = getPos(itemPos, newActivePos)
        });
        };

        const getPos = function (current, active) {
        const diff = current - active;

        if (Math.abs(current - active) > 2) {
            return -current
        }

        return diff;
        }