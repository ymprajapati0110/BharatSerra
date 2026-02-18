/*
  📘 SERVICES DATA — Static Content
  
  This file holds data separately from the component.
  WHY? Clean separation: data in one file, display logic in another.
  If the client wants to add a service, you edit only this file.
  
  Each service has:
  - icon: the react-icons component to display
  - title: service name
  - description: brief explanation
*/

import {
    FaTree,
    FaMountain,
    FaTruckMoving,
    FaHardHat,
    FaRoute,
    FaBuilding,
    FaRoad,
    FaOilCan,
    FaCogs,
    FaShippingFast,
} from "react-icons/fa";

const services = [
    {
        icon: FaTree,
        title: "Site Clearing",
        description:
            "Complete land clearing solutions including vegetation removal, stump grinding, and site preparation for construction projects.",
    },
    {
        icon: FaMountain,
        title: "Bulk Excavation",
        description:
            "Large-scale excavation services for foundations, basements, trenches, and earth removal with our powerful crawler excavators.",
    },
    {
        icon: FaTruckMoving,
        title: "Earthmoving & Haulage",
        description:
            "Efficient earthmoving and heavy-duty haulage of materials, aggregates, and earth with our 32T and 42T capacity trucks.",
    },
    {
        icon: FaHardHat,
        title: "Mining Support",
        description:
            "Reliable equipment and operational support for mining companies including material extraction and transportation.",
    },
    {
        icon: FaRoad,
        title: "Road Construction",
        description:
            "End-to-end road construction services — we build roads as per your specifications and requirements, from planning to completion.",
    },
    {
        icon: FaBuilding,
        title: "Land Development",
        description:
            "End-to-end land development services from initial clearing to final grading, ready for construction.",
    },
    {
        icon: FaOilCan,
        title: "Oil Supply",
        description:
            "Reliable fuel and oil supply services to keep your equipment and operations running without interruption.",
    },
    {
        icon: FaCogs,
        title: "Custom Machinery",
        description:
            "We customise or import machinery as per your specific project requirements — delivered within 2 months.",
    },
    {
        icon: FaShippingFast,
        title: "Equipment Import",
        description:
            "Need specialised equipment? We import heavy machinery from across the globe within 2 months of your order.",
    },
];

export default services;
