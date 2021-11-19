* [node\-red\-contrib\-iammeter](#node-red-contrib-iammeter)
  * [Installation](#installation)
  * [Local Output: Single\-phase electric energy meter (WEM3080)](#local-output-single-phase-electric-energy-meter-wem3080)
  * [Local Output: three\-phase electric energy meter(WEM3080T)](#local-output-three-phase-electric-energy-meterwem3080t)
* [Monitor your solar PV system in Node\-Red](#monitor-your-solar-pv-system-in-node-red)
  * [Effect &amp;&amp; Demo](#effect--demo)
  * [Tutorial](#tutorial)
* [About IAMMETER](#about-iammeter)

# node-red-contrib-iammeter

This is a node introduction for the [IAMMETER](https://www.iammeter.com/)

IAMMETER provides both a single-phase and three-phase energy meter. They are all bi-directional, din rail, base on WiFi.
You can use them to meter the energy consumption, especially in the application of solar PV systems.

[WEM3080: single-phase WiFi energy meter](https://www.iammeter.com/products/single-phase-meter)

[WEM3080T: three-phase WiFi energy meter](https://www.iammeter.com/products/three-phase-meter)


## Installation

Install in Node-RED via the Manage Palette menu.

May also be installed via npm:

`npm install node-red-contrib-iammeter`

## Local Output: Single-phase electric energy meter (WEM3080)


```json
   [234.7,9.99,1068,21.063,20.667,49.99,1]
```




```json
   [234.7,9.99,1068,21.063,20.667,49.99,1]
```
[voltage, current, power,import energy, export energy]

unit: voltage [V], current [A], power [W],import energy [kWh], export energy [kWh]




## Local Output: three-phase electric energy meter(WEM3080T)


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



# Monitor your solar PV system in Node-Red 

You can use the Energy monitor node of IAMMETER to monitor your solar PV system in Node-Red.

## Effect && Demo

Node-RED UI: http://ha.iammeter.com:11880/ui

Node-RED flow: http://ha.iammeter.com:11880/#flow/5fb9966c8a33b771

Node-RED in Homeassistant:  [http://ha.iammeter.com:18123/nodered  ](http://ha.iammeter.com:18123/nodered)

**user/password: iammeter/iammeter**

![iammeter_node-red-solar-pv-system_daily](https://iammeterglobal.oss-ap-southeast-1.aliyuncs.com/miwyf/img/iammeter_node-red-solar-pv-system_daily.png)

## Tutorial

[How to monitor your solar PV system in NodeRed](https://imeter.club/topic/129)



# About IAMMETER

[Monitor your energy consumption in IAMMETER-Cloud](https://www.iammeter.com/applications)

[Integrate IAMMETER energy meter to third-party platforms](https://www.iammeter.com/docs/homeassistant#5-integrate-iammeter-energy-meter-to-third-party-platforms-other-than-home-assistant)

