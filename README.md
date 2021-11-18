# node-red-contrib-iammeter

This is a simple NodeRed node for the [IAMMETER](https://www.iammeter.com/), a realtime energy monitoring device.


## Installation

Install in Node-RED via the Manage Palette menu.

May also be installed via npm:

`npm install node-red-contrib-iammeter`

## Local-Realtime Output

### Single-phase electric energy meter (WEM3080)


```json
   [234.7,9.99,1068,21.063,20.667,49.99,1]
```
[voltage, current, power,import energy, export energy]

unit: voltage [V], current [A], power [W],import energy [kWh], export energy [kWh]


### Three-phase electric energy meter(WEM3080T)


```json
 [
   [234.7,9.99,1068,21.063,20.667,49.99,1],
   [220,9.99,1100,21.063,20.667,49.99,0.5],
   [220,9.99,1213,21.063,20.667,49.99,0.55],
   [224.9,0,3381,26.329,25.834,49.99,0.55]
 ]
```
 [ voltageA, currentA, powerA,import energyA, export energyA], [ voltageB, currentB, powerB,import energyB, export energyB], [ voltageC, currentC, powerC,import energyC, export energyC]

unit: voltage [V], current [A], power [W],import energy [kWh], export energy [kWh]


## The overview of demo

The effect of IamMeter electricity meter photovoltaic system connected to Node-RED

![iammeter_node-red-solar-pv-system_daily](https://iammeterglobal.oss-ap-southeast-1.aliyuncs.com/miwyf/img/iammeter_node-red-solar-pv-system_daily.png)





