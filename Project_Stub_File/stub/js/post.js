
function editor(){
  var x = document.getElementById('editjs');
  var y = document.getElementsByClassName('blogText')[0];
  var r = document.getElementById("blogTitle");
  console.log(x.innerHTML);
  if(x.innerHTML == 'Edit <i class="fa fa-edit"></i>') {
    x.innerHTML= "Save <i class='fa fa-save'></i>";

    var t = document.getElementById('blogBody');
    var s = document.getElementById('blogTitleNew');
    y.innerHTML = '<textarea id="editmode" autofocus>'+t.innerHTML+'</textarea>';
    r.innerHTML= '<textarea id="title" autofocus>'+s.innerHTML+'</textarea>';
  }
  else{
    x.innerHTML = "Edit <i class='fa fa-edit'></i>";
    y.innerHTML = '<p id="blogBody">'+document.getElementById('editmode').value;+'</p>';
    r.innerHTML = '<p id ="blogTitleNew">'+document.getElementById('title').value+'</p>';
  }
}
var count = 0 ;
function doLike(){
  var x = document.getElementById('check_like');
  count++;
  document.getElementById('like').innerHTML = 'Liked';
  if(count ==1) x.innerHTML = '1 person likes this!';
  else{
    x.innerHTML = count + ' people have liked this!';
  }
}
function postComment(){
  var w=document.getElementById("comment").value;
  if(w.trim()!=""){
    var q=document.getElementById("tbl1");
    var row = q.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML=w;
  }
    document.getElementById("comment").value="";
}
