// Get the modal
var modal1 = document.getElementById('signin');
var modal2 = document.getElementById('signup');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if(event.target == modal2) {
      modal2.style.display = "none";
    }
}
function close_model(){
  modal1.style.display='none';
  modal2.style.display='none';
}
function modal_signin(){
  modal1.style.display='block';
}
function modal_signup(){
  modal2.style.display="block";
  modal1.style.display = "none";
}
