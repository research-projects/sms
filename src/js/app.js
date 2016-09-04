/**
 * Created by iganbold on 9/2/16.
 */

$(document).ready(function() {

    function phonenumber(inputtxt)
    {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(inputtxt.match(phoneno))
        {
            return true;
        }
        else
        {
            alert("message");
            return false;
        }
    }



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
        
        // $('#add_patient_btn').click(function () {
        //     var patient_phone = $('#patient_phone_input').val();
        //
        //     if(phonenumber(patient_phone)) {
        //         patient_phone = patient_phone.replaceWholeText((/[-. ]/,'');)
        //         alert(patient_phone);
        //     }
        //
        //
        // })


    }
    catch(err) {

    }
} );

