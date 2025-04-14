import { createEntity, addComponent } from "../ecs/entity";
import { ObjectComponent } from "../models/object";

export function createObject(name: string, requiredAbilities: Record<string, string>){
    const entity =  createEntity(); 
    const component: ObjectComponent = {
        name, requiredAbilities, 
    }; 
    addComponent(entity, "object", component); 
    return entity; 
}