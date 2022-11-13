import * as raw from "./comics/11-22/*.jpg"

var comics = [];

for(let comic in raw) {
  comics.push(raw[comic].default);
}
