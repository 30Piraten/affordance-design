"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAgent = createAgent;
const entity_1 = require("../ecs/entity");
function createAgent(name, _abilities) {
    const entity = (0, entity_1.createEntity)();
    const component = {
        name, abilities: new Set(_abilities),
    };
    (0, entity_1.addComponent)(entity, "agent", component);
    return entity;
}
