import type { Member } from "@/types/member";

export const members: Member[] = [
  {
    name: "ending",
    link: "https://ending.dev/",
    github: "sombrasvivasss",
    discord_id: "1436451809903382599",
    projects: [
      {
        name: "xanaxx LLC",
        description:
          "xanaxx LLC operates digital products ranging from Discord Bots to full fledged apps.",
        url: "https://xanaxx.vercel.app/",

        type: "website" as const,
      },
    ],
    timezone: "America/Santo_Domingo",
  },
  {
    name: "lockfile",
    link: "https://doxiado.dev/",
    github: "doxiado-dev",
    discord_id: "344131223230087177",
    timezone: "America/Guayaquil",
  },
  {
    name: "spraiiz",
    link: "https://spraiiz.dev/",
    github: "not available",
    discord_id: "1141492642153250817",
    timezone: "America/Mexico_City",
  },
  {
    name: "abdiel",
    link: "https://gemidor.com/",
    github: "abdiel",
    discord_id: "1435000408924750006",
    timezone: "America/Mexico_City",
  },
  {
    name: "ritualwraith",
    link: "https://e.rich/binance",
    github: "sinresentimientos",
    discord_id: "1380985670406770748",
    timezone: "America/Buenos_Aires",
  },
  {
    name: "remi",
    link: "https://guns.lol/remilputo",
    github: "not available",
    discord_id: "866411256679628851",
    timezone: "America/Santiago",
  },
  {
    name: "lin",
    link: "https://rentry.co/linsitozz",
    github: "not available",
    discord_id: "1234039234780991559",
    timezone: "America/New_York",
  },

].sort((a, b) => {
  const topOrder = ["ending", "lockfile", "spraiiz", "abdiel", "ritualwraith", "remi", "lin"];
  if (topOrder.includes(a.name) && topOrder.includes(b.name)) return topOrder.indexOf(a.name) - topOrder.indexOf(b.name);
  if (topOrder.includes(a.name)) return -1;
  if (topOrder.includes(b.name)) return 1;
  return (b.projects?.length || 0) - (a.projects?.length || 0);
});
