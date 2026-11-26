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
// Comick's site and its mirrors share one backend. They are tried in this order and the
// first one that answers is remembered for the rest of the session.
const BASES = ['https://comick.live', 'https://comick.art', 'https://comick.dev'];
const LANG = 'en';
const MAX_CHAPTER_PAGES = 60;
exports.ComickInfo = {
    version: '1.1.0',
    name: 'Comick',
    icon: 'icon.png',
    author: 'CrispyDepression',
    authorWebsite: 'https://github.com/CrispyDepression',
    description: 'Read manga, manhwa and manhua from Comick (English chapters). Uses comick.live / comick.art / comick.dev.',
    contentRating: types_1.ContentRating.MATURE,
    websiteBaseURL: BASES[0],
    sourceTags: [{ text: 'Cloudflare', type: types_1.BadgeColor.RED }],
    intents: types_1.SourceIntents.MANGA_CHAPTERS | types_1.SourceIntents.HOMEPAGE_SECTIONS | types_1.SourceIntents.CLOUDFLARE_BYPASS_REQUIRED
};
// Tag ids are "<kind>:<value>" so one flat includedTags list can be routed back.
const GENRE = 'g:';
const TAG = 't:';
const SORT = 'o:';
const SORTS = [
    ['Popular', 'user_follow_count'],
    ['Latest', 'created_at'],
    ['Highest Rating', 'rating'],
    ['Last Uploaded', 'uploaded']
];
const slugify = (name) => name.trim().toLowerCase().replace(/[ /]+/g, '-');
const toPartial = (c) => {
    if (!c.slug)
        return undefined;
    return App.createPartialSourceManga({
        mangaId: c.slug,
        title: (c.title ?? c.slug).trim(),
        image: c.default_thumbnail ?? c.thumbnail ?? ''
    });
};
const compact = (items) => items.filter((i) => i !== undefined);
const htmlToText = (html) => (html ?? '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
// ---- source -----------------------------------------------------------------
class Comick extends types_1.Source {
    constructor() {
        super(...arguments);
        this.base = BASES[0];
        this.requestManager = App.createRequestManager({
            requestsPerSecond: 3,
            requestTimeout: 20000,
            interceptor: {
                interceptRequest: async (request) => {
                    request.headers = {
                        referer: `${this.base}/`,
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
            url: `${this.base}/`,
            method: 'GET',
            headers: { 'user-agent': await this.requestManager.getDefaultUserAgent() }
        });
    }
    getMangaShareUrl(mangaId) {
        return `${this.base}/comic/${mangaId}`;
    }
    // ---------------------------------------------------------------- network
    /** GET a path, trying each mirror until one answers. Returns the response body. */
    async get(path, kind) {
        const accept = kind === 'json'
            ? 'application/json, text/plain, */*'
            : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8';
        let challenged = false;
        let lastProblem = 'no mirror answered';
        for (const base of [this.base, ...BASES.filter(b => b !== this.base)]) {
            let response;
            try {
                response = await this.requestManager.schedule(App.createRequest({ url: `${base}${path}`, method: 'GET', headers: { accept, referer: `${base}/` } }), 1);
            }
            catch (error) {
                lastProblem = `${base}: ${error?.message ?? error}`;
                continue;
            }
            const body = typeof response.data === 'string' ? response.data : '';
            if (response.status === 403 || response.status === 503 || /<title>\s*Just a moment/i.test(body.slice(0, 2000))) {
                challenged = true;
                lastProblem = `${base}: blocked (HTTP ${response.status})`;
                continue;
            }
            if (response.status !== 200) {
                lastProblem = `${base}: HTTP ${response.status}`;
                continue;
            }
            if (kind === 'json' && /^\s*</.test(body)) {
                lastProblem = `${base}: returned a web page instead of JSON`;
                continue;
            }
            this.base = base;
            return body;
        }
        if (challenged) {
            // This exact prefix makes Paperback offer the Cloudflare bypass (cloud icon).
            throw new Error('CLOUDFLARE BYPASS ERROR:\nPlease go to the homepage of Comick and press the cloud icon.');
        }
        throw new Error(`Comick request failed for ${path} (${lastProblem})`);
    }
    async json(path) {
        const body = await this.get(path, 'json');
        try {
            return JSON.parse(body);
        }
        catch {
            throw new Error(`Comick returned invalid JSON for ${path}`);
        }
    }
    /** Pull the JSON that the site embeds in a <script id="..."> tag. */
    embedded(html, id) {
        const $ = this.cheerio.load(html);
        const el = $(`#${id}`).first();
        const raw = (el.html() ?? el.text() ?? '').trim();
        if (!raw)
            throw new Error(`Comick page has no #${id} data (the site layout may have changed)`);
        try {
            return JSON.parse(raw);
        }
        catch {
            throw new Error(`Comick #${id} data was not valid JSON`);
        }
    }
    // ----------------------------------------------------------------- details
    async getMangaDetails(mangaId) {
        const html = await this.get(`/comic/${mangaId}`, 'html');
        const data = this.embedded(html, 'comic-data');
        const names = (people) => [...new Set((people ?? []).map(p => (p.name ?? '').trim()).filter(Boolean))].join(', ');
        const genreTags = [];
        const seen = new Set();
        for (const link of data.md_comic_md_genres ?? []) {
            const g = link.md_genres;
            const label = (g?.name ?? '').trim();
            if (!label)
                continue;
            const slug = g?.slug ?? slugify(label);
            if (seen.has(slug))
                continue;
            seen.add(slug);
            genreTags.push(App.createTag({ id: `${GENRE}${slug}`, label }));
        }
        const rawTitles = data.md_titles;
        const altTitles = (Array.isArray(rawTitles) ? rawTitles : Object.values(rawTitles ?? {}))
            .map(t => (t.title ?? '').trim())
            .filter(Boolean);
        const titles = [(data.title ?? mangaId).trim(), ...altTitles].filter((t, i, all) => all.indexOf(t) === i).slice(0, 15);
        const status = data.status === 1 ? 'Ongoing'
            : data.status === 2 ? (data.translation_completed ? 'Completed' : 'Publishing finished')
                : data.status === 3 ? 'Cancelled'
                    : data.status === 4 ? 'Hiatus'
                        : 'Unknown';
        const origin = { jp: 'Manga', cn: 'Manhua', ko: 'Manhwa' }[data.country ?? ''] ?? undefined;
        const sections = [];
        if (genreTags.length > 0)
            sections.push(App.createTagSection({ id: 'genres', label: 'Genres', tags: genreTags }));
        if (origin)
            sections.push(App.createTagSection({ id: 'type', label: 'Type', tags: [App.createTag({ id: `type:${origin}`, label: origin })] }));
        return App.createSourceManga({
            id: mangaId,
            mangaInfo: App.createMangaInfo({
                image: data.default_thumbnail ?? '',
                titles,
                author: names(data.authors),
                artist: names(data.artists),
                desc: htmlToText(data.desc),
                status,
                hentai: data.content_rating === 'erotica',
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
            const res = await this.json(`/api/comics/${mangaId}/chapter-list?lang=${LANG}&page=${page}`);
            rows.push(...(res.data ?? []));
            lastPage = res.pagination?.last_page ?? 1;
            page++;
        } while (page <= lastPage && page <= MAX_CHAPTER_PAGES);
        const chapters = [];
        rows.forEach((row, index) => {
            if (!row.hid)
                return;
            const lang = row.lang ?? LANG;
            if (lang !== LANG)
                return;
            const number = parseFloat(row.chap ?? '');
            const volume = parseFloat(row.vol ?? '');
            const when = new Date(row.created_at ?? '');
            const group = Array.isArray(row.group_name) ? row.group_name.join(', ') : row.group_name ?? undefined;
            chapters.push(App.createChapter({
                // Everything getChapterDetails needs to rebuild the chapter's page URL.
                id: `${row.hid}-chapter-${row.chap ?? ''}-${lang}`,
                chapNum: Number.isFinite(number) ? number : 0,
                volume: Number.isFinite(volume) ? volume : 0,
                name: row.title ?? undefined,
                group: group || undefined,
                langCode: lang,
                time: isNaN(when.getTime()) ? undefined : when,
                sortingIndex: rows.length - index
            }));
        });
        if (chapters.length === 0)
            throw new Error('Comick has no English chapters for this title.');
        return chapters;
    }
    async getChapterDetails(mangaId, chapterId) {
        const html = await this.get(`/comic/${mangaId}/${chapterId}`, 'html');
        const data = this.embedded(html, 'sv-data');
        const pages = (data.chapter?.images ?? []).map(i => i.url ?? '').filter(Boolean);
        if (pages.length === 0)
            throw new Error('Comick returned no pages for this chapter.');
        return App.createChapterDetails({ id: chapterId, mangaId, pages });
    }
    // ------------------------------------------------------------------ search
    async metadata() {
        if (!this.metadataCache)
            this.metadataCache = await this.json('/api/metadata');
        return this.metadataCache;
    }
    async getSearchTags() {
        const sections = [
            App.createTagSection({
                id: 'sort',
                label: 'Sort (pick one)',
                tags: SORTS.map(([label, value]) => App.createTag({ id: `${SORT}${value}`, label }))
            })
        ];
        try {
            const meta = await this.metadata();
            const build = (id, label, prefix, items) => {
                const tags = (items ?? [])
                    .filter(i => i.slug && i.name)
                    .map(i => App.createTag({ id: `${prefix}${i.slug}`, label: i.name }))
                    .sort((a, b) => a.label.localeCompare(b.label));
                if (tags.length > 0)
                    sections.push(App.createTagSection({ id, label, tags }));
            };
            build('genres', 'Genres', GENRE, meta.genres);
            build('tags', 'Tags', TAG, meta.tags);
        }
        catch {
            // sorting still works without the metadata
        }
        return sections;
    }
    async getSearchResults(query, metadata) {
        if (metadata?.done)
            return App.createPagedResults({ results: [] });
        const title = (query.title ?? '').trim();
        if (title && title.length < 3)
            throw new Error('Comick needs at least 3 characters to search.');
        const included = query.includedTags ?? [];
        const excluded = query.excludedTags ?? [];
        const pick = (list, prefix) => list.filter(t => t.id.startsWith(prefix)).map(t => t.id.slice(prefix.length));
        const params = [
            `order_by=${encodeURIComponent(pick(included, SORT)[0] ?? 'user_follow_count')}`,
            'order_direction=desc'
        ];
        for (const v of pick(included, GENRE))
            params.push(`genres=${encodeURIComponent(v)}`);
        for (const v of pick(excluded, GENRE))
            params.push(`excludes=${encodeURIComponent(v)}`);
        for (const v of pick(included, TAG))
            params.push(`tags=${encodeURIComponent(v)}`);
        for (const v of pick(excluded, TAG))
            params.push(`excluded_tags=${encodeURIComponent(v)}`);
        params.push('showAll=false', 'exclude_mylist=false');
        if (title)
            params.push(`q=${encodeURIComponent(title)}`);
        params.push('type=comic');
        if (metadata?.cursor)
            params.push(`cursor=${encodeURIComponent(metadata.cursor)}`);
        const res = await this.json(`/api/search?${params.join('&')}`);
        return App.createPagedResults({
            results: compact((res.data ?? []).map(toPartial)),
            metadata: res.next_cursor ? { cursor: res.next_cursor } : { done: true }
        });
    }
    // -------------------------------------------------------------- home page
    async top(days, type) {
        const res = await this.json(`/api/comics/top?day=${days}&type=${type}`);
        return compact((res.data ?? []).map(toPartial));
    }
    async getHomePageSections(sectionCallback) {
        const week = App.createHomeSection({ id: 'week', title: 'Top This Week', type: types_1.HomeSectionType.featured, containsMoreItems: false });
        const latest = App.createHomeSection({ id: 'latest', title: 'Latest Updates', type: types_1.HomeSectionType.singleRowNormal, containsMoreItems: true });
        const month = App.createHomeSection({ id: 'month', title: 'Top This Month', type: types_1.HomeSectionType.singleRowNormal, containsMoreItems: false });
        const fresh = App.createHomeSection({ id: 'new', title: 'Hot New Comics', type: types_1.HomeSectionType.singleRowNormal, containsMoreItems: false });
        for (const s of [week, latest, month, fresh])
            sectionCallback(s);
        const run = async (section, load) => {
            section.items = await load();
            sectionCallback(section);
        };
        await Promise.all([
            run(week, () => this.top(7, 'follow')),
            run(latest, async () => (await this.latest(1)).results),
            run(month, () => this.top(30, 'follow')),
            run(fresh, () => this.top(7, 'most_follow_new'))
        ].map(p => p.catch(() => undefined)));
    }
    async latest(page, cursor) {
        let path = `/api/chapters/latest?order=new&page=${page}`;
        if (cursor)
            path += `&cursor=${encodeURIComponent(cursor)}`;
        const res = await this.json(path);
        // Several chapters can belong to the same comic.
        const seen = new Set();
        const results = compact((res.data ?? []).map(toPartial)).filter(r => !seen.has(r.mangaId) && !!seen.add(r.mangaId));
        return { results, cursor: res.next_cursor ?? undefined };
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        if (homepageSectionId !== 'latest' || metadata?.done)
            return App.createPagedResults({ results: [] });
        const page = metadata?.page ?? 2;
        const { results, cursor } = await this.latest(page, metadata?.cursor);
        return App.createPagedResults({
            results,
            metadata: cursor ? { page: page + 1, cursor } : { done: true }
        });
    }
}
exports.Comick = Comick;

},{"@paperback/types":61}]},{},[62])(62)
});
