//create onclick function for button
//create ajax call to route
//create route for this call
//pass the parent/child node as the data
//insert into db
//turn off onclick
//potentially allow for user to unsave/delete



$(document).ready(function(){

  console.log('main loaded');

  $('#saveTitle').click(function(event) {
    let target = event.target.parentElement.children;
   $.ajax({
    method: "POST",
    url: '/search-title/save',
    data: {
      "title": target[0].innerText.split(': ')[1],
      "year": target[1].innerText.split(': ')[1],
      "rating": target[2].innerText.split(': ')[1],
      "category": target[3].innerText.split(': ')[1],
      "actors": target[4].innerText.split(': ')[1],
      "director": target[5].innerText.split(': ')[1],
      "summary": target[6].innerText.split(': ')[1],
      "runtime": target[7].innerText.split(': ')[1],
      "show_id": target[8].innerText.split(': ')[1]
    },
    success: function (){
      $('#saveTitle').off();
      $('#saveTitle').text('saved');
    }
   }).catch((err) => {
    console.log(err)
   })
  });

  $('#saveDirector').click(function(event) {
   let target = event.target.parentElement.children;
   $.ajax({
    method: "POST",
    url: '/search-director/save',
    data: {
      "title": target[0].innerText.split(': ')[1],
      "year": target[1].innerText.split(': ')[1],
      "rating": target[2].innerText.split(': ')[1],
      "category": target[3].innerText.split(': ')[1],
      "actors": target[4].innerText.split(': ')[1],
      "director": target[5].innerText.split(': ')[1],
      "summary": target[6].innerText.split(': ')[1],
      "runtime": target[7].innerText.split(': ')[1],
      "show_id": target[8].innerText.split(': ')[1]
    },
    success: function (){
      $('#saveDirector').off();
      $('#saveDirector').text('saved');
    }
   }).catch((err) => {
    console.log(err)
   })
  });

    $('#saveActor').click(function(event) {
   let target = event.target.parentElement.children;
   $.ajax({
    method: "POST",
    url: '/search-actor/save',
    data: {
      "title": target[0].innerText.split(': ')[1],
      "year": target[1].innerText.split(': ')[1],
      "rating": target[2].innerText.split(': ')[1],
      "category": target[3].innerText.split(': ')[1],
      "actors": target[4].innerText.split(': ')[1],
      "director": target[5].innerText.split(': ')[1],
      "summary": target[6].innerText.split(': ')[1],
      "runtime": target[7].innerText.split(': ')[1],
      "show_id": target[8].innerText.split(': ')[1]
    },
    success: function (){
      $('#saveActor').off();
      $('#saveActor').text('saved');
    }
   }).catch((err) => {
    console.log(err)
   })
  });

  $('#commentButton').click(function(event){
    $.ajax({
    method: "POST",
    url: '/comments/new',
    data: {
        "comment": $('#textarea').val(),
        "show_id": $('#show_id').val()
    },
    success: function (){
    $('#newCommentForm').hide();
    //correct the below append
    $('#confirmationCopy').text("Your comment has been submitted.");
    }
  }).catch((err) => {
    console.log(err)
   })
  })

});
