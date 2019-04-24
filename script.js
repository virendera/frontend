 /*********************************

Phone directory script file 
created by Virender on 24/04/2019


*********************************/


//all executable script excuted when whole document is ready

$(document).ready(function() { 

// Javascript variable created for reuse purpose
 var model={
		close: function(html){
		// $(".modal-dialog").css('display','none');	
		// $(".filter").css('display','none');
		$(".modal-dialog").fadeOut();			//for closing popup with animation
		$(".filter").fadeOut();					//for closing background shadow with animation
		$("#name").val("");
		$("#phone").val("");
		$("#rname").text("");
		$("#rphone").text("");
			
	 },
}

$("#add").click(function()
{
	$(".filter").fadeIn();				//displaying background black shadow with animation
	$(".modal-dialog").fadeIn();		//opening up popop dialog with animation
});

//closing popup dielog box
$("#close").click(function()
{
	model.close();
});

//assigning input contact name on input text change event
$("#name").on("change paste keyup",function()
{
	$("#rname").text($("#name").val());
});


//assigning input contact number on input text change event
$("#phone").on("change paste keyup",function()  
{
	$("#rphone").text($("#phone").val());
});

// adding data to phone directory list
 $("#save").click(function()
 {
	var name=$("#rname").text()
	var number=$("#rphone").text();
 
	$('<li><div class="col-sm-6">'+name+'</div><div class="col-sm-4">'+number+'</div><div class="col-sm-2"><button type="button" class="btn danger p-x-md remove" >Remove</button></div></li>').appendTo($("ol"));
	// element.appendTo($("#ol"));
	model.close();
 });


 
 
//remove daynamically added contact

 $("body").on("click", ".remove",function()
{
	 $(this).closest("li").remove();

});




});




 

