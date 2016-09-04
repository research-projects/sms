/**
 * Created by iganbold on 9/2/16.
 */

$(document).ready(function() {

    try {
        $('#example').DataTable();

        $("#addpage").css({"display":"none"});

        $("#show_add").click(function() {
            $("#listpage").css({"display":"none"});
            $("#addpage").css({"display":""});
        });

        $("#show_list").click(function() {
            $("#addpage").css({"display":"none"});
            $("#listpage").css({"display":""});
        });
        
        $('#add_patient_btn').click(function () {

        })

    }
    catch(err) {

    }
} );

