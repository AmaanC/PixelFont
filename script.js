(function(exports) {
    var letters = {
        'A': [
            [, 1],
            [1, , 1],
            [1, , 1],
            [1, 1, 1],
            [1, , 1]
        ],
        'B': [
            [1, 1],
            [1, , 1],
            [1, 1, 1],
            [1, , 1],
            [1, 1]
        ],
        'C': [
            [1, 1, 1],
            [1],
            [1],
            [1],
            [1, 1, 1]
        ],
        'D': [
            [1, 1],
            [1, , 1],
            [1, , 1],
            [1, , 1],
            [1, 1]
        ],
        'E': [
            [1, 1, 1],
            [1],
            [1, 1, 1],
            [1],
            [1, 1, 1]
        ],
        'F': [
            [1, 1, 1],
            [1],
            [1, 1],
            [1],
            [1]
        ],
        'G': [
            [, 1, 1],
            [1],
            [1, , 1, 1],
            [1, , , 1],
            [, 1, 1]
        ],
        'H': [
            [1, , 1],
            [1, , 1],
            [1, 1, 1],
            [1, , 1],
            [1, , 1]
        ],
        'I': [
            [1, 1, 1],
            [, 1],
            [, 1],
            [, 1],
            [1, 1, 1]
        ],
        'J': [
            [1, 1, 1],
            [, , 1],
            [, , 1],
            [1, , 1],
            [1, 1, 1]
        ],
        'K': [
            [1, , , 1],
            [1, , 1],
            [1, 1],
            [1, , 1],
            [1, , , 1]
        ],
        'L': [
            [1],
            [1],
            [1],
            [1],
            [1, 1, 1]
        ],
        'M': [
            [1, 1, 1, 1, 1],
            [1, , 1, , 1],
            [1, , 1, , 1],
            [1, , , , 1],
            [1, , , , 1]
        ],
        'N': [
            [1, , , 1],
            [1, 1, , 1],
            [1, , 1, 1],
            [1, , , 1],
            [1, , , 1]
        ],
        'O': [
            [1, 1, 1],
            [1, , 1],
            [1, , 1],
            [1, , 1],
            [1, 1, 1]
        ],
        'P': [
            [1, 1, 1],
            [1, , 1],
            [1, 1, 1],
            [1],
            [1]
        ],
        'Q': [
            [0, 1, 1],
            [1, , , 1],
            [1, , , 1],
            [1, , 1, 1],
            [1, 1, 1, 1]
        ],
        'R': [
            [1, 1],
            [1, , 1],
            [1, , 1],
            [1, 1],
            [1, , 1]
        ],
        'S': [
            [1, 1, 1],
            [1],
            [1, 1, 1],
            [, , 1],
            [1, 1, 1]
        ],
        'T': [
            [1, 1, 1],
            [, 1],
            [, 1],
            [, 1],
            [, 1]
        ],
        'U': [
            [1, , 1],
            [1, , 1],
            [1, , 1],
            [1, , 1],
            [1, 1, 1]
        ],
        'V': [
            [1, , , , 1],
            [1, , , , 1],
            [, 1, , 1],
            [, 1, , 1],
            [, , 1]
        ],
        'W': [
            [1, , , , 1],
            [1, , , , 1],
            [1, , , , 1],
            [1, , 1, , 1],
            [1, 1, 1, 1, 1]
        ],
        'X': [
            [1, , , , 1],
            [, 1, , 1],
            [, , 1],
            [, 1, , 1],
            [1, , , , 1]
        ],
        'Y': [
            [1, , 1],
            [1, , 1],
            [, 1],
            [, 1],
            [, 1]
        ],
        'Z': [
            [1, 1, 1, 1, 1],
            [, , , 1],
            [, , 1],
            [, 1],
            [1, 1, 1, 1, 1]
        ],
        '0': [
            [1, 1, 1],
            [1, , 1],
            [1, , 1],
            [1, , 1],
            [1, 1, 1]
        ],
        '1': [
            [1],
            [1],
            [1],
            [1],
            [1]
        ],
        '2': [
            [1,1,1],
            [,,1],
            [1,1,1],
            [1,,],
            [1,1,1]
        ],
        '3': [
            [1,1,1],
            [,,1],
            [,1,1],
            [,,1],
            [1,1,1]
        ],
        '4': [
            [1,,1,],
            [1,,1,],
            [1,1,1,1],
            [,,1,],
            [,,1,],
        ],
        '5': [
            [1,1,1],
            [1,,,],
            [1,1,1,],
            [,,1],
            [1,1,1],
        ],
        '6': [
            [1,1,1],
            [1,,,],
            [1,1,1,],
            [1,,1],
            [1,1,1],
        ],
        '7': [
            [1,1,1],
            [,,1],
            [,,1],
            [,,1],
            [,,1],
        ],
        '8': [
            [1,1,1],
            [1,,1],
            [1,1,1],
            [1,,1],
            [1,1,1],
        ],
        '9': [
            [1,1,1],
            [1,,1],
            [1,1,1],
            [,,1],
            [1,1,1],
        ],
        '-': [
            [],
            [],
            [1,1],
            [],
            [],
        ],
        ' ': [
            [, ,],
            [, ,],
            [, ,],
            [, ,],
            [, ,]
        ],
        ':': [
            [, ,],
            [, 1,],
            [, ,],
            [, ,],
            [, 1,]
        ],
        '@': [
            [0,1,1,],
            [1,0,0,1],
            [1,0,1,1],
            [1,0,1,1],
            [1,,],
            [1,1,1,1],
        ],
        // This won't draw "#"! It draws the music symbol.
        '#': [
            [,1,1,1,1],
            [,1,,,1],
            [,1,,,1],
            [1,1,,1,1],
            [1,1,,1,1],
        ],
        '!': [
            [,1],
            [,1],
            [,1],
            [,],
            [,1],
        ]
    };
    
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');


    var input = document.getElementById('input');
    var update = document.getElementById('update');
    update.addEventListener('click', function() {
        var size = 1000 / (input.value.length * 4.8);
        size -= size % 4;
        exports.write(input.value, 0, 0, Math.min(24, size), 'black');
    });

    exports.write = function(string, xPos, yPos, size, color) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        var needed = [];
        string = string.toUpperCase(); // because I only did uppercase letters
        for (var i = 0; i < string.length; i++) {
            var letter = letters[string.charAt(i)];
            if (letter) { // because there's letters I didn't do
                needed.push(letter);
            }
        }

        ctx.fillStyle = color || 'black';
        var currX = xPos;
        var totalLen;
        var totalWidth;
        var currWidths;
        if (xPos === 'center') {
            totalWidth = 0;
            for (var i = 0; i < needed.length; i++) {
                letter = needed[i];
                currWidths = letter.map(function(elem) {
                    return elem.length;
                });
                totalWidth += Math.max.apply(undefined, currWidths);
            }
            totalLen = totalWidth * size + (needed.length - 1) * size;
            // The above is basically = sizeof(all characters) + sizeof(spaces between characters)
            currX = Math.floor(exports.cx - totalLen / 2);
        }
        if (yPos === 'center') {
            totalLen = letter.length * size;
            yPos = Math.floor(exports.cy - totalLen / 2);
        }
        for (i = 0; i < needed.length; i++) {
            letter = needed[i];
            var currY = yPos;
            var addX = 0;
            for (var y = 0; y < letter.length; y++) {
                var row = letter[y];
                for (var x = 0; x < row.length; x++) {
                    if (row[x]) {
                        console.log(currX + x * size, currY, size, size);
                        ctx.fillRect(currX + x * size, currY, size, size);
                    }
                }
                addX = Math.max(addX, row.length * size);
                currY += size;
            }
            currX += size + addX;
        }
    };
})(window);