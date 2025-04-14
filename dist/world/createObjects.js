"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createObject = createObject;
const entity_1 = require("../ecs/entity");
function createObject(name, requiredAbilities) {
    const entity = (0, entity_1.createEntity)();
    const component = {
        name, requiredAbilities,
    };
    (0, entity_1.addComponent)(entity, "object", component);
    return entity;
}
