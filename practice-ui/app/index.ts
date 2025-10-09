export interface Projectcard {
  name: string;
  bounty: string;
  content: string;
  src: string;
  joined: string;
  role: string;
  highlight: string;
}

export const ProjectList: Projectcard[] = [
  {
    name: "Monkey D. Luffy",
    bounty: "3,000,000,000",
    content: `Luffy is the fearless captain of the Straw Hat Pirates and the driving force 
    behind the crew’s adventures. With his unshakable dream of becoming the Pirate King, 
    he sails across the seas in search of the legendary One Piece. Despite his goofy 
    and carefree personality, Luffy has a natural charisma that inspires loyalty, 
    courage, and trust in everyone around him. His strength comes from the Gum-Gum Fruit, 
    which turned his body into rubber, allowing him to bend the laws of combat with 
    creativity and determination.`,
    src: "https://i.pinimg.com/736x/ac/5a/e6/ac5ae66eb81bc7b5ce66c1ee4fcddf4d.jpg",
    joined: "Founded the crew at the start of the journey (East Blue Saga).",
    role: "Captain",
    highlight: "A rubber man with an iron will, endless appetite, and unbreakable loyalty.",
  },
  {
    name: "Roronoa Zoro",
    bounty: "1,111,000,000",
    content: `Zoro is the first mate and swordsman of the crew, known for his 
    legendary three-sword style, Santoryu. His unwavering loyalty to Luffy and 
    his own dream of becoming the world’s greatest swordsman drive him to push 
    past any limits. Though often serious and stoic, Zoro has a dry sense of humor 
    and a reputation for constantly getting lost. In battle, he’s a relentless 
    warrior, cutting through the toughest foes with raw strength, refined skill, 
    and unmatched determination.`,
    src: "https://i.pinimg.com/736x/e9/79/65/e97965fe61b4765bc513d768e0c7e1e0.jpg",
    joined: "Joined in East Blue after Luffy saved him from execution.",
    role: "Swordsman",
    highlight: "Relentless swordsman aiming for the world’s greatest title, loyal to Luffy.",
  },
  {
    name: "Vinsmoke Sanji",
    bounty: "1,032,000,000",
    content: `Sanji is the Straw Hat Pirates’ skilled cook, trained in the art of 
    Black Leg martial arts, where he uses his legs as his primary weapons. Raised 
    in the Baratie, a floating restaurant, Sanji carries a deep respect for food 
    and a vow to never let anyone go hungry. Despite his tough exterior, he’s a 
    gentleman at heart, always treating women with utmost respect. His dream is 
    to find the All Blue, a mythical sea where every fish in the world gathers, 
    making it the ultimate paradise for a chef.`,
    src: "https://i.pinimg.com/1200x/07/1f/f6/071ff6f6272cbece63b44b25f8a7cc90.jpg",
    joined: "Joined at Baratie, after Luffy helped him defend the floating restaurant.",
    role: "Cook",
       highlight: "A master chef who fights with fire,both in the kitchen and on the battlefield"
  },
];
