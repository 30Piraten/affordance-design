"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntity = createEntity;
exports.addComponent = addComponent;
exports.getComponent = getComponent;
function createEntity() {
    return {
        id: crypto.randomUUID(),
        components: new Map(),
    };
}
function addComponent(entity, key, component) {
    entity.components.set(key, component);
}
function getComponent(entity, key) {
    return entity.components.get(key);
}
