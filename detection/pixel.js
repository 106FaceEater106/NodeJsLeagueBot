const robot = require("robotjs");

module.exports = {
    obtenerColor: function(color, startX, startY, width, height){
        var img = robot.screen.capture(startX, startY, width, height);
        for (let x = startX; x < width; x++) {
            for (let y = startY; y < height; y++) {
                if(img.colorAt(x, y) === color){
                    return {X:x,Y:y};
                }
            }
        }
    
        return null;
    },
};