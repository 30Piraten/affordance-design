"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluationAffordances = evaluationAffordances;
const entity_1 = require("./entity");
function evaluationAffordances(agent, object) {
    const agentComp = (0, entity_1.getComponent)(agent, "agent");
    const objectComp = (0, entity_1.getComponent)(object, "object");
    if (!agentComp || !objectComp)
        return [];
    // return Object.keys(objectComp.requiredAbilities).filter((a: string) => agentComp.abilities.has(a as Ability)).map((a: string) => a as Ability);
    return Object.keys(objectComp.requiredAbilities).filter((a) => agentComp.abilities.has(a));
}
