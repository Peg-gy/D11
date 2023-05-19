                        //**defines requirements/values
            function val() {
                var lowerCase = /[a-z]/g;
                var upperCase = /[A-Z]/g;
                var number = /[0-9]/g;
                var password = document.getElementById("password").value;

               if (password.match(lowerCase)) {

                    document.getElementById('lc').style.color = 'green';
               }
               else {
                    document.getElementById('lc').style.color ='red';

                                   }
               if (password.match(upperCase)) {

                    document.getElementById('uc').style.color = 'green';
               }
               else {
                    document.getElementById('uc').style.color = 'red';
               }

               if (password.match(number)) {

                document.getElementById('num').style.color = 'green';
               }
               else {
                document.getElementById('num').style.color = 'red';

               }

               if (password.length > 7) {
                
                document.getElementById('tl').style.color = 'green';
                }
                else {
                document.getElementById('tl').style.color = 'red';

                }
             }
