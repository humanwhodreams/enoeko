import { FaFacebook, FaInstagram } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import type { social } from "@/types/social";

export const socials: social[] = [
  {
    title: "Instagram",
    href: "https://instagram.com/enoekooffical",
    icon: FaInstagram,
  },
  {
    title: "Twitter",
    href: "https://x.com/enoekooffical",
    icon: FaXTwitter,
  },
  {
    title: "Facebook",
    href: "https://facebook.com/enoekooffical",
    icon: FaFacebook,
  },
];
