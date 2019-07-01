import {$, w} from './constants';

w.load(() => {

});

$(document).ready(function() {

    function findDupes(){
        var all = $(".loop-expositores__card");
        var temp = [];

        for(var i = 0; i < all.length; i++){
            if (all[i].id.length > 0 && $("[id='" + all[i].id + "']").length > 1){
                // console.log(all[i].id);
                if(temp.indexOf(all[i].id) > -1 ){
                    $(all[i]).css('display', 'none');
                }
                else {
                    temp.push(all[i].id);
                }
            }
            // console.log(all[i].id);
        }
        // console.log(temp);
    }
    findDupes();
})