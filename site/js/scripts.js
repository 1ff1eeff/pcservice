  $(document).ready(function(){
    $("#sticker").sticky({topSpacing:0});
    $("#sticker").sticky({bottomSpacing:0});
    $('#sticker').on('sticky-start', function() {
        document.getElementById('mini-logo').style.visibility = 'visible'; 
        document.getElementById('mini-caption').style.visibility = 'visible';
        document.getElementById('mini-phone').style.visibility = 'visible'
    } );
    $('#sticker').on('sticky-end', function() {
        document.getElementById('mini-logo').style.visibility = 'hidden'; 
        document.getElementById('mini-caption').style.visibility = 'hidden';
        document.getElementById('mini-phone').style.visibility = 'hidden';
    } );
    
    
  });