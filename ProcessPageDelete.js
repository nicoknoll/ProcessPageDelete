$(document).ready(function() {
    $("li.PageListActiondelete a").live("click", function(el){
        if(!confirm("Are you sure?")) { return false; }
    });
});
