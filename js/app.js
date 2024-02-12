$(document).ready(function(){
   var max_fields = 10;
   var wrapper = $('.input_field_wrapper');
   var button = $('.add_field');

   var x = 1;

   $('button').on('click', function(){
    if(x < max_fields){
      $(wrapper).append('<div><input type="text" name="field_name[]" value=""/><button class="remove_field">-</button></div>')
      x++;
    }else{
        alert('A maximum of '+ max_fields +' fields are allowed to be added.');
    }

    $(wrapper).on('click','.remove_field', function(){
        $(this).parent('div').remove();
        x--;
    })
   })
   
});

