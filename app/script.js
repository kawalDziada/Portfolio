var windowWidth = $(window).width();

function apear(picture) {
  picture.addClass('transSmall');
}

function apearTablet(picture1, picture2, picture3) {
  picture1.removeClass('lower');
  picture1.addClass('transTablet1');
  picture2.addClass('transTablet2');
  picture3.addClass('transTablet3');
}

function apearDesktop(picture1, picture2, picture3) {
  picture1.removeClass('lower');
  picture1.addClass('transDesktop1');
  picture2.addClass('transDesktop2');
  picture3.addClass('transDesktop3');
}

if (windowWidth < 480) {
  apear($('.main-background'));
} else if (windowWidth > 480 && windowWidth < 786) {
  apearTablet($('.main-background'), $('.main-background-2'), $('.main-background-3'));
} else if ((windowWidth > 768)) {
  apearDesktop($('.main-background'), $('.main-background-2'), $('.main-background-3'));
}
