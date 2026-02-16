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
    FaCog,
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
        title: "Earthmoving",
        description:
            "Efficient earthmoving operations for grading, leveling, and reshaping terrain for roads, buildings, and infrastructure.",
    },
    {
        icon: FaHardHat,
        title: "Mining Support",
        description:
            "Reliable equipment and operational support for mining companies including material extraction and transportation.",
    },
    {
        icon: FaRoute,
        title: "Haulage Services",
        description:
            "Heavy-duty haulage and transportation of materials, aggregates, and earth with our 32T and 42T capacity trucks.",
    },
    {
        icon: FaBuilding,
        title: "Land Development",
        description:
            "End-to-end land development services from initial clearing to final grading, ready for construction.",
    },
    {
        icon: FaCog,
        title: "Construction Support",
        description:
            "On-site equipment support for construction companies including operators, maintenance, and logistics.",
    },
];

export default services;
