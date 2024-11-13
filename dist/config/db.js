"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceGoodCorner = void 0;
const Ad_1 = require("../entities/Ad");
const Category_1 = require("../entities/Category");
const Tag_1 = require("../entities/Tag");
const typeorm_1 = require("typeorm");
exports.dataSourceGoodCorner = new typeorm_1.DataSource({
    database: "good_corner.sqlite",
    type: "sqlite",
    entities: [Ad_1.Ad, Category_1.Category, Tag_1.Tag],
    synchronize: true,
    logging: ["error", "query"]
});
//# sourceMappingURL=db.js.map