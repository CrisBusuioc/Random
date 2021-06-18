//trebuie sa convertesti numarul introdus in dependenta de ce a ales clientu(Binar sau hexa decimal) cand dai click
// pe butonul convert it in inputul result sa apara rezultatul convertit

var ConvertBase = function (num) {
    return {
        from : function (baseFrom) {
            return {
                to : function (baseTo) {
                    return parseInt(num, baseFrom).toString(baseTo);
                }
            };
        }
    };
};



// decimal to binary
function check(){
    let val = document.getElementById('Sone').value;
    if(val === Binar) {
        ConvertBase.dec2bin = function (num) {
            return ConvertBase(num).from(10).to(2);

        }
    }
}

// decimal to hexadecimal
ConvertBase.dec2hex = function (num) {
    return ConvertBase(num).from(10).to(16);
};


this.ConvertBase = ConvertBase;