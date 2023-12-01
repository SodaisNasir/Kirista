async function loadXMLDoc(bookid) {
  window.alert('HELLO');
  if (localStorage.hasOwnProperty(bookid)) {
    console.log('start');
    var data = await JSON.parse(localStorage.getItem(bookid));
    const dataArray = data.success.data;

    var i = 0;
    new Promise(function () {
      dataArray.forEach(row => {
        console.log(row.id);
        i++;
        if (i == 1) {
          document.getElementById('chapter').innerHTML = row.title;
        }
        document.getElementById('book').innerHTML +=
          '<h2 class="tittle" id=tittle' + i + '>' + row.title + '</h2>';
        document.getElementById('book').innerHTML += row.description;
        if (i == dataArray.length) {
          var n = i + 1;
          document.getElementById('book').innerHTML +=
            '<h2 class="tittle" style="with:0px"  id=tittle' + n + '></h2>';
        }
      });
    })
      .then(window.ReactNativeWebView.postMessage('loader,' + 0))
      .then(SaveBook(bookid));
  } else {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      const data = JSON.parse(this.responseText);
      const dataArray = data.success.data;
      var i = 0;
      new Promise(function () {
        dataArray.forEach(row => {
          i++;
          if (i == 1) {
            document.getElementById('chapter').innerHTML = row.title;
          }
          console.log(row.id);
          document.getElementById('book').innerHTML +=
            '<h2 class="tittle" id=tittle' + i + '>' + row.title + '</h2>';
          document.getElementById('book').innerHTML += row.description;
          if (i == dataArray.length) {
            var n = i + 1;
            document.getElementById('book').innerHTML +=
              '<h2 class="tittle" style="with:0px"  id=tittle' + n + '></h2>';
          }
        });
      })
        .then(window.ReactNativeWebView.postMessage('loader,' + 0))
        .then(SaveBook(bookid));
    };
    xhttp.open(
      'GET',
      'https://sassolution.org/kirista/api/book-chapter/' + bookid,
      true,
    );
    xhttp.send();
  }
}

var hei = window.innerHeight;
var eleemtnnumber = 1;
var backagain = 0;
function Chapping(type) {
  if (type == 'down') {
    const lengthElement = document.getElementsByClassName('tittle').length + 1;
    const currentScrollPosition = window.pageYOffset;
    t = document.getElementById('tittle' + eleemtnnumber).offsetTop;

    if (eleemtnnumber < lengthElement) {
      var j = eleemtnnumber + 1;
      var t2 = document.getElementById('tittle' + j).offsetTop;
      console.log(eleemtnnumber + '>' + j);
      if (currentScrollPosition >= t && currentScrollPosition <= t2) {
        eleemtnnumber++;
        backagain = 0;
        var valu = eleemtnnumber - 1;
        var v = 'tittle' + valu;
        console.log(document.getElementById(v).innerText);
        // window.ReactNativeWebView.postMessage('chapter,'+document.getElementById(v).innerText);
        document.getElementById('chapter').innerHTML =
          document.getElementById(v).innerText;
      }
    }
  } else if (type == 'up') {
    const lengthElement = document.getElementsByClassName('tittle').length + 1;
    var currentScrollPosition = window.pageYOffset;
    const l = lengthElement - 1;
    console.log(eleemtnnumber + '>' + l);
    const postitionbefore1 = document.getElementById('tittle' + l).offsetTop;

    if (currentScrollPosition < postitionbefore1) {
      t = document.getElementById('tittle' + eleemtnnumber).offsetTop;
      var j = eleemtnnumber - 1;

      if (eleemtnnumber > 1) {
        var t2 = 0;
        t2 = document.getElementById('tittle' + j).offsetTop;
        currentScrollPosition = currentScrollPosition + 20;

        if (currentScrollPosition > t2 && currentScrollPosition < t) {
          eleemtnnumber--;

          var v = 'tittle' + (eleemtnnumber + 1);
          document.getElementById('chapter').innerHTML =
            document.getElementById(v).innerText;
        }
      } else if (eleemtnnumber == 1) {
        if (currentScrollPosition < t && backagain == 0) {
          backagain = 1;
          var v = 'tittle' + eleemtnnumber;
          console.log('cccc' + document.getElementById(v).innerText);
          document.getElementById('chapter').innerHTML =
            document.getElementById(v).innerText;
        }
      }
    }
  }
}

