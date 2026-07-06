import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ markers: false });
ScrollTrigger.config({ limitCallbacks: true });

export { gsap, ScrollTrigger };
