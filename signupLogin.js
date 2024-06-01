$('#form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();//prevent submit
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(800);
    
  });

$('#signup').submit(function(e) {
  e.preventDefault(); //prevent submit
  
  var firstName = $('#signup_first_name').val();
  var lastName = $('#signup_last_name').val();
  var email = $('#signup_email').val();
  var phone = $('#signup_phone').val();
  var password = $('#signup_password').val();
  
  
  $('#signup_info').html('<li>First Name: ' + firstName + '</li>' +
                        '<li>Last Name: ' + lastName + '</li>' +
                        '<li>Email: ' + email + '</li>' +
                        '<li>Phone: ' + phone + '</li>' +
                        '<li>Password: ' + password + '</li>'); 
                        
  alert('Sign Up successfully your signup details: First Name: '+firstName
    +' Last Name: '+lastName+' Email: '+email+' Phone: '+phone+' Password: '+password
  );
  $(this).trigger('reset');//clear the form after submit
});

$('#login').submit(function(e) {
  e.preventDefault(); 
  
  var loginEmail = $('#login_email').val();
  var loginPassword = $('#login_password').val();
  
  //$('#login_info').text('Email: ' + loginEmail + ', Password: ' + loginPassword);

  var name = $('#signup_first_name').val();
  var lastName = $('#signup_last_name').val();
  var email = $('#signup_email').val();
  var password = $('#signup_password').val();

  if(loginEmail==email&&loginPassword==password){
  $('#login_info').text('login successfully '+name +' '+lastName+' your Email: ' + loginEmail + ', your Password: ' + loginPassword);
  alert('login successfully '+name +' '+lastName+' your Email: ' + loginEmail + ', your Password: ' + loginPassword);
}else{
    alert("login failed email or password wrong!!");

  }
  
  
  $(this).trigger('reset');//clear the form after submit
});
