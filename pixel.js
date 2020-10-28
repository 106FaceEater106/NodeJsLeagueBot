const robot = require("robotjs");

module.exports = {
    obtenerColor: function(color, startX, startY, width, height){
        var img = robot.screen.capture(startX, startY, width, height);
        let hex;
        for (let x = startX; x < width; x++) {
            for (let y = startY; y < height; y++) {
                
                hex = img.colorAt(x, y);
    
                if(hex === color){
                    return {X:x,Y:y};
                }
            }
        }
    
        return null;
    },
};