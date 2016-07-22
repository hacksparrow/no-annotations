var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
  include: "https://www.youtube.com/*",
  contentStyle: ".video-annotations { display: none !important }"
});
