import type { Member } from "@/types/member";

export const members: Member[] = [
  {
    name: "odd",
    link: "https://odd.dev/",
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
    name: "derreick",
    link: "https://derreick.dev",
    github: "derreick",
    discord_id: "1124737231496683543",
    timezone: "America/Mexico_City",
  },
  {
    name: "abdiel",
    link: "https://gemidor.com/",
    github: "abdiel",
    discord_id: "1435000408924750006",
    timezone: "America/Mexico_City",
  },

].sort((a, b) => {
  const topOrder = ["odd", "lockfile", "abdiel", "derreick"];
  if (topOrder.includes(a.name) && topOrder.includes(b.name)) return topOrder.indexOf(a.name) - topOrder.indexOf(b.name);
  if (topOrder.includes(a.name)) return -1;
  if (topOrder.includes(b.name)) return 1;
  return (b.projects?.length || 0) - (a.projects?.length || 0);
});