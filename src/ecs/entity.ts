export type EntityID = string; 

export interface Entity {
    id: EntityID; 
    components: Map<string, any>; 
}

export function createEntity(): Entity {
    return {
        id: crypto.randomUUID(), 
        components: new Map(), 
    };
}

export function addComponent<T>(entity: Entity, key: string, component: T): void {
    entity.components.set(key, component);
}

export function getComponent<T>(entity: Entity, key: string): T | undefined {
    return entity.components.get(key);
}