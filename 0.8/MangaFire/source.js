(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeColor = void 0;
var BadgeColor;
(function (BadgeColor) {
    BadgeColor["BLUE"] = "default";
    BadgeColor["GREEN"] = "success";
    BadgeColor["GREY"] = "info";
    BadgeColor["YELLOW"] = "warning";
    BadgeColor["RED"] = "danger";
})(BadgeColor = exports.BadgeColor || (exports.BadgeColor = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],5:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
/**
* @deprecated Use {@link PaperbackExtensionBase}
*/
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = exports.SourceIntents = void 0;
var SourceIntents;
(function (SourceIntents) {
    SourceIntents[SourceIntents["MANGA_CHAPTERS"] = 1] = "MANGA_CHAPTERS";
    SourceIntents[SourceIntents["MANGA_TRACKING"] = 2] = "MANGA_TRACKING";
    SourceIntents[SourceIntents["HOMEPAGE_SECTIONS"] = 4] = "HOMEPAGE_SECTIONS";
    SourceIntents[SourceIntents["COLLECTION_MANAGEMENT"] = 8] = "COLLECTION_MANAGEMENT";
    SourceIntents[SourceIntents["CLOUDFLARE_BYPASS_REQUIRED"] = 16] = "CLOUDFLARE_BYPASS_REQUIRED";
    SourceIntents[SourceIntents["SETTINGS_UI"] = 32] = "SETTINGS_UI";
})(SourceIntents = exports.SourceIntents || (exports.SourceIntents = {}));
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],7:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./ByteArray"), exports);
__exportStar(require("./Badge"), exports);
__exportStar(require("./interfaces"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./HomeSectionType"), exports);
__exportStar(require("./PaperbackExtensionBase"), exports);

},{"./Badge":1,"./ByteArray":2,"./HomeSectionType":3,"./PaperbackExtensionBase":4,"./Source":5,"./SourceInfo":6,"./interfaces":15}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],15:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./ChapterProviding"), exports);
__exportStar(require("./CloudflareBypassRequestProviding"), exports);
__exportStar(require("./HomePageSectionsProviding"), exports);
__exportStar(require("./MangaProgressProviding"), exports);
__exportStar(require("./MangaProviding"), exports);
__exportStar(require("./RequestManagerProviding"), exports);
__exportStar(require("./SearchResultsProviding"), exports);

},{"./ChapterProviding":8,"./CloudflareBypassRequestProviding":9,"./HomePageSectionsProviding":10,"./MangaProgressProviding":11,"./MangaProviding":12,"./RequestManagerProviding":13,"./SearchResultsProviding":14}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],60:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./DynamicUI/Exports/DUIBinding"), exports);
__exportStar(require("./DynamicUI/Exports/DUIForm"), exports);
__exportStar(require("./DynamicUI/Exports/DUIFormRow"), exports);
__exportStar(require("./DynamicUI/Exports/DUISection"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIHeader"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILink"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIMultilineLabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUINavigationButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIOAuthButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISecureInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISelect"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIStepper"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISwitch"), exports);
__exportStar(require("./Exports/ChapterDetails"), exports);
__exportStar(require("./Exports/Chapter"), exports);
__exportStar(require("./Exports/Cookie"), exports);
__exportStar(require("./Exports/HomeSection"), exports);
__exportStar(require("./Exports/IconText"), exports);
__exportStar(require("./Exports/MangaInfo"), exports);
__exportStar(require("./Exports/MangaProgress"), exports);
__exportStar(require("./Exports/PartialSourceManga"), exports);
__exportStar(require("./Exports/MangaUpdates"), exports);
__exportStar(require("./Exports/PBCanvas"), exports);
__exportStar(require("./Exports/PBImage"), exports);
__exportStar(require("./Exports/PagedResults"), exports);
__exportStar(require("./Exports/RawData"), exports);
__exportStar(require("./Exports/Request"), exports);
__exportStar(require("./Exports/SourceInterceptor"), exports);
__exportStar(require("./Exports/RequestManager"), exports);
__exportStar(require("./Exports/Response"), exports);
__exportStar(require("./Exports/SearchField"), exports);
__exportStar(require("./Exports/SearchRequest"), exports);
__exportStar(require("./Exports/SourceCookieStore"), exports);
__exportStar(require("./Exports/SourceManga"), exports);
__exportStar(require("./Exports/SecureStateManager"), exports);
__exportStar(require("./Exports/SourceStateManager"), exports);
__exportStar(require("./Exports/Tag"), exports);
__exportStar(require("./Exports/TagSection"), exports);
__exportStar(require("./Exports/TrackedMangaChapterReadAction"), exports);
__exportStar(require("./Exports/TrackerActionQueue"), exports);

},{"./DynamicUI/Exports/DUIBinding":17,"./DynamicUI/Exports/DUIForm":18,"./DynamicUI/Exports/DUIFormRow":19,"./DynamicUI/Exports/DUISection":20,"./DynamicUI/Rows/Exports/DUIButton":21,"./DynamicUI/Rows/Exports/DUIHeader":22,"./DynamicUI/Rows/Exports/DUIInputField":23,"./DynamicUI/Rows/Exports/DUILabel":24,"./DynamicUI/Rows/Exports/DUILink":25,"./DynamicUI/Rows/Exports/DUIMultilineLabel":26,"./DynamicUI/Rows/Exports/DUINavigationButton":27,"./DynamicUI/Rows/Exports/DUIOAuthButton":28,"./DynamicUI/Rows/Exports/DUISecureInputField":29,"./DynamicUI/Rows/Exports/DUISelect":30,"./DynamicUI/Rows/Exports/DUIStepper":31,"./DynamicUI/Rows/Exports/DUISwitch":32,"./Exports/Chapter":33,"./Exports/ChapterDetails":34,"./Exports/Cookie":35,"./Exports/HomeSection":36,"./Exports/IconText":37,"./Exports/MangaInfo":38,"./Exports/MangaProgress":39,"./Exports/MangaUpdates":40,"./Exports/PBCanvas":41,"./Exports/PBImage":42,"./Exports/PagedResults":43,"./Exports/PartialSourceManga":44,"./Exports/RawData":45,"./Exports/Request":46,"./Exports/RequestManager":47,"./Exports/Response":48,"./Exports/SearchField":49,"./Exports/SearchRequest":50,"./Exports/SecureStateManager":51,"./Exports/SourceCookieStore":52,"./Exports/SourceInterceptor":53,"./Exports/SourceManga":54,"./Exports/SourceStateManager":55,"./Exports/Tag":56,"./Exports/TagSection":57,"./Exports/TrackedMangaChapterReadAction":58,"./Exports/TrackerActionQueue":59}],61:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./generated/_exports"), exports);
__exportStar(require("./base/index"), exports);
__exportStar(require("./compat/DyamicUI"), exports);

},{"./base/index":7,"./compat/DyamicUI":16,"./generated/_exports":60}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaFire = exports.MangaFireInfo = void 0;
const types_1 = require("@paperback/types");
const PageUrl_1 = require("./PageUrl");
const Vrf_1 = require("./Vrf");
const DOMAIN = 'https://mangafire.to';
const LANG = 'en';
const PAGE_SIZE = 50;
const CHAPTER_PAGE_SIZE = 200;
const MAX_CHAPTER_PAGES = 40;
const DEFAULT_RATINGS = ['safe', 'suggestive'];
exports.MangaFireInfo = {
    version: '1.0.1',
    name: 'MangaFire',
    icon: 'icon.png',
    author: 'CrispyDepression',
    authorWebsite: 'https://github.com/CrispyDepression',
    description: 'Read manga, manhwa and manhua from mangafire.to (English). Request signing ported from the Mihon/keiyoushi extension.',
    contentRating: types_1.ContentRating.MATURE,
    websiteBaseURL: DOMAIN,
    sourceTags: [{ text: 'Cloudflare', type: types_1.BadgeColor.RED }, { text: 'Captcha', type: types_1.BadgeColor.YELLOW }],
    intents: types_1.SourceIntents.MANGA_CHAPTERS | types_1.SourceIntents.HOMEPAGE_SECTIONS | types_1.SourceIntents.CLOUDFLARE_BYPASS_REQUIRED
};
// ---- filter tables (from the maintained extension) ---------------------------
const GENRES = [
    ['Action', '1'], ['Adult', '268929'], ['Adventure', '78'], ['Avant Garde', '3'], ['Boys Love', '4'], ['Comedy', '5'],
    ['Crime', '268921'], ['Demons', '77'], ['Drama', '6'], ['Ecchi', '7'], ['Fantasy', '79'], ['Girls Love', '9'],
    ['Gourmet', '10'], ['Harem', '11'], ['Hentai', '268930'], ['Historical', '268922'], ['Horror', '530'], ['Isekai', '13'],
    ['Iyashikei', '531'], ['Josei', '15'], ['Kids', '532'], ['Magic', '539'], ['Magical Girls', '268923'],
    ['Mahou Shoujo', '533'], ['Martial Arts', '534'], ['Mature', '268931'], ['Mecha', '19'], ['Medical', '268924'],
    ['Military', '535'], ['Music', '21'], ['Mystery', '22'], ['Parody', '23'], ['Philosophical', '268925'],
    ['Psychological', '536'], ['Reverse Harem', '25'], ['Romance', '26'], ['School', '73'], ['Sci-Fi', '28'],
    ['Seinen', '537'], ['Shoujo', '30'], ['Shounen', '31'], ['Slice of Life', '538'], ['Smut', '268932'], ['Space', '33'],
    ['Sports', '34'], ['Super Power', '75'], ['Superhero', '268926'], ['Supernatural', '76'], ['Suspense', '37'],
    ['Thriller', '38'], ['Tragedy', '268927'], ['Vampire', '39'], ['Wuxia', '268928']
];
const THEMES = [
    ['Aliens', '268933'], ['Animals', '268934'], ['Cooking', '268935'], ['Crossdressing', '268936'], ['Delinquents', '268937'],
    ['Demons', '268938'], ['Genderswap', '268939'], ['Ghosts', '268940'], ['Gyaru', '268941'], ['Harem', '268942'],
    ['Incest', '268943'], ['Loli', '268944'], ['Mafia', '268945'], ['Magic', '268946'], ['Martial Arts', '268947'],
    ['Military', '268948'], ['Monster Girls', '268949'], ['Monsters', '268950'], ['Music', '268951'], ['Ninja', '268952'],
    ['Office Workers', '268953'], ['Police', '268954'], ['Post-Apocalyptic', '268955'], ['Reincarnation', '268956'],
    ['Reverse Harem', '268957'], ['Samurai', '268958'], ['School Life', '268959'], ['Shota', '268960'],
    ['Supernatural', '268961'], ['Survival', '268962'], ['Time Travel', '268963'], ['Traditional Games', '268964'],
    ['Vampires', '268965'], ['Video Games', '268966'], ['Villainess', '268967'], ['Virtual Reality', '268968'], ['Zombies', '268969']
];
const TYPES = [['Manga', 'manga'], ['Manhwa', 'manhwa'], ['Manhua', 'manhua'], ['Other', 'other']];
const STATUSES = [
    ['Releasing', 'releasing'], ['Finished', 'finished'], ['On Hiatus', 'on_hiatus'],
    ['Discontinued', 'discontinued'], ['Not Yet Released', 'not_yet_released']
];
const RATINGS = [['Safe', 'safe'], ['Suggestive', 'suggestive'], ['Erotica', 'erotica'], ['Pornographic', 'pornographic']];
const SORTS = [
    ['Latest update', 'chapter_updated_at:desc'], ['Best match', 'relevance:desc'], ['Recently added', 'created_at:desc'],
    ['Title (A-Z)', 'title:asc'], ['Title (Z-A)', 'title:desc'], ['Year (newest)', 'year:desc'], ['Year (oldest)', 'year:asc'],
    ['Highest rated', 'score:desc'], ['Most viewed - 7 days', 'views_7d:desc'], ['Most viewed - 30 days', 'views_30d:desc'],
    ['Most viewed - all time', 'views_total:desc'], ['Most followed', 'follows_total:desc']
];
// Tag ids are "<kind>:<value>" so one flat includedTags list can be routed back to the right parameter.
const T = { genre: 'g:', theme: 'th:', type: 'ty:', status: 'st:', rating: 'cr:', sort: 'so:' };
const posterOf = (p) => p?.large ?? p?.medium ?? p?.small ?? '';
const toPartial = (m) => {
    if (!m.hid)
        return undefined;
    return App.createPartialSourceManga({ mangaId: m.hid, title: (m.title ?? m.hid).trim(), image: posterOf(m.poster) });
};
const compact = (items) => items.filter((i) => i !== undefined);
const htmlToText = (html) => (html ?? '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n')
    .trim();
