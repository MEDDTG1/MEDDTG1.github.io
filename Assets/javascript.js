const tableMain = document.getElementById("table");
// Fetching the correct json file and data
fetch("data/listened.json")
  .then(res => {
    return res.json();
  })
  // putting the data into tables for layout
  .then(data => {
    let table = "";
    table += "<table>";
    data.forEach(element => {
      table += "<tr>";
      // putting the like hearts into the tables
      table +=
        '<td>  <i onclick="heartFunc(this)" class="fa fa-heart"></i></td>';
      table += `<td><img src="${element["Image"]}"></td>`;
      table += `<td>${element["Name"]}`;
      table += `<td>${element["Artist"]}`;
      table += `<td>${element["Listened"]}`;
    });
    table += "</table>";
    tableMain.innerHTML = table;
  });

const tableArtists = document.getElementById("artists");

fetch("data/artists.json")
  .then(res => {
    return res.json();
  })
  .then(data => {
    let table = "";
    table += "<table>";
    data.forEach(element => {
      table += `<td class="grid"><img src="${element["Image"]}">`;
      table += `${element["Name"]}`;
      table += `<br>${element["Listens"]} Listens`;
      table += `</td>`;
    });
    table += "</table>";
    tableArtists.innerHTML = table;
  });

const tableArtists2 = document.getElementById("artists2");

fetch("data/artists2.json")
  .then(res => {
    return res.json();
  })
  .then(data => {
    let table = "";
    table += "<table>";
    data.forEach(element => {
      table += `<td class="grid"><img src="${element["Image"]}">`;
      table += `${element["Name"]}`;
      table += `<br>${element["Listens"]} Listens`;
      table += `</td>`;
    });
    table += "</table>";
    tableArtists2.innerHTML = table;
  });

const tableTracks = document.getElementById("tracks");

fetch("data/tracks.json")
  .then(res => {
    return res.json();
  })
  .then(data => {
    let table = "";
    table += "<table>";
    data.forEach(element => {
      table += "<tr>";
      table += `<td>${element["Slot"]}`;
      table += `<td><img src="${element["Image"]}"></td>`;
      table +=
        '<td>  <i onclick="heartFunc(this)" class="fa fa-heart"></i></td>';
      table += `<td>${element["Name"]}`;
      table += `<br>${element["Artist"]}`;
      table += `<td><div class="barchart">${element["Listens"]} Listens</div>`;
      // document.getElementById("barchart").style.width = `${element["Listens"]}"/10000 * 100%"`;
    });
    table += "</table>";
    tableTracks.innerHTML = table;
  });

//Gets date/time
var d = new Date();
var Date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

//Appends the comment, name and date/time together and displays on page
function getcomment() {
  var node = document.createElement("p");
  node.innerHTML =
    document.getElementById("comment").value +
    "<div>" +
    "Posted by: " +
    document.getElementById("name").value +
    "<div>" +
    "Posted at: " +
    d;
  document.getElementById("para").appendChild(node);
}

function sendMessage() {
  window.alert(
    "Thank you for your message " + document.getElementById("name").value
  );
}

//This is the fuction for the heart/unheart system.
function heartFunc(x) {
  x.classList.toggle("fa-heart-o");
}
