import { Ability } from "../models/abilities";
import { AgentComponent } from "../models/agent";
import { ObjectComponent } from "../models/object";
import { Entity, getComponent } from "./entity";

export function evaluationAffordances(agent: Entity, object: Entity): Ability[] {
    const agentComp = getComponent<AgentComponent>(agent, "agent");
    const objectComp = getComponent<ObjectComponent>(object, "object");
    
    if (!agentComp || !objectComp) return []; 

    // return Object.keys(objectComp.requiredAbilities).filter((a: string) => agentComp.abilities.has(a as Ability)).map((a: string) => a as Ability);

    return (Object.keys(objectComp.requiredAbilities) as Ability[]).filter((a) => agentComp.abilities.has(a));
}