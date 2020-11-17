var RemoveItems = document.getElementsByClassName('delete-btn')
for (var i = 0; i < RemoveItems.length; i++) {
var button = RemoveItems[i]
button.addEventListener ('click', function(event){
var buttonClicked = event.target
buttonClicked.parentElement.parentElement.remove()
})

}

$('.like-btn').on('click', function() { 
              $(this).toggleClass('is-active');
});


$('.minus-btn').on('click', function(e) {
                  e.preventDefault();
                  var $this = $(this);
                  var $input = $this.closest('div').find('input');
                  var value = parseInt($input.val());
      
                  if (value > 1) {
                    
                      value = value - 1;
                      
                  } else {
                      value = 0;
                      
                  }
      
              $input.val(value);
              CalculateTotal()
      
              });
      
              $('.plus-btn').on('click', function(e) {
                  e.preventDefault();
                  var $this = $(this);
                  var $input = $this.closest('div').find('input');
                  var value = parseInt($input.val());
      
                  if (value < 100) {
                    
                    value = value + 1;
                    
                  } else {
                      value =100;
                      
                  }
      
                  $input.val(value);
                  CalculateTotal()
              });

                var numberof = document.getElementsByClassName ('numitem')
                console.log (numberof[0].value)

                var totalitems = document.getElementsByClassName('total-price');
                console.log (totalitems[0].innerHTML)


              

                CalculateTotal = function () { 
                    var total = 0;
                     for (var i = 0; i < totalitems.length; i++) { 
                         var A = numberof[i].value
                         var B = totalitems[i].innerHTML
                         total = total + (A * B)
                         ; } 
                         document.getElementById("some").innerHTML = total;
                                                  
                     }

                     console.log (CalculateTotal())


