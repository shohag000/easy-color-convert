import { colorNames } from "./src/constants/colorNames.js";
import { RGB_REGEX,RGBA_REGEX,HEX_PATTERN,HEX3_PATTERN } from "./src/constants/regex.js";

class Color {
    constructor(color_in_string){
        this.color_in_string = color_in_string;
        console.log('abcd')
    }

    init(red,green,blue,alpha=1){
        this.red = parseInt(red);
        this.green = parseInt(green);
        this.blue = parseInt(blue);
        this.alpha = parseFloat(alpha) == 1 ? '1' : String( parseFloat(alpha) || 0);

        console.log(this.red,green,blue,this.alpha)
    }

    componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    from_string(){
        let m = new Macher();


        console.log(m.match_pattern(RGB_REGEX.short,this.color_in_string))

        if (m.match_pattern(RGB_REGEX.short,this.color_in_string)){
            this.init(...m.groups());
        }

        else if(m.match_pattern(RGB_REGEX.long,this.color_in_string)){
            let argument_s = m.groups().map((each,i)=>parseFloat(each)/100*255);
            this.init(...argument_s); 
        }

        else if(m.match_pattern(RGBA_REGEX.short,this.color_in_string)){
            this.init(...m.groups())
        }

        else if(m.match_pattern(RGBA_REGEX.long,this.color_in_string)){
            let argument_s = [...m.groups.slice(0,3).map((each,i)=>parseFloat(each)/100*255),m.groups[3]];
            this.init()
        }
        else if(m.match_pattern(HEX_PATTERN,this.color_in_string)){
            this.init(m.groups().map((each,i)=>parseInt(each,16)))
        }
        else if(m.match_pattern(HEX_PATTERN,this.color_in_string)){
            this.init(m.groups().map((each,i)=>parseInt(each*2,16)))
        }
        else if (colorNames[this.color_in_string.toUpperCase()]){
            let rgb = colorNames[this.color_in_string.toUpperCase()].rgb;
            this.init(rgb.r,rgb.g,rgb.b);
        }
        else {
            throw Error(`Could not convert ${this.color_in_string} into color`)
        }
    }

    rgb() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`
    }

    rgba() {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`
    }

    hex() {
        return "#" + componentToHex(this.red) + componentToHex(this.green) + componentToHex(this.blue)
    }
}


class Macher {
    constructor(){
        this.match_obj = null;
    }

    match_pattern(pattern, color_in_string){
        this.match_obj = pattern.exec(color_in_string)
        return this.match_obj
    }

    groups() {
        return this.match_obj ? this.match_obj.slice(1) : null
    }

}

let color = new Color('rgb(255, 255, 255)');
color.from_string();
console.log(color.rgb());