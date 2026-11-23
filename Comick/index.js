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
exports.Comick = exports.ComickInfo = void 0;
const types_1 = require("@paperback/types");
const DOMAIN = 'https://comick.dev';
const API = 'https://api.comick.dev';
const COVERS = 'https://meo.comick.pictures';
const MISSING_COVER = `${COVERS}/none.webp`;
const PAGE_SIZE = 30;
const CHAPTER_PAGE_SIZE = 300;
const LANG = 'en';
// Ratings allowed in browse/search. "erotica" is left out on purpose.
const RATINGS = ['safe', 'suggestive'];
exports.ComickInfo = {
    version: '1.0.0',
    name: 'Comick',
    icon: 'icon.png',
    author: 'CrispyDepression',
    authorWebsite: 'https://github.com/CrispyDepression',
    description: 'Read manga, manhwa and manhua from comick.dev (English chapters).',
    contentRating: types_1.ContentRating.MATURE,
    websiteBaseURL: DOMAIN,
    sourceTags: [{ text: 'Cloudflare', type: types_1.BadgeColor.RED }],
    intents: types_1.SourceIntents.MANGA_CHAPTERS | types_1.SourceIntents.HOMEPAGE_SECTIONS | types_1.SourceIntents.CLOUDFLARE_BYPASS_REQUIRED
};
const STATUS = { '1': 'Ongoing', '2': 'Completed', '3': 'Cancelled', '4': 'Hiatus' };
// ---- helpers ----------------------------------------------------------------
const coverOf = (card) => {
    const key = card.md_covers?.find(c => c.b2key)?.b2key;
    return key ? `${COVERS}/${key}` : MISSING_COVER;
};
const titleOf = (card) => {
    const preferred = card.md_titles?.find(t => t.is_default && t.title)?.title ??
        card.md_titles?.find(t => t.lang === 'en' && t.title)?.title;
    return ((preferred ?? card.title ?? '').trim()) || (card.hid ?? 'Untitled');
};
const subtitleOf = (card) => {
    const parts = [];
    const ch = card.last_chapter;
    if (ch !== null && ch !== undefined && ch !== '' && Number(ch) > 0)
        parts.push(`Ch. ${ch}`);
    const score = Number(card.bayesian_rating);
    if (Number.isFinite(score) && score > 0)
        parts.push(`★ ${score.toFixed(1)}`);
    return parts.length > 0 ? parts.join(' · ') : undefined;
};
const plainText = (markdown) => (markdown ?? '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
const toPartial = (card) => {
    if (!card.hid)
        return undefined;
    return App.createPartialSourceManga({
        mangaId: card.hid,
        title: titleOf(card),
        image: coverOf(card),
        subtitle: subtitleOf(card)
    });
};
const compact = (items) => items.filter((i) => i !== undefined);
// ---- source -----------------------------------------------------------------
class Comick extends types_1.Source {
    constructor() {
        super(...arguments);
        this.requestManager = App.createRequestManager({
            requestsPerSecond: 4,
            requestTimeout: 20000,
            interceptor: {
                interceptRequest: async (request) => {
                    request.headers = {
                        ...(request.headers ?? {}),
                        accept: 'application/json',
                        referer: `${DOMAIN}/`,
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
            url: `${API}/`,
            method: 'GET',
            headers: { 'user-agent': await this.requestManager.getDefaultUserAgent() }
        });
    }
    getMangaShareUrl(mangaId) {
        return `${DOMAIN}/comic/${mangaId}`;
    }
    async json(url) {
        const response = await this.requestManager.schedule(App.createRequest({ url, method: 'GET' }), 1);
        if (response.status === 403 || response.status === 503) {
            throw new Error(`Comick blocked the request (HTTP ${response.status}). Open the source and run the Cloudflare bypass.`);
        }
        if (response.status !== 200) {
            throw new Error(`Comick answered HTTP ${response.status} for ${url}`);
        }
        try {
            return JSON.parse(response.data);
        }
        catch {
            throw new Error(`Comick returned something that is not JSON for ${url}`);
        }
    }
    // ----------------------------------------------------------------- details
    async getMangaDetails(mangaId) {
        const response = await this.json(`${API}/v1.0/comic/${mangaId}/`);
        const comic = response.comic;
        if (!comic)
            throw new Error(`Comick has no comic for id ${mangaId}`);
        const tagsIn = (groups) => {
            const seen = new Set();
            const tags = [];
            for (const link of comic.md_comic_md_genres ?? []) {
                const g = link.md_genres;
                const group = (g?.group ?? '').toLowerCase();
                if (g?.slug && g.name && groups.includes(group) && !seen.has(g.slug)) {
                    seen.add(g.slug);
                    tags.push(App.createTag({ id: g.slug, label: g.name }));
                }
            }
            return tags;
        };
        const sections = [];
        const push = (id, label, tags) => {
            if (tags.length > 0)
                sections.push(App.createTagSection({ id, label, tags }));
        };
        push('genres', 'Genres', tagsIn(['genre']));
        push('themes', 'Themes', tagsIn(['theme']));
        push('format', 'Format', tagsIn(['format']));
        push('content', 'Content', tagsIn(['content']));
        const names = (people) => [...new Set((people ?? []).map(p => (p.name ?? '').trim()).filter(Boolean))].join(', ');
        const score = Number(comic.bayesian_rating);
        const rating = comic.content_rating;
        const info = {};
        if (comic.last_chapter)
            info['Last chapter'] = String(comic.last_chapter);
        if (comic.country)
            info['Origin'] = comic.country.toUpperCase();
        return App.createSourceManga({
            id: mangaId,
            mangaInfo: App.createMangaInfo({
                image: coverOf(comic),
                titles: [titleOf(comic), ...(comic.md_titles ?? []).map(t => (t.title ?? '').trim()).filter(Boolean)]
                    .filter((t, i, all) => all.indexOf(t) === i)
                    .slice(0, 15),
                author: names(response.authors),
                artist: names(response.artists),
                desc: plainText(comic.desc),
                status: STATUS[String(comic.status)] ?? 'Unknown',
                hentai: rating === 'erotica' || rating === 'pornographic',
                rating: Number.isFinite(score) && score > 0 ? score / 10 : undefined,
                tags: sections,
                additionalInfo: info
            })
        });
    }
    // ---------------------------------------------------------------- chapters
    async getChapters(mangaId) {
        const rows = [];
        let page = 1;
        let total = Infinity;
        while (rows.length < total) {
            const query = `lang=${LANG}&limit=${CHAPTER_PAGE_SIZE}&page=${page}`;
            let batch;
            try {
                batch = await this.json(`${API}/comic/${mangaId}/chapters?${query}`);
            }
            catch (error) {
                if (page > 1)
                    throw error;
                // Some deployments expose the same route under the versioned prefix.
                batch = await this.json(`${API}/v1.0/comic/${mangaId}/chapters?${query}`);
            }
            const got = batch.chapters ?? [];
            rows.push(...got);
            total = typeof batch.total === 'number' ? batch.total : rows.length;
            if (got.length === 0)
                break;
            page++;
            if (page > 60)
                break; // hard stop: 18,000 chapters
        }
        const chapters = [];
        rows.forEach((row, index) => {
            if (!row.hid)
                return;
            const number = parseFloat(row.chap ?? '');
            const volume = parseFloat(row.vol ?? '');
            const when = new Date(row.publish_at ?? row.created_at ?? '');
            const group = Array.isArray(row.group_name) ? row.group_name.join(', ') : row.group_name ?? undefined;
            chapters.push(App.createChapter({
                id: row.hid,
                chapNum: Number.isFinite(number) ? number : 0,
                volume: Number.isFinite(volume) ? volume : 0,
                name: row.title ?? undefined,
                group: group || undefined,
                langCode: row.lang ?? LANG,
                time: isNaN(when.getTime()) ? undefined : when,
                sortingIndex: rows.length - index
            }));
        });
        if (chapters.length === 0)
            throw new Error('Comick has no English chapters for this title.');
        return chapters;
    }
    async getChapterDetails(mangaId, chapterId) {
        let images = [];
        try {
            const direct = await this.json(`${API}/chapter/${chapterId}/get_images`);
            if (Array.isArray(direct))
                images = direct;
        }
        catch {
            // fall through to the chapter object below
        }
        if (images.length === 0) {
            const chapter = await this.json(`${API}/chapter/${chapterId}/`);
            images = chapter.chapter?.images ?? [];
        }
        const pages = images
            .map(img => img.url ?? (img.b2key ? `${COVERS}/${img.b2key}` : ''))
            .filter(Boolean);
        if (pages.length === 0)
            throw new Error('Comick returned no pages for this chapter.');
        return App.createChapterDetails({ id: chapterId, mangaId, pages });
    }
    // ------------------------------------------------------------------ search
    async genres() {
        if (!this.genreCache)
            this.genreCache = await this.json(`${API}/genre/`);
        return this.genreCache;
    }
    async getSearchTags() {
        try {
            const all = await this.genres();
            const build = (id, label, groups) => {
                const seen = new Set();
                const tags = [];
                for (const g of all) {
                    const group = (g.group ?? '').toLowerCase();
                    if (g.slug && g.name && groups.includes(group) && !seen.has(g.slug)) {
                        seen.add(g.slug);
                        tags.push(App.createTag({ id: g.slug, label: g.name }));
                    }
                }
                tags.sort((a, b) => a.label.localeCompare(b.label));
                return App.createTagSection({ id, label, tags });
            };
            return [
                build('genres', 'Genres', ['genre']),
                build('themes', 'Themes & Formats', ['theme', 'format']),
                build('content', 'Content', ['content'])
            ].filter(s => s.tags.length > 0);
        }
        catch {
            return [];
        }
    }
    searchUrl(extra, page) {
        const params = [`page=${page}`, `limit=${PAGE_SIZE}`, ...extra];
        for (const r of RATINGS)
            params.push(`content_rating=${r}`);
        return `${API}/v1.0/search/?${params.join('&')}`;
    }
    async getSearchResults(query, metadata) {
        if (metadata?.done)
            return App.createPagedResults({ results: [] });
        const page = metadata?.page ?? 1;
        const extra = [];
        const title = (query.title ?? '').trim();
        if (title)
            extra.push(`q=${encodeURIComponent(title)}`);
        else
            extra.push('sort=follow');
        for (const t of query.includedTags ?? [])
            extra.push(`genres=${encodeURIComponent(t.id)}`);
        for (const t of query.excludedTags ?? [])
            extra.push(`excludes=${encodeURIComponent(t.id)}`);
        const cards = await this.json(this.searchUrl(extra, page));
        if (!Array.isArray(cards))
            throw new Error('Comick search returned no list.');
        const results = compact(cards.map(toPartial));
        return App.createPagedResults({
            results,
            metadata: results.length >= PAGE_SIZE ? { page: page + 1 } : { done: true }
        });
    }
    // -------------------------------------------------------------- home page
    async getHomePageSections(sectionCallback) {
        const trending = App.createHomeSection({ id: 'trending', title: 'Trending This Week', type: types_1.HomeSectionType.featured, containsMoreItems: false });
        const latest = App.createHomeSection({ id: 'latest', title: 'Latest Updates', type: types_1.HomeSectionType.singleRowNormal, containsMoreItems: true });
        const followed = App.createHomeSection({ id: 'followed', title: 'Most Followed', type: types_1.HomeSectionType.singleRowNormal, containsMoreItems: true });
        const rated = App.createHomeSection({ id: 'rated', title: 'Top Rated', type: types_1.HomeSectionType.singleRowNormal, containsMoreItems: true });
        const fresh = App.createHomeSection({ id: 'new', title: 'New Comics', type: types_1.HomeSectionType.singleRowNormal, containsMoreItems: true });
        const all = [trending, latest, followed, rated, fresh];
        for (const s of all)
            sectionCallback(s);
        const allowed = new Set(RATINGS);
        const permitted = (c) => allowed.has(c.content_rating ?? 'safe');
        const tasks = [
            (async () => {
                const top = await this.json(`${API}/top`);
                trending.items = compact((top.trending?.['7'] ?? []).filter(permitted).map(toPartial));
                sectionCallback(trending);
            })(),
            (async () => {
                latest.items = (await this.latestPage(1)).results;
                sectionCallback(latest);
            })(),
            this.fill(followed, 'sort=follow', sectionCallback),
            this.fill(rated, 'sort=rating', sectionCallback),
            this.fill(fresh, 'sort=created_at', sectionCallback)
        ];
        await Promise.allSettled(tasks);
    }
    async fill(section, sort, cb) {
        const cards = await this.json(this.searchUrl([sort], 1));
        section.items = compact(cards.map(toPartial));
        cb(section);
    }
    async latestPage(page) {
        const rows = await this.json(`${API}/chapter/?lang=${LANG}&order=new&page=${page}&limit=${PAGE_SIZE}`);
        if (!Array.isArray(rows))
            throw new Error('Comick returned no latest-chapter list.');
        const seen = new Set();
        const results = [];
        for (const row of rows) {
            const comic = row.md_comics;
            if (!comic?.hid || seen.has(comic.hid) || !RATINGS.includes(comic.content_rating ?? 'safe'))
                continue;
            seen.add(comic.hid);
            const item = toPartial(comic);
            if (item)
                results.push(item);
        }
        return { results, more: rows.length >= PAGE_SIZE };
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        if (metadata?.done)
            return App.createPagedResults({ results: [] });
        const page = metadata?.page ?? 2;
        if (homepageSectionId === 'latest') {
            const { results, more } = await this.latestPage(page);
            return App.createPagedResults({ results, metadata: more ? { page: page + 1 } : { done: true } });
        }
        const sorts = { followed: 'sort=follow', rated: 'sort=rating', new: 'sort=created_at' };
        const sort = sorts[homepageSectionId];
        if (!sort)
            return App.createPagedResults({ results: [] });
        const cards = await this.json(this.searchUrl([sort], page));
        const results = compact(cards.map(toPartial));
        return App.createPagedResults({
            results,
            metadata: results.length >= PAGE_SIZE ? { page: page + 1 } : { done: true }
        });
    }
}
exports.Comick = Comick;

},{"@paperback/types":61}]},{},[62])(62)
});
