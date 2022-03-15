function updateFileNum() {
    if (document.getElementById("uploadInput").files.length < 10) {
        document.getElementById("fileNum").innerHTML = document.getElementById("uploadInput").files.length;
    } else {
        alert("Ви можете завантажити максимум 9 файлів");
        document.getElementById("uploadInput").value = '';
        document.getElementById("fileNum").innerHTML = 0;
    }


    if (document.getElementById("uploadInputMob").files.length < 10) {
        document.getElementById("fileNumMob").innerHTML = document.getElementById("uploadInputMob").files.length;
    } else {
        alert("Ви можете завантажити максимум 9 файлів");
        document.getElementById("uploadInputMob").value = '';
        document.getElementById("fileNumMob").innerHTML = 0;
    }


    if (document.getElementById("uploadInputFooter").files.length < 10) {
        document.getElementById("fileNumFooter").innerHTML = document.getElementById("uploadInputFooter").files.length;
    } else {
        alert("Ви можете завантажити максимум 9 файлів");
        document.getElementById("uploadInputFooter").value = '';
        document.getElementById("fileNumFooter").innerHTML = 0;
    }

};

function updateFileNumOnPage() {
    if (document.getElementById("uploadInputOnPage").files.length < 10) {
        document.getElementById("fileNumOnPage").innerHTML = document.getElementById("uploadInputOnPage").files.length;
    } else {
        alert("Ви можете завантажити максимум 9 файлів");
        document.getElementById("uploadInputOnPage").value = '';
        document.getElementById("fileNumOnPage").innerHTML = 0;
    }
};

(function($) {

    var $body;

    $(document).ready(function() {
        $body = $('body');

        $.fn.setCursorPosition = function(pos) {
            if ($(this).get(0).setSelectionRange) {
                $(this).get(0).setSelectionRange(pos, pos);
            } else if ($(this).get(0).createTextRange) {
                var range = $(this).get(0).createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
        $('input[name="tel"]').click(function() {
            $(this).setCursorPosition(5); // set position number
        });

        $body.find('.user-phone').each(function() {
            $(this).mask("+38 (999) 999 99 99", { autoсlear: false }

            );
        });

        $body.on('keyup', '.user-phone', function() {
            var phone = $(this),
                phoneVal = phone.val(),
                form = $(this).parents('form');
            form.find('.form-home__btn').attr('disabled', true);
            var code = /^\+38 (\(0(39|50|63|66|67|68|91|92|93|94|95|96|97|98|99|73)\) [0-9]{3} [0-9]{2} [0-9]{2})$/g;

            if (code.test(phoneVal)) {
                form.find('.form-home__btn').removeAttr('disabled');
            }
        });





        var errorTxt = 'Ошибка отправки';
        $("#sendformMob").validate({
            submitHandler: function(form) {
                var form = document.forms.sendformMob,
                    formData = new FormData(form),
                    xhr = new XMLHttpRequest();

                xhr.open("POST", "https://teriva.ua/php/formMob.php");

                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            // $("#sendform").html('<p style="color: #ffffff; font-size: 27px;" class="thank"> ✔ Дані надіслані!<p>');

                            $(".popup-form").toggleClass("_active");
                            $(".popup-form__box--orange").toggleClass("_active");
                            $(".popup-form__box--white").toggleClass("_active");
                            document.forms.sendformMob.reset();


                        }
                    }
                };
                xhr.send(formData);
            }
        });

        $("#sendformMenu").validate({
            submitHandler: function(form) {
                var form = document.forms.sendformMenu,
                    formData = new FormData(form),
                    xhr = new XMLHttpRequest();

                xhr.open("POST", "https://teriva.ua/php/formMenu.php");

                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            // $("#sendform").html('<p style="color: #ffffff; font-size: 27px;" class="thank"> ✔ Дані надіслані!<p>');

                            $(".popup-form").toggleClass("_active");
                            $(".popup-form__box--orange").toggleClass("_active");
                            $(".popup-form__box--white").toggleClass("_active");
                            document.forms.sendformMenu.reset();


                        }
                    }
                };
                xhr.send(formData);
            }
        });
        $("#sendform").validate({
            submitHandler: function(form) {
                var form = document.forms.sendform,
                    formData = new FormData(form),
                    xhr = new XMLHttpRequest();

                xhr.open("POST", "https://teriva.ua/php/form.php");

                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            // $("#sendform").html('<p style="color: #ffffff; font-size: 27px;" class="thank"> ✔ Дані надіслані!<p>');

                            $(".popup-form").toggleClass("_active");
                            $(".popup-form__box--orange").toggleClass("_active");
                            $(".popup-form__box--white").toggleClass("_active");
                            document.forms.sendform.reset();


                        }
                    }
                };
                xhr.send(formData);
            }
        });

        $("#sendformFooter").validate({
            submitHandler: function(form) {
                var form = document.forms.sendformFooter,
                    formData = new FormData(form),
                    xhr = new XMLHttpRequest();

                xhr.open("POST", "https://teriva.ua/php/form_footer.php");

                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            // $(".popup-form__box.popup-form__box--orange.main-popup").html('<p style="color: #ffffff; font-size: 28px;" class="thank"> ✔ Дані надіслані!<p>');
                            $(".popup-form__box--orange").toggleClass("_active");
                            $(".popup-form__box--white").toggleClass("_active");
                            document.forms.sendformFooter.reset();
                        }
                    }
                };
                xhr.send(formData);
            }
        });

    });

})(jQuery);