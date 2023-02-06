function removeValidate(e) {
    e.classList.remove(`red`)
}

$('[data-toggle="slide-collapse"]').on('click', function() {
  $navMenuCont = $($(this).data('target'));
  $navMenuCont.animate({
    'width': 'toggle'
  }, 350);
  $(".menu-overlay").fadeIn(500);

});
$(".menu-overlay").click(function(event) {
  $(".navbar-toggle").trigger("click");
  $(".menu-overlay").fadeOut(500);
});
window.onload = function (){
  // alert(`done`)
  setTimeout(() => {
    document.querySelector(`.content4-video`).innerHTML+=`
      <iframe src="https://www.youtube.com/embed/Xe2MOGuEMJI" title="DRIPFIT Đại diện Y khoa tối giản Animation" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      >
      </iframe>
    `
    
  }, 1000);


};