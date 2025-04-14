"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runDemo = runDemo;
const printer_1 = require("../utils/printer");
const createAgents_1 = require("../world/createAgents");
const createObjects_1 = require("../world/createObjects");
// Sample World
function runDemo() {
    const child = (0, createAgents_1.createAgent)("Child", ["pretend"]);
    const adult = (0, createAgents_1.createAgent)("Adult", ["drive"]);
    const robot = (0, createAgents_1.createAgent)("Robot Arm", ["lift", "disassemble"]);
    const car = (0, createObjects_1.createObject)("Car", {
        drive: "Can operate a vehicle",
        lift: "Can lift 1.5 tons",
        repair: "Knows how to fix a car",
        pretend: "Can imagine play scenarios",
    });
    const toy = (0, createObjects_1.createObject)("Toy Plane", {
        pretend: "Imaginative play",
        disassemble: "Screwdriver skill",
    });
    (0, printer_1.describeInteraction)(child, car);
    (0, printer_1.describeInteraction)(adult, car);
    (0, printer_1.describeInteraction)(robot, car);
    (0, printer_1.describeInteraction)(robot, toy);
    (0, printer_1.describeInteraction)(child, robot);
    (0, printer_1.describeInteraction)(adult, robot);
}
