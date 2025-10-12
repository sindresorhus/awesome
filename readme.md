# Awesome Edge Computing [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Edge computing is a distributed computing paradigm that brings computation and storage closer to the location where it is needed, to improve response times and save bandwidth.

## Contents

- [Frameworks](#frameworks)
- [Platforms](#platforms)
- [Simulators](#simulators)
- [Tools](#tools)
- [Resources](#resources)

## Frameworks

Frameworks for developing and deploying edge computing applications.

- [KubeEdge](https://github.com/kubeedge/kubeedge) - Cloud-native edge computing framework for extending native containerized application orchestration capabilities to hosts at the network edge.
- [OpenFaaS](https://github.com/openfaas/faas) - Serverless framework for building functions on edge devices and containers.
- [EdgeX Foundry](https://github.com/edgexfoundry/edgex-foundry) - Open-source edge computing platform hosted by the Linux Foundation for industrial IoT.
- [ONNX Runtime](https://github.com/microsoft/onnxruntime) - Cross-platform machine learning accelerator for edge inference with support for multiple runtimes.

## Platforms

Production-ready platforms for edge deployment.

- [Azure IoT Edge](https://azure.microsoft.com/en-us/products/iot-edge/) - Microsoft platform for running cloud analytics and custom logic directly on IoT devices.
- [AWS IoT Greengrass](https://aws.amazon.com/greengrass/) - AWS service for extending AWS capabilities to edge devices for local processing.
- [Google Distributed Cloud Edge](https://cloud.google.com/distributed-cloud/edge) - Google's edge platform for running Kubernetes clusters at the edge.
- [NVIDIA Jetson](https://developer.nvidia.com/embedded/jetson-developer-kits) - Hardware-software platform for edge AI with GPU acceleration.
- [ClearBlade](https://clearblade.com/) - Enterprise IoT platform for secure edge computing and data processing.
- [Alef Private Edge Platform](https://alefedge.com/) - Carrier-grade edge platform for 5G and multi-cloud environments.

## Simulators

Tools for simulating edge computing environments.

- [Artery](http://artery.v2x-research.eu/) - Enables V2X simulations based on ETSI ITS-G5 protocols like GeoNetworking and BTP.
- [CausalSim](https://github.com/CausalSim/Unbiased-Trace-Driven-Simulation) - Causal framework for unbiased trace-driven simulation of interventions in edge systems.
- [CloudSim](https://github.com/Cloudslab/cloudsim) - Generalized simulation framework for modeling cloud and edge infrastructures.
- [CloudSim Express](https://github.com/Cloudslab/cloudsim-express) - Script-based extension of CloudSim for simplified scenario definition.
- [CloudSim Plus](https://github.com/cloudsimplus/cloudsimplus) - Modern Java-based simulator for cloud and edge computing with full documentation.
- [CloudSim Plus Automation](https://github.com/manoelcampos/cloudsimplus-automation) - Command-line tool for automating CloudSim Plus scenarios via YAML.
- [CloudSim+ - Py4j gateway](https://github.com/pkoperek/cloudsimplus-gateway) - Python gateway for integrating CloudSim Plus with Python ecosystems.
- [CloudSimSDN](https://github.com/Cloudslab/cloudsimsdn) - SDN extension of CloudSim for simulating software-defined networks in edge data centers.
- [CloudSimPy](https://github.com/FengcunLi/CloudSimPy) - Python-based simulator for data-centric task scheduling in edge environments.
- [CFN](https://github.com/spirosmastorakis/CFN/) - Computing First Networking framework based on Named Data Networking for edge simulations.
- [Cooja](https://anrg.usc.edu/contiki/index.php/Cooja_Simulator) - Network simulator for wireless sensor networks and edge IoT scenarios.
- [CORE](https://github.com/coreemu/core) - Common Open Research Emulator for emulating edge networks on single or multiple machines.
- [DFaaS](https://github.com/UNIMIBInside/dfaas) - Simulator for decentralized Function-as-a-Service in federated edge ecosystems.
- [EasiEI](https://gitlab.com/Mirrola/ns-3-dev) - NS-3 extension for simulating computing, communication, and storage in edge scenarios.
- [ECHOES](https://github.com/TadavomnisT/ECHOES) - Edge and Cloud Hybrid Optimization Environment Simulator for task offloading studies.
- [ECSNeT++](https://github.com/sedgecloud/ECSNeTpp) - OMNeT++-based toolkit for simulating distributed stream processing on edge-cloud.
- [EdgeAISim](https://github.com/MuhammedGolec/EdgeAISim) - Python toolkit extending EdgeSimPy for AI model simulation in edge environments.
- [EdgeCloudSim](https://github.com/CagataySonmez/EdgeCloudSim) - Environment for performance evaluation of edge computing systems.
- [EdgeSim](https://github.com/XiaofeiTJU/SimEdgeIntel) - Open-source simulator for edge computing and caching with content, base station, and user models.
- [EdgeSimPy](https://github.com/EdgeSimPy/EdgeSimPy) - Python simulator for containerized edge applications with flexible input formats.
- [Emu5GNet](https://github.com/tsylla/5grail-emu5gnet) - Emulation environment for 5G networks supporting edge data processing.
- [EmuEdge](https://github.com/emuedge/emuedge) - Scalable emulator for real-world edge networks using Xen/Linux.
- [EmuFog](https://github.com/emufog/emufog) - Tool for emulating fog networks with Docker-based applications.
- [EPCSAC](https://github.com/TNanukem/EPCSAC) - Extensible platform for comparing cloud and edge scheduling algorithms.
- [FAAP-Simulator](https://github.com/MSuter6/faap-simulator) - Simulator for fog application allocation in industrial environments.
- [faas-sim](https://github.com/edgerun/faas-sim) - Trace-driven simulator for container-based FaaS platforms at the edge.
- [Fogbed](https://github.com/fogbed/fogbed) - Mininet extension for creating virtualized fog testbeds with Docker.
- [Fogify](https://ucy-linc-lab.github.io/fogify/) - Emulation framework for modeling and experimenting with fog topologies.
- [FogNetSim++](https://github.com/rtqayyum/fognetsimpp) - OMNeT++ extension for fog networking with energy and mobility models.
- [FogTorchPI](https://github.com/di-unipi-socc/FogTorchPI) - Java-based prototype for optimizing fog deployments considering QoS.
- [gem5](https://www.gem5.org/) - Modular simulator for computer-system architecture research including edge processors.
- [iFogSim](https://github.com/Cloudslab/iFogSim) - Toolkit for simulating resource management in IoT, edge, and fog environments.
- [IoTSim-Edge](https://github.com/DNJha/IoTSim-Edge) - CloudSim extension for simulating heterogeneous IoT and edge infrastructures.
- [IoTSim-Osmosis](https://github.com/kalwasel/IoTSim-Osmosis) - Framework for simulating osmotic computing in edge-cloud SDN environments.

## Tools

Development and management tools for edge computing.

- [Edge Impulse](https://www.edgeimpulse.com/) - Platform for building edge AI models with no-code tools.
- [K3s](https://k3s.io/) - Lightweight Kubernetes distribution for edge clusters.
- [MicroK8s](https://microk8s.io/) - Single-package Kubernetes for workstations and edge appliances.
- [SUSE Edge](https://www.suse.com/products/edge/) - Open-source tools for building sovereign edge clouds.
- [OpenNebula](https://opennebula.io/) - Cloud management platform with edge extensions for distributed setups.
- [Helin](https://www.helindata.com/) - Industrial edge computing tool for real-time data processing.

## Resources

Guides, papers, and communities.

- [Edge Computing 2025 Trends](https://stlpartners.com/articles/edge-computing/50-edge-computing-companies-2025/) - Report on top edge companies and innovations.
- [Awesome AI Edge Computing](https://github.com/awesomelistsio/awesome-ai-edge-computing) - Curated list focused on AI at the edge.
- [Edge AI Frameworks Survey](https://blog.huebits.in/top-10-edge-ai-frameworks-for-2025-best-tools-for-real-time-on-device-machine-learning/) - Overview of top edge AI tools.

## Contribute

Contributions welcome! Read the [contribution guidelines](contributing.md) first.