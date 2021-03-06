$(document).ready(function(){

  var doneTask = $(".done-task");
  var deleteButton = $(".delete-button");
  var tableRow = $("#tableRow");
  var table = $(".table");
  var showTodo = $(".show-to-do");
  var buttonEdit = $(".button-edit");
  var save = $(".save");
  var add = $(".add");
  var checkTask = $(".done-todo-task");
  var dropDown = $(".dropdown");
  var error = $(".error");

  $(document).on('click', '.delete-button', function(){
    $(this).closest('tr').remove();
    return false;
  });

  $(document).on('click', '.button-edit', function(){
    $(this).parents(".tableRow").find(".button-edit").hide(); 
    $(this).parents(".tableRow").find("span").attr("contenteditable", true);
    $(this).parents(".tableRow").find(".save").show();
  });

  $(document).on('click', '.save', function(){
    var taskValue = $(this).parents(".tableRow").find("span").text();
    if (taskValue === "") {
      $(this).parents(".tableRow").find(".test").show();
    } else {
      $(".test").hide();
      $(this).parents(".tableRow").find(".save").hide();
      $(this).parents(".tableRow").find(".button-edit").show();
      $(this).parents(".tableRow").find("span").attr("contenteditable", false);
    }
    
  });

  $(document).on('click', '.add', function(){
    var task = $("#task").val();

    if (task === "") {
      error.text("This field is required!");
      error.css({"display": "inline"});
      error.css({"color": "red"});
    } else {
      error.css({"display": "none"});

      var result = "<tr class='tableRow'><td><input class='done-task' type='checkbox'></td>" +
                "<td class='show-to-do' id='showInput1'><span contenteditable='false'> " + task + "</span></td> " +
                "<td><button class='button-edit btn btn-info'><span class='glyphicon glyphicon-edit'></span> edit</button> " +
                "<button class='save'><span class='glyphicon glyphicon-save'></span> save</button> " +
                "<button class='btn btn-info delete-button'><span class='glyphicon glyphicon-trash'></span> delete</button></td></tr>";
    $("table tbody").prepend(result);
    $("#task").val("");

    }

  });

  $(document).on('click', '.done-task', function(){
    $(this).parents(".tableRow").find(".show-to-do").toggleClass("strike");

  });

  dropDown.change(function(){
    var task = $(this).val();
    if (task === 'done') {
      $("input:checkbox:checked").parents(".tableRow").show();
      $("input:checkbox:not(:checked)").parents(".tableRow").hide();
    } else if (task === 'to-do' ){
      $("input:checkbox:checked").parents(".tableRow").hide();
      $("input:checkbox:not(:checked)").parents(".tableRow").show();
    }else if (task === 'all' ){
      $("input:checkbox").parents(".tableRow").show();
    }
  });
    
});

