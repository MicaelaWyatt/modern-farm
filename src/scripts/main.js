console.log("Welcome to the main module")

import {createPlan} from "./plan.js";
import {asparagus, createAsparagus} from "./seeds/asparagus.js"

const yearlyPlan = createPlan();
const asparagusSeed= createAsparagus();
console.log(yearlyPlan)
console.log("Asparagus Seed",asparagusSeed)