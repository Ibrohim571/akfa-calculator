
$(document).ready(function() {

     // search inputi
     $('#qidiruvchi input').keyup(function() {
          let mahsulotlar = document.querySelectorAll('.card-body h5');

          mahsulotlar.forEach(element => {
             let tekshirish  =  $(element).text().toLowerCase().includes(`${$(this).val().toLowerCase()}`);
             if(tekshirish != true) {
               $(element).parent().parent().addClass('saralash')
             }
             if(tekshirish != false) {
               $(element).parent().parent().removeClass('saralash');
             }
          });

     })

     $('#hisoblash').click(function() {
          var narxni_hisoblash = 0, qushimcha_hisoblash;

          let dona_inputlari = document.querySelectorAll('.card-header input');
          dona_inputlari.forEach(element => {
               
               if($(element).val() != 'on') {
                    narxni_hisoblash += +($(element).val() * $(element).attr('id'));
                   
               }

               qushimcha_hisoblash = narxni_hisoblash;
          });
          
          $(".harid-narhi").text(narxni_hisoblash);
     })

     let siquvchi = true;
     $('#qidiruvchi button').click(function() {
          if(siquvchi == true) {
               let col_12 = document.querySelectorAll('.col-12');
               col_12.forEach(element => {
                    $(element).removeClass('col-12');
                    $(element).addClass('col-6');
               });
               siquvchi = false;
          }

          else {
               let col_6 = document.querySelectorAll('.col-6');
               col_6.forEach(element => {
                    $(element).removeClass('col-6');
                    $(element).addClass('col-12');
               });
               siquvchi = true;
          }
     })
})