import { PhotoCollection, Tab } from "@/types/types";

export const tabs: Tab[] = [
  { id: "all", label: "All Photos" },
  { id: "senior", label: "Senior Team" },
  { id: "youth", label: "Youth Academy" },
  { id: "facilities", label: "Facilities" },
  { id: "events", label: "Events" }
];

export const clubPhotos: PhotoCollection = {
  all: [
    { src: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12", width: 300, height: 600, alt: "Soccer training" },
    { src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974", width: 200, height: 200, alt: "Team huddle" },
    { src: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e", width: 250, height: 300, alt: "Stadium view" },
    { src: "https://images.unsplash.com/photo-1623171890843-0e3399f5f45c", width: 400, height: 400, alt: "Practice drills" },
    { src: "https://images.unsplash.com/photo-1493568000180-ca2fb70ddcba", width: 600, height: 900, alt: "Trophy celebration" },
    { src: "https://images.unsplash.com/photo-1599676746581-939c67e81031", width: 800, height: 533, alt: "Night match" },
    { src: "https://images.unsplash.com/photo-1624880357913-a08a5a099abb", width: 400, height: 600, alt: "Team photo" },
    { src: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68", width: 400, height: 533, alt: "Youth training" },
    { src: "https://images.unsplash.com/photo-1628891890467-b79f2c8ba9dc", width: 300, height: 534, alt: "Goal celebration" },
    { src: "https://images.unsplash.com/photo-1544298621-35a989e4ad59", width: 500, height: 534, alt: "Kid playing soccer" },
    { src: "https://images.unsplash.com/photo-1529768167801-9173047f5cc9", width: 600, height: 533, alt: "Soccer ball on field" },
    { src: "https://images.unsplash.com/photo-1470083748587-df49227c0505", width: 200, height: 533, alt: "Team practice" }
  ],

  senior: [
    { src: "https://images.unsplash.com/photo-1547307441-efb759942b3a", width: 800, height: 600, alt: "Senior match play" },
    { src: "https://images.unsplash.com/photo-1623171890843-0e3399f5f45c", width: 800, height: 533, alt: "Advanced drills" },
    { src: "https://images.unsplash.com/photo-1529768167801-9173047f5cc9", width: 800, height: 533, alt: "Professional training" },
    { src: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12", width: 800, height: 600, alt: "Senior training" },
    { src: "https://images.unsplash.com/photo-1628891890467-b79f2c8ba9dc", width: 800, height: 534, alt: "Championship match" }
  ],

  youth: [
    { src: "https://images.unsplash.com/photo-1544298621-35a989e4ad59", width: 800, height: 534, alt: "Youth player" },
    { src: "https://images.unsplash.com/photo-1520473378652-85d9c4aee6cf", width: 800, height: 534, alt: "Youth training" },
    { src: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68", width: 800, height: 533, alt: "Youth skills session" },
    { src: "https://images.unsplash.com/photo-1596728610557-8f30600cea4a", width: 800, height: 600, alt: "Junior coaching" }
  ],

  facilities: [
    { src: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e", width: 800, height: 533, alt: "Main stadium" },
    { src: "https://images.unsplash.com/photo-1520527620847-75ef0cc93a1d", width: 800, height: 450, alt: "Indoor facility" },
    { src: "https://images.unsplash.com/photo-1599676746581-939c67e81031", width: 800, height: 533, alt: "Training ground" },
    { src: "https://images.unsplash.com/photo-1487466365202-1afdb86c764e", width: 800, height: 533, alt: "Gym facilities" },
    { src: "https://images.unsplash.com/photo-1470083748587-df49227c0505", width: 800, height: 533, alt: "Academy pitches" }
  ],

  events: [
    { src: "https://images.unsplash.com/photo-1493568000180-ca2fb70ddcba", width: 600, height: 900, alt: "Trophy celebration" },
    { src: "https://images.unsplash.com/photo-1588420328320-decc45e92d04", width: 800, height: 533, alt: "Award ceremony" },
    { src: "https://images.unsplash.com/photo-1624880357913-a08a5a099abb", width: 800, height: 600, alt: "Team photo day" },
    { src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974", width: 800, height: 533, alt: "Pre-match talk" }
  ]
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};
