import { Ability } from "./abilities";

export interface ObjectComponent {
    name: string; 
    requiredAbilities: Partial<Record<Ability, string>>; 
}