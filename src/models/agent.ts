import { Ability } from "./abilities";

export interface AgentComponent {
    name: string; 
    abilities: Set<Ability>;
}