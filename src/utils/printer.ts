import { Entity, getComponent } from "../ecs/entity";
import { AgentComponent } from "../models/agent";
import { ObjectComponent } from "../models/object";
import { evaluationAffordances } from "../ecs/affordanceSystem";

export function describeInteraction(agent: Entity, object: Entity) {
    const agentComp = getComponent<AgentComponent>(agent, "agent");
    const objectComp = getComponent<ObjectComponent>(object, "object"); 

    if (!agentComp || !objectComp) return; 

    const affordances = evaluationAffordances(agent, object); 

    console.log(`\n${agentComp.name} vs ${objectComp.name}`); 
    console.log(`-> Can do: ${affordances.join(", ") || "Nothing"}\n`);
}