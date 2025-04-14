import { createEntity, addComponent } from "../ecs/entity";
import { Ability } from "../models/abilities";
import { AgentComponent } from "../models/agent";

export function createAgent(name: string, _abilities: Ability[]) {
    const entity = createEntity();
    const component: AgentComponent = {
        name, abilities: new Set(_abilities), 
    }; 

    addComponent(entity, "agent", component);
    return entity; 
}