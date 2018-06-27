//= require rails-ujs
//= require turbolinks
//= require_tree .

var imageNames = ["ruby_on_rails", "javascript", "css3", 
                  "object-oriented_programming", 
                  "cs_fundamentals", "html5", "tdd"];

function lightButton(i) {
  var previous = document.querySelector('.selected');

  if (previous != null && previous.id != i.id) {
    previous.className = "highlight";
  };

  if (i.className == "highlight") {
    i.className = "selected";
  };
};

function prevButton(e) {
  var index = getIndex(e) - 1;
  if (index >= -1) {
    changeImage(imageNames[index]);
  }
};

function nextButton(e) {
  var index = getIndex(e) + 1;
  if (index <= imageNames.length - 1) {
    changeImage(imageNames[index]);
  }
};

function getIndex(e) {
  var previous = document.querySelector('.selected');

  if (previous != null) {
    var index = imageNames.indexOf(previous.id);
  } else {
    var index = imageNames.indexOf(e.id);
  };

  return index;
}

var urls = new Object();

urls['ruby_on_rails'] = 'https://calm-escarpment-52412.herokuapp.com/';
urls['javascript'] = "https://github.com/johnjmarks4/calculator";
urls['object-oriented_programming'] = 'https://github.com/johnjmarks4/chess';
urls['tdd'] = 'https://github.com/johnjmarks4/chess/blob/master/specs/game_spec.rb';
urls['cs_fundamentals'] = 'https://github.com/johnjmarks4/n_queens';

function changeLink(imageName) {
  var link = document.createElement('a');
  var href = urls[imageName];
  link.setAttribute('href', href);
  var pane = document.querySelector('#skills_project_img');
  pane.appendChild(link);
  return link;
};

/* refactor this */
function changeImage(imageName) {
  var prevImage = document.querySelector(".show");
  var lastClick = document.querySelector(".selected");
  lightButton(document.getElementById(imageName));
  console.log(lastClick);

  if (lastClick == null) {
    var swipeDirection = "right";
  } else if (imageNames.indexOf(imageName) >= imageNames.indexOf(lastClick.id.replace(" ", "_"))) {
    var swipeDirection = "right";
  } else {
    var swipeDirection = "left";
  }

  if (imageName == "css3" || imageName == "html5") {
    var imageName = "ruby_on_rails";
  }

  var image = document.createElement('img');
  image.setAttribute('src', '/assets/'.concat(imageName.concat(".jpg")));
  var link = changeLink(imageName);
  link.appendChild(image);

  setTimeout(function() {
    image.classList.toggle('show');
    image.setAttribute('id', swipeDirection);
  }, 100);

  setTimeout(function() {
    var oldLink = prevImage.parentElement;
    var con = document.getElementById("skills_project_img");
    con.removeChild(oldLink);
  }, 500);
};