const idByTitle = (table, title) => table.find(([name]) => name.toLowerCase() === title.toLowerCase())?.[1];
// ---- source -----------------------------------------------------------------
class MangaFire extends types_1.Source {
    constructor() {
        super(...arguments);
        this.imagesVerified = false;
        this.requestManager = App.createRequestManager({
            requestsPerSecond: 2,
            requestTimeout: 20000,
            interceptor: {
                interceptRequest: async (request) => {
                    const realUrl = (0, PageUrl_1.decodePageUrl)(request.url);
                    if (realUrl)
                        request.url = realUrl;
                    request.headers = {
                        referer: `${DOMAIN}/`,
                        ...(request.headers ?? {}),
                        'user-agent': await this.requestManager.getDefaultUserAgent()
                    };
                    return request;
                },
                interceptResponse: async (response) => response
            }
        });
    }
    async getCloudflareBypassRequestAsync() {
        return App.createRequest({
            url: `${DOMAIN}/`,
            method: 'GET',
            headers: { 'user-agent': await this.requestManager.getDefaultUserAgent() }
        });
    }
    getMangaShareUrl(mangaId) {
        return `${DOMAIN}/title/${mangaId}`;
    }
    // ---------------------------------------------------------------- network
    /** Signed GET against /api/... returning parsed JSON. */
    async api(apiPath, params = []) {
        const url = `${DOMAIN}${apiPath}?${(0, Vrf_1.signedQuery)(apiPath, params)}`;
        const response = await this.requestManager.schedule(App.createRequest({ url, method: 'GET', headers: { accept: 'application/json' } }), 1);
        const body = typeof response.data === 'string' ? response.data : '';
        if (response.status === 403 || response.status === 503 || /captcha_required/.test(body.slice(0, 500)) || /<title>\s*Just a moment/i.test(body.slice(0, 2000))) {
            // This exact prefix makes Paperback offer the Cloudflare bypass (cloud icon).
            throw new Error('CLOUDFLARE BYPASS ERROR:\nPlease go to the homepage of MangaFire and press the cloud icon. If a shape captcha appears, solve it, then close the window.');
        }
        if (response.status !== 200)
            throw new Error(`MangaFire answered HTTP ${response.status} for ${apiPath}`);
        try {
            return JSON.parse(body);
        }
        catch {
            throw new Error(`MangaFire returned something that is not JSON for ${apiPath} (${body.replace(/\s+/g, ' ').slice(0, 100)})`);
        }
    }
    ratingParams() {
        return DEFAULT_RATINGS.map(r => ['content_rating[]', r]);
    }
    listParams(sort, page) {
        const [key, dir] = sort.split(':');
        return [
            [`order[${key}]`, dir],
            ['languages[]', LANG],
            ['page', String(page)],
            ['limit', String(PAGE_SIZE)],
            ...this.ratingParams()
        ];
    }
    // ----------------------------------------------------------------- details
    async getMangaDetails(mangaId) {
        const res = await this.api(`/api/titles/${mangaId}`);
        const d = res.data;
        if (!d)
            throw new Error(`MangaFire has no title for id ${mangaId}`);
        const names = (list) => [...new Set((list ?? []).map(e => (e.title ?? '').trim()).filter(Boolean))].join(', ');
        const section = (id, label, list, table, prefix) => {
            const tags = (list ?? [])
                .map(e => (e.title ?? '').trim())
                .filter(Boolean)
                .map(title => App.createTag({ id: `${prefix}${idByTitle(table, title) ?? `?${title}`}`, label: title }));
            return tags.length > 0 ? App.createTagSection({ id, label, tags }) : undefined;
        };
        const sections = [
            section('genres', 'Genres', d.genres, GENRES, T.genre),
            section('themes', 'Themes', d.themes, THEMES, T.theme),
            section('demographics', 'Demographics', d.demographics, [], T.genre)
        ].filter((s) => s !== undefined);
        const status = { releasing: 'Ongoing', finished: 'Completed', on_hiatus: 'Hiatus', discontinued: 'Cancelled' }[(d.status ?? '').toLowerCase()] ?? 'Unknown';
        const adult = (d.genres ?? []).some(g => ['hentai', 'smut'].includes((g.title ?? '').toLowerCase()));
        const titles = [(d.title ?? mangaId).trim(), ...(d.altTitles ?? []).map(t => t.trim())]
            .filter(Boolean)
            .filter((t, i, all) => all.indexOf(t) === i)
            .slice(0, 15);
        return App.createSourceManga({
            id: mangaId,
            mangaInfo: App.createMangaInfo({
                image: posterOf(d.poster),
                titles,
                author: names(d.authors),
                artist: names(d.artists),
                desc: htmlToText(d.synopsisHtml),
                status,
                hentai: adult,
                tags: sections
            })
        });
    }
    // ---------------------------------------------------------------- chapters
    async getChapters(mangaId) {
        const rows = [];
        let page = 1;
        let lastPage = 1;
        do {
            const res = await this.api(`/api/titles/${mangaId}/chapters`, [
                ['language', LANG],
                ['sort', 'number'],
                ['order', 'desc'],
                ['page', String(page)],
                ['limit', String(CHAPTER_PAGE_SIZE)]
            ]);
            rows.push(...(res.items ?? []));
            lastPage = res.meta?.lastPage ?? 1;
            page++;
        } while (page <= lastPage && page <= MAX_CHAPTER_PAGES);
        const chapters = [];
        rows.forEach((row, index) => {
            if (row.id === null || row.id === undefined)
                return;
            const number = Number(row.number);
            chapters.push(App.createChapter({
                id: String(row.id),
                chapNum: Number.isFinite(number) ? number : 0,
                volume: 0,
                name: row.name ?? undefined,
                group: row.type ?? undefined,
                langCode: LANG,
                time: row.createdAt ? new Date(row.createdAt * 1000) : undefined,
                sortingIndex: rows.length - index
            }));
        });
        if (chapters.length === 0)
            throw new Error('MangaFire has no English chapters for this title.');
        return chapters;
    }
    async getChapterDetails(mangaId, chapterId) {
        const res = await this.api(`/api/chapters/${chapterId}`);
        const rawPages = res.data?.pages ?? [];
        let pages = rawPages.map(p => p.url ?? '').filter(Boolean);
        if (pages.length === 0)
            throw new Error('MangaFire returned no pages for this chapter.');
        if (pages.length > 1 && new Set(pages).size === 1) {
            throw new Error(`MangaFire listed ${pages.length} pages but every one has the same image URL. First entry: ${JSON.stringify(rawPages[0]).slice(0, 300)}`);
        }
        // If the pages share a file name or path (they may differ only by a query string), the reader can
        // treat them as one image and repeat page 1. Give each page a unique placeholder URL instead.
        const withoutQuery = pages.map(u => u.split('#')[0].split('?')[0]);
        const fileNames = withoutQuery.map(u => u.split('/').pop() ?? '');
        if (pages.length > 1 && (new Set(withoutQuery).size < pages.length || new Set(fileNames).size < pages.length)) {
            pages = pages.map((url, index) => (0, PageUrl_1.encodePageUrl)(index, url));
        }
        await this.verifyImages(pages);
        return App.createChapterDetails({ id: chapterId, mangaId, pages });
    }
    /**
     * Once per session, downloads the first and last page and compares them. If the image server hands
     * back the exact same file for both, the chapter would be saved as one repeated image, so it stops
     * with an error that shows what came back instead of silently saving garbage.
     */
    async verifyImages(pages) {
        if (this.imagesVerified || pages.length < 3)
            return;
        const fetchOne = async (url) => {
            const response = await this.requestManager.schedule(App.createRequest({ url, method: 'GET' }), 1);
            return { status: response.status, body: typeof response.data === 'string' ? response.data : '' };
        };
        let first;
        let last;
        try {
            ;
            [first, last] = await Promise.all([fetchOne(pages[0]), fetchOne(pages[pages.length - 1])]);
        }
        catch {
            return; // a network hiccup is not evidence of anything; check again next chapter
        }
        if (first.status !== 200 || last.status !== 200 || first.body.length === 0)
            return;
        if (first.body === last.body) {
            const short = (u) => ((0, PageUrl_1.decodePageUrl)(u) ?? u).slice(0, 160);
            throw new Error(`MangaFire is returning the identical image (${first.body.length} bytes) for the first and last page of this chapter. ` +
                `Page 1: ${short(pages[0])} | last page: ${short(pages[pages.length - 1])}. ` +
                'Open the MangaFire homepage, tap the cloud icon and solve any captcha, then try again.');
        }
        this.imagesVerified = true;
    }
    // ------------------------------------------------------------------ search
    async getSearchTags() {
        const make = (id, label, prefix, table) => App.createTagSection({
            id,
            label,
            tags: table.map(([name, value]) => App.createTag({ id: `${prefix}${value}`, label: name }))
        });
        return [
            make('genres', 'Genres', T.genre, GENRES),
            make('themes', 'Themes', T.theme, THEMES),
            make('type', 'Type', T.type, TYPES),
            make('status', 'Status', T.status, STATUSES),
            make('rating', 'Content rating (default: Safe + Suggestive)', T.rating, RATINGS),
            make('sort', 'Sort (pick one)', T.sort, SORTS)
        ];
    }
    async getSearchResults(query, metadata) {
        if (metadata?.done)
            return App.createPagedResults({ results: [] });
        const page = metadata?.page ?? 1;
        const included = query.includedTags ?? [];
        const excluded = query.excludedTags ?? [];
        const pick = (list, prefix) => list.filter(t => t.id.startsWith(prefix) && !t.id.startsWith(`${prefix}?`)).map(t => t.id.slice(prefix.length));
        const keyword = (query.title ?? '').trim();
        const params = [];
        if (keyword)
            params.push(['keyword', keyword]);
        params.push(['languages[]', LANG], ['page', String(page)], ['limit', String(PAGE_SIZE)]);
        for (const v of pick(included, T.genre))
            params.push(['genres_in[]', v]);
        for (const v of pick(excluded, T.genre))
            params.push(['genres_ex[]', v]);
        for (const v of pick(included, T.theme))
            params.push(['theme_ids[]', v]);
        for (const v of pick(included, T.type))
            params.push(['types[]', v]);
        for (const v of pick(included, T.status))
            params.push(['statuses[]', v]);
        params.push(['genres_mode', 'and'], ['theme_mode', 'and']);
        const chosenRatings = pick(included, T.rating);
        for (const r of chosenRatings.length > 0 ? chosenRatings : DEFAULT_RATINGS)
            params.push(['content_rating[]', r]);
        const sort = pick(included, T.sort)[0] ?? (keyword ? 'relevance:desc' : 'views_30d:desc');
        const [sortKey, sortDir] = sort.split(':');
        params.push([`order[${sortKey}]`, sortDir]);
        const res = await this.api('/api/titles', params);
        return App.createPagedResults({
            results: compact((res.items ?? []).map(toPartial)),
            metadata: res.meta?.hasNext ? { page: page + 1 } : { done: true }
        });
    }
    // -------------------------------------------------------------- home page
    async list(sort, page) {
        const res = await this.api('/api/titles', this.listParams(sort, page));
        return { results: compact((res.items ?? []).map(toPartial)), hasNext: !!res.meta?.hasNext };
    }
    async getHomePageSections(sectionCallback) {
        const defs = [
            ['week', 'Most Viewed This Week', types_1.HomeSectionType.featured, 'views_7d:desc', false],
            ['latest', 'Latest Updates', types_1.HomeSectionType.singleRowNormal, 'chapter_updated_at:desc', true],
            ['month', 'Most Viewed This Month', types_1.HomeSectionType.singleRowNormal, 'views_30d:desc', true],
            ['new', 'Recently Added', types_1.HomeSectionType.singleRowNormal, 'created_at:desc', true]
        ];
        const sections = defs.map(([id, title, type, , more]) => App.createHomeSection({ id, title, type, containsMoreItems: more }));
        for (const s of sections)
            sectionCallback(s);
        await Promise.all(sections.map(async (section, i) => {
            try {
                section.items = (await this.list(defs[i][3], 1)).results;
                sectionCallback(section);
            }
            catch {
                // one failing section shouldn't blank the whole page
            }
        }));
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        const sorts = {
            latest: 'chapter_updated_at:desc',
            month: 'views_30d:desc',
            new: 'created_at:desc'
        };
        const sort = sorts[homepageSectionId];
        if (!sort || metadata?.done)
            return App.createPagedResults({ results: [] });
        const page = metadata?.page ?? 2;
        const { results, hasNext } = await this.list(sort, page);
        return App.createPagedResults({ results, metadata: hasNext ? { page: page + 1 } : { done: true } });
    }
}
exports.MangaFire = MangaFire;

},{"./PageUrl":63,"./Vrf":64,"@paperback/types":61}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodePageUrl = exports.encodePageUrl = exports.utf8Decode = exports.PAGE_PREFIX = void 0;
const Vrf_1 = require("./Vrf");
/**
 * Placeholder page URLs.
 *
 * If every page of a chapter has the same file name or path (apart from a query string), the
 * reader can treat them as one image and show page 1 over and over. To prevent that, such pages
 * are handed to Paperback as unique placeholder URLs on the site's own domain. The real image
 * URL is encoded inside the placeholder, and the request interceptor swaps it back in right
 * before the image is downloaded. Nothing is stored, so it also works for queued downloads.
 */
