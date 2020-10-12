$(function(){

    $.ajax({
        "url":"es.json",
        method:"get",
        dataType:"json",
        success:function(res){
             for(i=0;i<res.length;i++){
               let div = $("<div></div>");
               
               let img = $('<div class="img" style="background-image:url(' + res[i].flag + ')"	></div>');
               img.attr('class','img');
               let h2 = $("<h2></h2>").html(res[i].name);
               h2.attr('class','text');

               let div1 = $("<div></div>");
               let p1 = $('<p></p>').html('Popolation' +' <br>' +  res[i].popolation);
               let p2 = $('<p></p>').html('Timezones' +' <br>' +  res[i].timezones);

               div1.attr('class','div1');
               div1.append(p1,p2);

               let div2 = $("<div></div>");
               let p3 = $('<p></p>').html('Region' +' <br>' +  res[i].region);
               let p4 = $('<p></p>').html('Subregion' +' <br>' +  res[i].subregion);
               div2.attr('class','div1');
               div2.append(p3,p4);

               let h4 = $("<h4 style='margin-top:25px' ></h4>").html('AREA')
               h4.attr('class','text1');
               let p5 = $('<p></p>').html(res[i].area);
               p5.attr('class','text1')
      

                div.attr('class','big');
               div.append(img,h2,div1,div2,h4,p5);
               $('.content').append(div);
              
            //    console.log(res[i].languages); 



            } 
            let count = $('.big').length;
            let limit = 3
            let page = Math.floor(count / limit);
            console.log(count,limit,page);
            $('.big:gt('+(limit - 1) +')').hide();
            let ul = $('<ul></ul>');
           
            for(i = 1;i<=page;i++){ 
                let li = $('<li></li>');
                li.html(i);
                ul.append(li);
                li.attr('class','page-item')
                if( i == 1){
                    li.addClass('active','page-item')
                }
                li.on('click',function(){
                    let number = $(this).html();
                    $('.page-item').removeClass('active')
                    $(this).addClass('active');
                    $('.big').hide();
                    let sum = number * limit;
                    for (let i = sum - limit; i < sum; i++) {
                        $('.big:eq(' + i + ')').show()
                    }

                })
                
            }

            
            $('.paginacia').append(ul);
            
        
        },
        error: function () {
            alert('error')
        }

    })









})