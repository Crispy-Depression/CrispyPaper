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
exports.WeebCentral = exports.WeebCentralInfo = void 0;
const types_1 = require("@paperback/types");
const DOMAIN = 'https://weebcentral.com';
const SEARCH_PAGE_SIZE = 32;
exports.WeebCentralInfo = {
    version: '1.0.0',
    name: 'WeebCentral',
    icon: 'icon.png',
    author: 'CrispyDepression',
    authorWebsite: 'https://github.com/CrispyDepression',
    description: 'Extension that pulls content from weebcentral.com. Logic ported from the Inkdex 0.9 extension.',
    contentRating: types_1.ContentRating.MATURE,
    websiteBaseURL: DOMAIN,
    sourceTags: [{ text: 'Cloudflare', type: types_1.BadgeColor.RED }],
    intents: types_1.SourceIntents.MANGA_CHAPTERS | types_1.SourceIntents.HOMEPAGE_SECTIONS | types_1.SourceIntents.CLOUDFLARE_BYPASS_REQUIRED
};
// Tag ids are "<section>:<value>" so a flat includedTags list can be routed back to the right filter.
const TAG_PREFIX = 'tag:';
const STATUS_PREFIX = 'status:';
const TYPE_PREFIX = 'type:';
const ORDER_PREFIX = 'order:';
const SORTS = ['Best Match', 'Alphabet', 'Popularity', 'Subscribers', 'Recently Added', 'Latest Updates'];
const underscore = (value) => value.replace(/ /g, '_');
const idFromHref = (href) => {
    // https://weebcentral.com/series/<ULID>/<slug>  ->  <ULID>
    return href?.replace(/\/$/, '').split('/').slice(-2)[0] ?? '';
};
const seriesIdFromHref = (href) => {
    return href?.split('/series/')[1]?.split('/')[0] ?? '';
};
class WeebCentral extends types_1.Source {
    constructor() {
        super(...arguments);
        this.requestManager = App.createRequestManager({
            requestsPerSecond: 3,
            requestTimeout: 20000,
            interceptor: {
                interceptRequest: async (request) => {
                    request.headers = {
                        ...(request.headers ?? {}),
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
            url: DOMAIN,
            method: 'GET',
            headers: { 'user-agent': await this.requestManager.getDefaultUserAgent() }
        });
    }
    getMangaShareUrl(mangaId) {
        return `${DOMAIN}/series/${mangaId}`;
    }
    // ---------------------------------------------------------------- fetching
    async fetchHtml(url) {
        const response = await this.requestManager.schedule(App.createRequest({ url, method: 'GET' }), 1);
        if (response.status === 403 || response.status === 503) {
            throw new Error(`WeebCentral blocked the request (HTTP ${response.status}). Open the source and run the Cloudflare bypass.`);
        }
        if (response.status >= 400) {
            throw new Error(`WeebCentral answered HTTP ${response.status} for ${url}`);
        }
        return this.cheerio.load(response.data);
    }
    // ----------------------------------------------------------------- details
    async getMangaDetails(mangaId) {
        const $ = await this.fetchHtml(`${DOMAIN}/series/${mangaId}`);
        const title = $('h1').first().text().trim();
        const image = $('picture > img').attr('src') ?? '';
        const desc = this.decode($('.whitespace-pre-wrap').text().trim());
        const authors = [];
        for (const span of $('strong:contains("Author")').siblings('span').toArray()) {
            const name = $('a', span).text().trim();
            if (name)
                authors.push(name);
        }
        const rawStatus = $('strong:contains("Status")').next().text().trim();
        let status = 'Unknown';
        switch (rawStatus) {
            case 'Ongoing':
                status = 'Ongoing';
                break;
            case 'Complete':
                status = 'Completed';
                break;
            case 'Canceled':
                status = 'Dropped';
                break;
            case 'Hiatus':
                status = 'Hiatus';
                break;
        }
        const tags = [];
        for (const el of $('a', $('strong:contains("Tags(s)")').siblings()).toArray()) {
            const label = $(el).text().trim();
            if (label)
                tags.push(App.createTag({ id: `${TAG_PREFIX}${underscore(label)}`, label }));
        }
        const adult = $('strong:contains("Adult Content")').next().text().trim() === 'Yes';
        return App.createSourceManga({
            id: mangaId,
            mangaInfo: App.createMangaInfo({
                image,
                titles: [title],
                author: authors.join(', '),
                artist: authors.join(', '),
                desc,
                status,
                hentai: adult,
                tags: tags.length > 0 ? [App.createTagSection({ id: 'genres', label: 'Genres', tags })] : []
            })
        });
    }
    // ---------------------------------------------------------------- chapters
    async getChapters(mangaId) {
        const $ = await this.fetchHtml(`${DOMAIN}/series/${mangaId}/full-chapter-list`);
        const numberPattern = /(\d+\.\d+|\d+)/g;
        const rows = $('a.flex.items-center').toArray();
        const chapters = [];
        rows.forEach((row, index) => {
            const id = $(row).attr('href')?.replace(/\/$/, '').split('/').pop() ?? '';
            if (!id)
                return;
            const published = new Date($('time.opacity-50', row).attr('datetime') ?? '');
            const label = $('span.grow.flex.gap-2 span', row).first().text().trim();
            let chapNum = 0;
            const matches = label.match(numberPattern);
            const last = matches?.[matches.length - 1];
            if (last)
                chapNum = parseFloat(last);
            const official = $('img', row).attr('src') === '/static/images/chapter-badge-official.svg';
            chapters.push(App.createChapter({
                id,
                name: label,
                chapNum,
                volume: 0,
                group: official ? 'Official' : undefined,
                langCode: '🇬🇧',
                time: isNaN(published.getTime()) ? undefined : published,
                // The site lists newest first; give the newest the highest index.
                sortingIndex: rows.length - index
            }));
        });
        if (chapters.length === 0)
            throw new Error(`Couldn't find any chapters for mangaId: ${mangaId}`);
        return chapters;
    }
    async getChapterDetails(mangaId, chapterId) {
        const $ = await this.fetchHtml(`${DOMAIN}/chapters/${chapterId}/images?reading_style=long_strip`);
        const pages = [];
        for (const img of $('img', 'section.cursor-pointer').toArray()) {
            const src = $(img).attr('src') || $(img).attr('data-src') || '';
            if (src)
                pages.push(src);
        }
        if (pages.length === 0)
            throw new Error('No pages found for this chapter.');
        return App.createChapterDetails({ id: chapterId, mangaId, pages });
    }
    // ------------------------------------------------------------------ search
    async loadTags() {
        if (this.tagCache)
            return this.tagCache;
        const $ = await this.fetchHtml(`${DOMAIN}/search`);
        const section = (id, label, heading, prefix) => {
            const tags = [];
            for (const child of $(`div:contains("${heading}").collapse-title`).next().children().toArray()) {
                const text = $('span', child).first().text().trim();
                const value = $('input', child).last().attr('value') ?? '';
                if (text && value)
                    tags.push(App.createTag({ id: `${prefix}${underscore(value)}`, label: text }));
            }
            return App.createTagSection({ id, label, tags });
        };
        this.tagCache = [
            section('genres', 'Genres', 'Tags', TAG_PREFIX),
            section('status', 'Series Status', 'Series Status', STATUS_PREFIX),
            section('type', 'Series Type', 'Series Type', TYPE_PREFIX),
            App.createTagSection({
                id: 'order',
                label: 'Sort (pick one)',
                tags: SORTS.map(s => App.createTag({ id: `${ORDER_PREFIX}${s}`, label: s }))
            })
        ].filter(s => s.tags.length > 0);
        return this.tagCache;
    }
    async getSearchTags() {
        try {
            return await this.loadTags();
        }
        catch {
            return [];
        }
    }
    async getSearchResults(query, metadata) {
        const offset = metadata?.offset ?? 0;
        const included = query.includedTags ?? [];
        const pick = (prefix) => included.filter(t => t.id.startsWith(prefix)).map(t => t.id.slice(prefix.length));
        const sort = pick(ORDER_PREFIX)[0] ?? 'Best Match';
        const params = [
            `sort=${encodeURIComponent(sort)}`,
            `display_mode=${encodeURIComponent('Full Display')}`,
            `limit=${SEARCH_PAGE_SIZE}`,
            `offset=${offset}`
        ];
        if (query.title)
            params.push(`text=${encodeURIComponent(query.title)}`);
        for (const v of pick(TAG_PREFIX))
            params.push(`included_tag=${encodeURIComponent(v)}`);
        for (const v of pick(STATUS_PREFIX))
            params.push(`included_status=${encodeURIComponent(v)}`);
        for (const v of pick(TYPE_PREFIX))
            params.push(`included_type=${encodeURIComponent(v)}`);
        params.push('order=Ascending');
        const $ = await this.fetchHtml(`${DOMAIN}/search/data?${params.join('&')}`);
        const results = [];
        for (const article of $('article.flex.gap-4').toArray()) {
            const id = seriesIdFromHref($('a', article).attr('href'));
            if (!id)
                continue;
            results.push(App.createPartialSourceManga({
                mangaId: id,
                title: this.decode($('a.link.link-hover', article).first().text().trim()),
                image: $('img', article).attr('src') ?? $('img', article).attr('data-src') ?? ''
            }));
        }
        const hasMore = $('span:contains("View More Results...")').toArray().length > 0;
        return App.createPagedResults({
            results,
            metadata: hasMore ? { offset: offset + SEARCH_PAGE_SIZE } : undefined
        });
    }
    // -------------------------------------------------------------- home page
    async getHomePageSections(sectionCallback) {
        const sections = {
            recommended: App.createHomeSection({ id: 'recommended', title: 'Recommended', type: types_1.HomeSectionType.featured, containsMoreItems: false }),
            recent: App.createHomeSection({ id: 'recent', title: 'Recently Updated', type: types_1.HomeSectionType.singleRowNormal, containsMoreItems: true }),
            hot: App.createHomeSection({ id: 'hot', title: 'Hot Updates', type: types_1.HomeSectionType.singleRowNormal, containsMoreItems: false })
        };
        for (const s of Object.values(sections))
            sectionCallback(s);
        const $ = await this.fetchHtml(DOMAIN);
        sections.recommended.items = this.parseRecommended($);
        sectionCallback(sections.recommended);
        sections.recent.items = this.parseRecent($, 'section.bg-base-200.rounded-sm article');
        sectionCallback(sections.recent);
        sections.hot.items = this.parseHot($);
        sectionCallback(sections.hot);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        if (homepageSectionId !== 'recent')
            return App.createPagedResults({ results: [] });
        const page = metadata?.page ?? 2;
        const $ = await this.fetchHtml(`${DOMAIN}/latest-updates/${page}`);
        const results = this.parseRecent($, 'article');
        const hasMore = $('span:contains("View More...")').toArray().length > 0;
        return App.createPagedResults({ results, metadata: hasMore ? { page: page + 1 } : undefined });
    }
    parseRecommended($) {
        const items = [];
        for (const slide of $('.glide__slide:not(.glide__slide--clone)').toArray()) {
            const id = idFromHref($('a', slide).attr('href'));
            if (!id)
                continue;
            items.push(App.createPartialSourceManga({
                mangaId: id,
                title: this.decode($('.text-white', slide).text().trim()),
                image: $('source', slide).first().attr('srcset') ?? $('img', slide).attr('src') ?? ''
            }));
        }
        return items;
    }
    parseRecent($, selector) {
        const items = [];
        for (const article of $(selector).toArray()) {
            const id = idFromHref($('a.aspect-square', article).attr('href'));
            if (!id)
                continue;
            items.push(App.createPartialSourceManga({
                mangaId: id,
                title: this.decode($('div.font-semibold', article).text().trim()),
                image: $('a img', article).attr('src') ?? $('a img', article).attr('data-src') ?? '',
                subtitle: this.decode($('span', article).last().text().trim())
            }));
        }
        return items;
    }
    parseHot($) {
        const items = [];
        for (const article of $('article.flex.gap-4', 'section.bg-base-200.max-w-7xl').toArray()) {
            const id = idFromHref($('a', article).first().attr('href'));
            if (!id)
                continue;
            items.push(App.createPartialSourceManga({
                mangaId: id,
                title: this.decode($('div.font-semibold', article).first().text().trim()),
                image: $('source', article).first().attr('srcset') ?? '',
                subtitle: this.decode($('span', article).last().text().trim())
            }));
        }
        return items;
    }
    decode(text) {
        return text
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#0?39;/g, "'");
    }
}
exports.WeebCentral = WeebCentral;

},{"@paperback/types":61}]},{},[62])(62)
});
