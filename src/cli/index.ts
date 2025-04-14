import { describeInteraction } from "../utils/printer";
import { createAgent } from "../world/createAgents";
import { createObject } from "../world/createObjects";

// Sample World
export function runDemo() {
    const child = createAgent("Child", ["pretend"]);
    const adult = createAgent("Adult", ["drive"]);
    const robot = createAgent("Robot Arm", ["lift", "disassemble"]);

    const car = createObject("Car", {
        drive: "Can operate a vehicle",
        lift: "Can lift 1.5 tons",
        repair: "Knows how to fix a car",
        pretend: "Can imagine play scenarios", 
    }); 

    const toy = createObject("Toy Plane", {
        pretend: "Imaginative play", 
        disassemble: "Screwdriver skill", 
    }); 

    describeInteraction(child, car);
    describeInteraction(adult, car);
    describeInteraction(robot, car);
    describeInteraction(robot, toy);
    describeInteraction(child, robot); 
    describeInteraction(adult, robot);
}