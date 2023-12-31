"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderModule = void 0;
const common_1 = require("@nestjs/common");
const slider_service_1 = require("./slider.service");
const slider_controller_1 = require("./slider.controller");
const admin_module_1 = require("../admin/admin.module");
const typeorm_1 = require("@nestjs/typeorm");
const slider_entity_1 = require("../typeorm/slider.entity");
let SliderModule = exports.SliderModule = class SliderModule {
};
exports.SliderModule = SliderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([slider_entity_1.Slider]),
            admin_module_1.AdminModule
        ],
        controllers: [slider_controller_1.SliderController],
        providers: [slider_service_1.SliderService]
    })
], SliderModule);
//# sourceMappingURL=slider.module.js.map