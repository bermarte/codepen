var n = 16;
var m = 23;
var left = 0;
var top = 0;
var col = "white";
for (i = 1; i <= n * m; i++) {

    document.write("<style>");
    document.write("#sq" + i);
    document.write("{");
    document.write("width: 20px;");
    document.write("height: 20px;");
    document.write("text-align: center;");
    document.write("position: absolute;");
    document.write("top: " + top + "px;");
    document.write("left: " + left + "px;");
    document.write("color: blue;");
    document.write("}");
    document.write("</style>");
    left += 20;
    var writeNum = false;
    if (writeNum == true) {
        j = i;
    } else {
        j = "";
    }
    document.write("<div id=\"sq" + i + "\">" + j + "</div>"); //sq

    //BLACK
    if (i == 7 ||
        i == 8 ||
        i == 9 ||
        i == 10 ||
        i == 21 ||
        i == 22 ||
        i == 36 ||
        i == 51 ||
        i == 67 ||
        i == 82 ||
        i == 98 ||
        i == 114 ||
        i == 130 ||
        i == 147 ||
        i == 163 ||
        i == 180 ||
        i == 195 ||
        i == 210 ||
        i == 226 ||
        i == 242 ||
        i == 258 ||
        i == 275 ||
        i == 260 ||
        i == 277 ||
        i == 210 ||
        i == 226 ||
        i == 242 ||
        i == 258 ||
        i == 275 ||
        i == 260 ||
        i == 277 ||
        i == 278 ||
        i == 279 ||
        i == 264 ||
        i == 265 ||
        i == 275 ||
        i == 282 ||
        i == 283 ||
        i == 284 ||
        i == 269 ||
        i == 286 ||
        i == 271 ||
        i == 255 ||
        i == 239 ||
        i == 223 ||
        i == 206 ||
        i == 189 ||
        i == 174 ||
        i == 158 ||
        i == 143 ||
        i == 127 ||
        i == 111 ||
        i == 95 ||
        i == 78 ||
        i == 62 ||
        i == 45 ||
        i == 28 ||
        i == 27 ||
        i == 117 ||
        i == 124 ||
        i == 103 ||
        i == 104 ||
        i == 105 ||
        i == 106 ||
        i == 119 ||
        i == 120 ||
        i == 121 ||
        i == 122 ||
        i == 135 ||
        i == 136 ||
        i == 137 ||
        i == 138 ||
        i == 151 ||
        i == 152 ||
        i == 153 ||
        i == 154 ||
        i == 167 ||
        i == 168 ||
        i == 169 ||
        i == 170 ||
        i == 184 ||
        i == 185 ||
        i == 326 ||
        i == 343 ||
        i == 360 ||
        i == 361 ||
        i == 346 ||
        i == 331
    ) {
        col = "black";
        document.write("<style>");
        document.write("#sq" + i);
        document.write("{");
        document.write("background-color: " + col + ";");
        document.write("}");
        document.write("</style>");

    }
    //tronco
    if (
        i == 273 ||
        i == 274 ||
        i == 276 ||
        i == 280 ||
        i == 281 ||
        i == 285 ||
        i == 287 ||
        i == 288 ||
        i == 289 ||
        i == 290 ||
        i == 291 ||
        i == 292 ||
        i == 293 ||
        i == 294 ||
        i == 295 ||
        i == 296 ||
        i == 297 ||
        i == 298 ||
        i == 299 ||
        i == 300 ||
        i == 301 ||
        i == 302 ||
        i == 303 ||
        i == 304 ||
        i == 273 ||
        i == 305 ||
        i == 306 ||
        i == 307 ||
        i == 308 ||
        i == 309 ||
        i == 310 ||
        i == 311 ||
        i == 312 ||
        i == 313 ||
        i == 314 ||
        i == 315 ||
        i == 316 ||
        i == 317 ||
        i == 318 ||
        i == 319 ||
        i == 320

    ) {
        col = "brown";
        document.write("<style>");
        document.write("#sq" + i);
        document.write("{");
        document.write("background-color: " + col + ";");
        document.write("}");
        document.write("</style>");
    }


    //RED
    if (
        i == 327 ||
        i == 328 ||
        i == 329 ||
        i == 330 ||
        i == 344 ||
        i == 345 ||
        i == 164 ||
        i == 148 ||
        i == 131 ||
        i == 83 ||
        i == 149 ||
        i == 165 ||
        i == 166 ||
        i == 181 ||
        i == 182 ||
        i == 183 ||
        i == 197 ||
        i == 198 ||
        i == 199 ||
        i == 213 ||
        i == 214 ||
        i == 215 ||
        i == 229 ||
        i == 230 ||
        i == 231 ||
        i == 245 ||
        i == 246 ||
        i == 247 ||
        i == 261 ||
        i == 262 ||
        i == 263 ||
        i == 200 ||
        i == 201 ||
        i == 202 ||
        i == 203 ||
        i == 204 ||
        i == 216 ||
        i == 217 ||
        i == 218 ||
        i == 219 ||
        i == 220 ||
        i == 232 ||
        i == 233 ||
        i == 234 ||
        i == 235 ||
        i == 236 ||
        i == 248 ||
        i == 249 ||
        i == 250 ||
        i == 251 ||
        i == 252 ||
        i == 266 ||
        i == 267 ||
        i == 268 ||
        i == 186 ||
        i == 187 ||
        i == 188 ||
        i == 171 ||
        i == 172 ||
        i == 173 ||
        i == 156 ||
        i == 157 ||
        i == 142 ||
        i == 94 ||
        i == 86 ||
        i == 87 ||
        i == 88 ||
        i == 89 ||
        i == 90 ||
        i == 91 ||
        i == 68 ||
        i == 69 ||
        i == 70 ||
        i == 71 ||
        i == 72 ||
        i == 73 ||
        i == 74 ||
        i == 75 ||
        i == 76 ||
        i == 77 ||
        i == 52 ||
        i == 53 ||
        i == 54 ||
        i == 55 ||
        i == 56 ||
        i == 57 ||
        i == 58 ||
        i == 59 ||
        i == 60 ||
        i == 61 ||
        i == 37 ||
        i == 38 ||
        i == 39 ||
        i == 40 ||
        i == 41 ||
        i == 42 ||
        i == 43 ||
        i == 44 ||
        i == 23 ||
        i == 24 ||
        i == 25 ||
        i == 26

    ) {
        col = "red";
        document.write("<style>");
        document.write("#sq" + i);
        document.write("{");
        document.write("background-color: " + col + ";");
        document.write("}");
        document.write("</style>");
    }
    //YELLOW
    if (
        i == 196 ||
        i == 212 ||
        i == 205 ||
        i == 221
    ) {
        col = "yellow";
        document.write("<style>");
        document.write("#sq" + i);
        document.write("{");
        document.write("background-color: " + col + ";");
        document.write("}");
        document.write("</style>");

    }
    //BLUE
    if (
        i == 211 ||
        i == 227 ||
        i == 228 ||
        i == 243 ||
        i == 244 ||
        i == 259 ||
        i == 222 ||
        i == 237 ||
        i == 238 ||
        i == 253 ||
        i == 254 ||
        i == 270
    ) {
        col = "blue";
        document.write("<style>");
        document.write("#sq" + i);
        document.write("{");
        document.write("background-color: " + col + ";");
        document.write("}");
        document.write("</style>");
    }
    if (i == n ||
        i == n * 2 ||
        i == n * 3 ||
        i == n * 4 ||
        i == n * 5 ||
        i == n * 6 ||
        i == n * 7 ||
        i == n * 8 ||
        i == n * 9 ||
        i == n * 10 ||
        i == n * 11 ||
        i == n * 12 ||
        i == n * 13 ||
        i == n * 14 ||
        i == n * 15 ||
        i == n * 16 ||
        i == n * 17 ||
        i == n * 18 ||
        i == n * 19 ||
        i == n * 20 ||
        i == n * 21 ||
        i == n * 22 ||
        i == n * 23
    ) {
        left = 0;



        document.write("<br>");
    }

}