var currentposition = 1;
var lastScrollTop = 0;
var Height = window.innerHeight;

showScrollTop = () => {
  const currentScrollPosition = window.pageYOffset + 1;
  t = document.getElementById('book').clientHeight;
  document.getElementById('page').innerHTML =
    parseInt(currentScrollPosition / hei) + 1 + '/' + parseInt(t / Height);

  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    Chapping('down');
  } else if (st < lastScrollTop) {
    Chapping('up');
  } // else was horizontal scroll
  lastScrollTop = st <= 0 ? 0 : st;
};
window.addEventListener('scroll', showScrollTop);

function Goto(index) {
  document.getElementById(index).scrollIntoView({behavior: 'smooth'});
}

function changeTheme(colors) {
  document.getElementById('book').style.background = colors;
  document.getElementById('page').style.background = colors;
}

function changeFontColor(colors) {
  document.getElementById('book').style.color = colors;
  document.getElementById('page').style.color = colors;
}

function changeHeaderFontColor(colors) {
  document.getElementById('chapterback').style.color = colors;
}

function changeHeaderBackground(colors) {
  document.getElementById('chapterback').style.background = colors;
}

var font = 12;

function changeFontSize(size) {
  font = font + size;
  document.getElementById('book').style.fontSize = size + 'px';
  // window.ReactNativeWebView.postMessage('Data from WebView / Website');
  // alert('test')
}

function BookMark() {
  const currentScrollPosition = window.pageYOffset + 1;
  const lengthElement =
    document.getElementsByClassName('chap_description').length;
  window.ReactNativeWebView.postMessage('bookmark,' + currentScrollPosition);

  // for(var i=1; i<lengthElement-1; i++){
  //     const j = i+1;
  //         const element = document.getElementById(i);
  //         const element2 = document.getElementById(j);
  //         if(currentScrollPosition > element.offsetTop && currentScrollPosition < element2.offsetTop){
  //             window.ReactNativeWebView.postMessage(currentScrollPosition);

  //     }
  // }
}

function GotoIndex(OffSet) {
  window.scrollTo({
    top: OffSet,
    behavior: 'smooth',
  });
}

function SaveBook(bookid) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.status == 200) {
      const data = this.responseText;
      localStorage.setItem(bookid, data);
    }
  };
  xhttp.open(
    'GET',
    'https://sassolution.org/kirista/api/book-chapter/' + bookid,
    true,
  );
  xhttp.send();
}

function ChangefontFamily(name) {
  if (name == 'lato') {
    document.getElementById('book').style.fontFamily = "'Lato', sans-serif";
    document.getElementById('book').style.fontStyle = 'italic';
  } else if (name == 'papyrus') {
    document.getElementById('book').style.fontFamily = 'papyrus';
    document.getElementById('book').style.fontStyle = 'normal';
  } else if (name == 'times-new-roman') {
    document.getElementById('book').style.fontFamily = 'Times New Roman';
    document.getElementById('book').style.fontStyle = 'initial';
  } else if (name == 'georgia') {
    document.getElementById('book').style.fontFamily = 'Georgia';
    document.getElementById('book').style.fontStyle = 'normal';
  } else if (name == 'arial') {
    document.getElementById('book').style.fontFamily = 'Arial';
    document.getElementById('book').style.fontStyle = 'normal';
  } else if (name == 'courier') {
    document.getElementById('book').style.fontFamily = 'Courier';
    document.getElementById('book').style.fontStyle = 'normal';
  }
}
// function CloseHeader(){

//     document.getElementById('chapterback').style.display = 'None'

// }
function Header(type) {
  if (type == 'block') {
    document.getElementById('chapterback').style.display = type;
    document.getElementById('book').style.paddingTop = '110px';
  } else if (type == 'none') {
    document.getElementById('chapterback').style.display = type;
    document.getElementById('book').style.paddingTop = '0px';
  }
}
