export function parkourTranslate(mode: string, text: string): string {

    if (text === "") {
        return "";
    }

    const englishToParkour: Record<string, string> = {
        A: "_",
        B: "[]",
        C: "!",
        D: "L",
        E: "H",
        F: "[L]",
        G: "[H]",
        H: "_|",
        I: "_||",
        J: "_|||",
        K: "_||||",
        L: "[_]",
        M: "↺",
        // N-z are the same as A-M
        N: "_",
        O: "[]",
        P: "!",
        Q: "L",
        R: "H",
        S: "[L]",
        T: "[H]",
        U: "_|",
        V: "_||",
        W: "_|||",
        X: "_||||",
        Y: "[_]",
        Z: "↺",
    };

    const parkourToEnglishTop: Record<string, string> = {
        "_": "A",
        "[]": "B",
        "!": "C",
        "L": "D",
        "H": "E",
        "[L]": "F",
        "[H]": "G",
        "_|": "H",
        "_||": "I",
        "_|||": "J",
        "_||||": "K",
        "[_]": "L",
        "↺": "M"
    };

    const parkourToEnglishBottom: Record<string, string> = {
        "_": "N",
        "[]": "O",
        "!": "P",
        "L": "Q",
        "H": "R",
        "[L]": "S",
        "[H]": "T",
        "_|": "U",
        "_||": "V",
        "_|||": "W",
        "_||||": "X",
        "[_]": "Y",
        "↺": "Z"
    };

    function translateEnglishToParkour(text: string): string {
        // sanitise input to caps only no spaces, nums or special chars
        text = text.replace(/[^a-zA-Z]/g, "");
        
        let topLine = "";
        let bottomLine = "";

        if (text === "") {
            return "";
        }
        

        // A-M are put on top line, N-Z are put on bottom line
        for (let i = 0; i < text.length; i++) {
            const char = text[i].toUpperCase();
            if (englishToParkour[char]) {
                if (char >= "A" && char <= "M") {
                    topLine += englishToParkour[char];
                    // add spaces on bottom line for the same length as top line
                    bottomLine += " ".repeat(englishToParkour[char].length);
                } else if (char >= "N" && char <= "Z") {
                    bottomLine += englishToParkour[char];
                    topLine += " ".repeat(englishToParkour[char].length);
                }
            }
        }

        return topLine + "\n" + bottomLine;
    }

    function translateParkourToEnglish(text: string): string {
        // parkour can not generate special characters, so error messages begin with #
        const topLine = text.split("\n")[0];
        let bottomLine = text.split("\n")[1];

        // parkour MUST be two lines, so if it is missing the bottom line, return an error
        if (!bottomLine) {
            bottomLine = " ";
        }

        let english = "";

        // A-M are on top line, N-Z are on bottom line
        // Loop through top line and bottom line at the same time
        // when the start of a character is found, add the characters to a temporary string until the code does not appear in the dictionary
        // then add the character to the final string
        let temp = "";
        for (let i = 0; i < Math.max(topLine.length, bottomLine.length); i++) {
            let char = topLine[i];
            
            if (char === " ") {
                char = bottomLine[i];
            }
            temp += char;
            // if temp is in the dictionary, continue
            if (parkourToEnglishTop[temp]) {
                continue;
            }
            else{
                // if temp is not in the dict, then check to see if temp-current is
                // if it is, then previous was a valid character so add to english
                // if not, then previous was not a valid character so continue (e.g [H is the start of a valid char)
                if (parkourToEnglishTop[temp.slice(0, -1)]) {
                    if (topLine[i-1] === " ") {
                        english += parkourToEnglishBottom[temp.slice(0, -1)];
                    } else {
                        english += parkourToEnglishTop[temp.slice(0, -1)];
                    }
                    temp = char;
                }
                continue;

            }
        }

        // if the parkour is invalid, then what is left from temp is not in the dictionary
        // and so will be undefined, so send an error message back
        if (!parkourToEnglishTop[temp]) {
            return "#invalid";
        }
        // add the last character
        if (topLine.slice(-1) === " ") {
            english += parkourToEnglishBottom[temp];
        } else {
            english += parkourToEnglishTop[temp];
        }

        return english;
    }

    return mode === "english" ? translateEnglishToParkour(text) : translateParkourToEnglish(text);
}