exports.PAGE_PREFIX = 'https://mangafire.to/__page/';
const EXTENSION = /\.(jpe?g|png|webp|avif|gif)$/i;
function utf8Decode(bytes) {
    let out = '';
    for (let i = 0; i < bytes.length;) {
        const b0 = bytes[i++];
        let cp;
        if (b0 < 0x80)
            cp = b0;
        else if (b0 < 0xe0)
            cp = ((b0 & 0x1f) << 6) | (bytes[i++] & 0x3f);
        else if (b0 < 0xf0)
            cp = ((b0 & 0x0f) << 12) | ((bytes[i++] & 0x3f) << 6) | (bytes[i++] & 0x3f);
        else
            cp = ((b0 & 0x07) << 18) | ((bytes[i++] & 0x3f) << 12) | ((bytes[i++] & 0x3f) << 6) | (bytes[i++] & 0x3f);
        out += String.fromCodePoint(cp);
    }
    return out;
}
exports.utf8Decode = utf8Decode;
function encodePageUrl(index, realUrl) {
    const clean = realUrl.split('#')[0].split('?')[0];
    const extension = EXTENSION.exec(clean)?.[1]?.toLowerCase() ?? 'jpg';
    return `${exports.PAGE_PREFIX}${index}-${(0, Vrf_1.base64UrlEncode)((0, Vrf_1.utf8Bytes)(realUrl))}.${extension}`;
}
exports.encodePageUrl = encodePageUrl;
/** Returns the real image URL for a placeholder, or undefined if the URL is not a placeholder. */
function decodePageUrl(url) {
    if (!url.startsWith(exports.PAGE_PREFIX))
        return undefined;
    const tail = url.slice(exports.PAGE_PREFIX.length).split('#')[0].split('?')[0];
    const match = /^(\d+)-([A-Za-z0-9_-]+)\.[A-Za-z0-9]+$/.exec(tail);
    if (!match)
        return undefined;
    return utf8Decode((0, Vrf_1.base64Decode)(match[2]));
}
exports.decodePageUrl = decodePageUrl;

},{"./Vrf":64}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signedQuery = exports.sign = exports.utf8Bytes = exports.base64UrlEncode = exports.base64Decode = void 0;
const VrfConstants_1 = require("./VrfConstants");
// Port of VrfSigner.kt (keiyoushi/extensions-source, MangaFire). No platform base64/TextEncoder is
// assumed because the Paperback runtime doesn't guarantee them.
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function base64Decode(input) {
    const clean = input.replace(/-/g, '+').replace(/_/g, '/').replace(/[^A-Za-z0-9+/]/g, '');
    const out = [];
    let bits = 0;
    let acc = 0;
    for (const ch of clean) {
        acc = (acc << 6) | ALPHABET.indexOf(ch);
        bits += 6;
        if (bits >= 8) {
            bits -= 8;
            out.push((acc >> bits) & 0xff);
            acc &= (1 << bits) - 1;
        }
    }
    return out;
}
exports.base64Decode = base64Decode;
/** URL-safe base64 without padding. */
function base64UrlEncode(bytes) {
    let out = '';
    for (let i = 0; i < bytes.length; i += 3) {
        const b0 = bytes[i];
        const b1 = bytes[i + 1];
        const b2 = bytes[i + 2];
        out += ALPHABET[b0 >> 2];
        out += ALPHABET[((b0 & 3) << 4) | ((b1 ?? 0) >> 4)];
        if (b1 !== undefined)
            out += ALPHABET[((b1 & 15) << 2) | ((b2 ?? 0) >> 6)];
        if (b2 !== undefined)
            out += ALPHABET[b2 & 63];
    }
    return out.replace(/\+/g, '-').replace(/\//g, '_');
}
exports.base64UrlEncode = base64UrlEncode;
function utf8Bytes(text) {
    const out = [];
    for (const ch of text) {
        const cp = ch.codePointAt(0);
        if (cp < 0x80)
            out.push(cp);
        else if (cp < 0x800)
            out.push(0xc0 | (cp >> 6), 0x80 | (cp & 63));
        else if (cp < 0x10000)
            out.push(0xe0 | (cp >> 12), 0x80 | ((cp >> 6) & 63), 0x80 | (cp & 63));
        else
            out.push(0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 63), 0x80 | ((cp >> 6) & 63), 0x80 | (cp & 63));
    }
    return out;
}
exports.utf8Bytes = utf8Bytes;
const STAGES = [
    { table: base64Decode(VrfConstants_1.TABLE_1), key: base64Decode(VrfConstants_1.KEY_1), iv: 0x5a },
    { table: base64Decode(VrfConstants_1.TABLE_2), key: base64Decode(VrfConstants_1.KEY_2), iv: 0x35 },
    { table: base64Decode(VrfConstants_1.TABLE_3), key: base64Decode(VrfConstants_1.KEY_3), iv: 0xba }
];
function stage(data, table, key, iv) {
    const out = new Array(data.length);
    let prev = iv;
    for (let i = 0; i < data.length; i++) {
        prev = table[(data[i] ^ key[i % key.length] ^ prev) & 0xff] & 0xff;
        out[i] = prev;
    }
    return out;
}
/** Produces the value of the `vrf` parameter for a path such as "/titles?languages[0]=en&page=1". */
function sign(path) {
    let data = utf8Bytes(path);
    for (const s of STAGES)
        data = stage(data, s.table, s.key, s.iv);
    return base64UrlEncode(data);
}
exports.sign = sign;
/**
 * Builds the signed query for an /api/ request exactly like VrfSigner.interceptor():
 * parameters sorted by key (stable), `key[]` renumbered `key[0]`, `key[1]`, ..., and the
 * signature computed over the path (without "/api") plus the decoded query string.
 */
