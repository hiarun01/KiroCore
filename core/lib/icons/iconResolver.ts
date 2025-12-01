import {IconType} from "react-icons";
import {
  FiBook,
  FiBookOpen,
  FiZap,
  FiTarget,
  FiCpu,
  FiFeather,
  FiHeart,
  FiBriefcase,
} from "react-icons/fi";
import {
  HiLightBulb,
  HiBookOpen,
  HiSparkles,
  HiRocketLaunch,
} from "react-icons/hi2";
import {MdSchool, MdLightbulb, MdRocket, MdSettings} from "react-icons/md";
import {BsRobot} from "react-icons/bs";

export type IconIdentifier = string;

export interface IconMap {
  [key: string]: IconType;
}

// Centralized icon mapping
const ICON_MAP: IconMap = {
  // Feather Icons
  FiBook: FiBook,
  FiBookOpen: FiBookOpen,
  FiZap: FiZap,
  FiTarget: FiTarget,
  FiCpu: FiCpu,
  FiFeather: FiFeather,
  FiHeart: FiHeart,
  FiBriefcase: FiBriefcase,

  // Hero Icons
  HiLightBulb: HiLightBulb,
  HiBookOpen: HiBookOpen,
  HiSparkles: HiSparkles,
  HiRocketLaunch: HiRocketLaunch,

  // Material Icons
  MdSchool: MdSchool,
  MdLightbulb: MdLightbulb,
  MdRocket: MdRocket,
  MdSettings: MdSettings,

  // Bootstrap Icons
  BsRobot: BsRobot,
};

/**
 * Get icon component from identifier string
 * @param identifier - Icon identifier (e.g., "FiBook", "HiLightBulb")
 * @returns IconType component or null if not found
 */
export function getIconComponent(identifier: IconIdentifier): IconType | null {
  return ICON_MAP[identifier] || null;
}

/**
 * Check if identifier is valid
 * @param identifier - Icon identifier to validate
 * @returns true if identifier exists in icon map
 */
export function isValidIconIdentifier(identifier: string): boolean {
  return identifier in ICON_MAP;
}

/**
 * Check if string is an emoji
 * @param str - String to check
 * @returns true if string contains emoji characters
 */
export function isEmoji(str: string): boolean {
  return /\p{Emoji}/u.test(str);
}
