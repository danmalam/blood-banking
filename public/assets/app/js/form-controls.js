var FormControls = {
    init: function () {
        $("#user_form").validate({
            rules: {
                name: {
                    required: !0, minlength: 6
                },
                email: {
                    required: !0, email: !0
                },
                username: {
                    required: !0, minlength: 6
                },
                password: {
                    required: !0, password: !0
                },
                gender: {
                    required: !0
                },
                photo: {
                    required: !0
                }
            }
            , invalidHandler: function (e, r) {
                var i = $("#m_form_1_msg");
                i.removeClass("m--hide").show(), mApp.scrollTo(i, -200)
            }
            , submitHandler: function (e) { }
        }) 
    }
}

    ;
jQuery(document).ready(function () {
    FormControls.init()
}

);