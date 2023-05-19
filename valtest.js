
            function val() {
                var lowerCase = /[a-z]/g;
                var upperCase = /[A-Z]/g;
                var number = /[0-9]/g;
                var password = document.getElementById("password").value;

               if (password.match(lowerCase)) {
                    //document.getElementById('lc').classList.remove("invalid");
                    //document.getElementById('lc').classList.add("valid");
                    document.getElementById('lc').style.color = 'green';
                    document.getElementById('lc').textContent = "YAY! Your password has at least one lowercase letter.";
               }
               else {
                    document.getElementById('lc').style.color ='red';

                                   }
               if (password.match(upperCase)) {
                    document.getElementById('uc').style.color = 'green';
                    document.getElementById('uc').textContent = "YAY! Your password has at least one uppercase letter.";
               }
               else {
                    document.getElementById('uc').style.color = 'red';
               }

               if (password.match(number)) {
                document.getElementById('num').style.color = 'green';
                document.getElementById('num').textContent = "YAY! Your password has at least one numnber.";
               }
               else {
                document.getElementById('num').style.color = 'red';

               }

               if (password.length > 7) {
                document.getElementById('tl').style.color = 'green';
                document.getElementById('tl').textContent = "YAY! Your password has 8 characters.";
                }
                else {
                document.getElementById('tl').style.color = 'red';

                }
             }