function signedQuery(apiPath, params) {
    const sorted = params
        .map((p, i) => ({ p, i }))
        .sort((a, b) => (a.p[0] < b.p[0] ? -1 : a.p[0] > b.p[0] ? 1 : a.i - b.i))
        .map(x => x.p);
    let lastKey = '';
    let index = 0;
    const signedParts = sorted.map(([key, value]) => {
        let newKey = key;
        if (key.endsWith('[]')) {
            if (lastKey !== key)
                index = 0;
            lastKey = key;
            newKey = key.split('[]').join(`[${index++}]`);
        }
        return `${newKey}=${value}`;
    });
    const pathToSign = apiPath.replace(/^\/api/, '') + (sorted.length > 0 ? `?${signedParts.join('&')}` : '');
    const query = sorted.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
    query.push(`vrf=${sign(pathToSign)}`);
    return query.join('&');
}
exports.signedQuery = signedQuery;

},{"./VrfConstants":65}],65:[function(require,module,exports){
"use strict";
// Signing constants for MangaFire's `vrf` query parameter.
// Taken verbatim from the maintained keiyoushi/extensions-source MangaFire extension (VrfSigner.kt).
Object.defineProperty(exports, "__esModule", { value: true });
exports.KEY_3 = exports.TABLE_3 = exports.KEY_2 = exports.TABLE_2 = exports.KEY_1 = exports.TABLE_1 = void 0;
exports.TABLE_1 = 'yINlmUNho8VYJT+ibTIP+9ESiULpVEtMOoD6U6lRE0R/xwXo/Xp9NrUgC4cw/Lmo33vUyjUE40kUoEWIr/fxfNNcq2s79ShQ5NhNrFnJ4hXPwOu/SuXzIbuTQKGFvfm08E9jvCfqAtoDqvQq3dVWPQFmJjgvkISBeXY3BgANR+yVnjGbcxZ47d6kLNfZPIayTq3/YGySb1KuVZodWp/WGNAO5pfMcpaK53Hhs0allBszaMaxuouOwdxbwgxIw6YunSsXjI05Yi0j9j4eHKfSXR8Ifo/Od+8iamRfCXTyvm7NGRGYdcQ0ywcK/u6RXhrbcCm4t2eCtrDgQVecJGkQ+A==';
exports.KEY_1 = '0Ec58JOY3uBzJK9m3zqIOpdlF7UFiax9DmA=';
exports.TABLE_2 = 'IUFltCxD3Oc2cwCgkJffthaOg9cgPUb0LgW6H/VtfcF0kc5F25t+aWj6JH9VOhOaY0rAFdUxlDnl5BLNvwEJvQtP5qcw7vdb/K+chnbwnspSHT8mz5lqwz41TezG0hkO06FTjJZhsyNuFLDpD2ZZxQj/QIRcF90zpmQ7Byu483WsQqUE0C342HL+JXngRB6fRzxRyVTaKu83h7UYTJ0QMt6ixFh6S3F8gqkKwrGTL3jHNBsD45UnifK8+RGtishQV2K3rujLKEkiZxpr2dYcudFW4oFsDKhad3CLBvuyTqsCo4B7mL5IKQ1vXo/MOOvq1I1d8ar9X6Ttu5KF4fZgiA==';
exports.KEY_2 = 'AAdjb1iPY8CiDmq9H34tKTBF8a3oDQ==';
exports.TABLE_3 = 'NQHlu1/wVO5EmkwQymF810qqY2xG1k2obcas4Z9mCsPEIFl9pRIjFxbJ7ybMHbBckT5Ton85E0FOeHezbh/mjlEYpmpnlXOS8dgrqeq2KfxImTh1YK9y0PeMNhzA1OQzSY9brYOJq/l2QnE/hwOeZIhPixVSKIUlDb5vLcH6RWKxkIEMuP0bDwIqQ71AJJaEaMJL7A6YtyIwoRT+L5v4aZzodN/0+3nOGsfblFjgxSfPzVDjNFeNl5P26+kEC/8AHgdrpAbt3hHz3HrRN1Y6e+JHgF7ncFWnoF0y3THL1S71WgWGCa6KtSzTCCG58n68nTyj2T3Sshk7utqCtMi/ZQ==';
exports.KEY_3 = 'DELOJgPsVaCcblDtTGMdHzM=';

},{}]},{},[62])(62)
});
