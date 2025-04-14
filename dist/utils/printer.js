"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeInteraction = describeInteraction;
const entity_1 = require("../ecs/entity");
const affordanceSystem_1 = require("../ecs/affordanceSystem");
function describeInteraction(agent, object) {
    const agentComp = (0, entity_1.getComponent)(agent, "agent");
    const objectComp = (0, entity_1.getComponent)(object, "object");
    if (!agentComp || !objectComp)
        return;
    const affordances = (0, affordanceSystem_1.evaluationAffordances)(agent, object);
    console.log(`\n${agentComp.name} vs ${objectComp.name}`);
    console.log(`-> Can do: ${affordances.join(", ") || "Nothing"}\n`);
}
