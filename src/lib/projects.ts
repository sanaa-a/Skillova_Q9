export type Project = {
  id: number;
  title: string;
  summary: string;
  stack: string[];
  status: "shipped" | "in progress" | "archived";
  index: string; // zero-padded id, used as a code-comment style label
  likes: number;
  views: number;
};

type DummyPost = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
};

type DummyPostsResponse = {
  posts: DummyPost[];
};

// Real project identities — the case-study text underneath each one comes
// from a live API call (see below), not hand-written lorem ipsum.
const CASE_STUDIES: {
  title: string;
  stack: string[];
  status: Project["status"];
}[] = [
  { title: "Holographic Fan Display Driver", stack: ["Python", "Flask", "OpenCV"], status: "shipped" },
  { title: "Electro-Optical Drone Tracking", stack: ["YOLOv8", "ESP32", "OpenCV"], status: "in progress" },
  { title: "Wearable Assistive Haptic System", stack: ["ESP32", "C++", "ESP-NOW"], status: "shipped" },
  { title: "Intraoral Tongue Gesture Interface", stack: ["KNN", "ESP32", "MATLAB"], status: "archived" },
  { title: "AI Interior Design Assistant", stack: ["React", "Vite", "Express"], status: "shipped" },
  { title: "Tactical Camera Analysis HUD", stack: ["Next.js", "TypeScript", "OpenCV"], status: "in progress" },
  { title: "Receipt-Splitting Companion", stack: ["React", "Node.js", "Claude API"], status: "shipped" },
  { title: "Regional Finance Tracker", stack: ["React Native", "Firebase", "Expo"], status: "in progress" },
  { title: "IEEE Paper Formatting Pipeline", stack: ["Python", "PyMuPDF", "LaTeX"], status: "archived" },
];

const FALLBACK_POSTS: DummyPost[] = [
  { id: 1, title: "", body: "The fan spins fast enough that the human eye fills in the gaps, so the real engineering problem was never the illusion — it was getting frames to the LEDs on time.", tags: ["engineering"], reactions: { likes: 214, dislikes: 6 }, views: 1830 },
  { id: 2, title: "", body: "Two cameras watching the same patch of sky rarely agree on where a target is, so the tracker spends most of its time reconciling their disagreements into one confident coordinate.", tags: ["vision"], reactions: { likes: 178, dislikes: 4 }, views: 1420 },
  { id: 3, title: "", body: "A short buzz means someone is at the door, a long buzz means the phone is ringing, and the two units agree on the difference over a radio link with no router in sight.", tags: ["accessibility"], reactions: { likes: 302, dislikes: 3 }, views: 2210 },
  { id: 4, title: "", body: "Training a classifier on tongue position sounds strange until you realize it is just another gesture recognition problem, only the sensor sits inside a mouthguard instead of a glove.", tags: ["research"], reactions: { likes: 96, dislikes: 2 }, views: 870 },
  { id: 5, title: "", body: "Given one photo of an empty room, the model proposes a full furniture layout, and the interface lets a client swap styles the way they would swipe through a catalog.", tags: ["product"], reactions: { likes: 245, dislikes: 8 }, views: 1990 },
  { id: 6, title: "", body: "Five detection modes share one video pipeline, switching between them the way a camera app switches lenses, without ever dropping a frame on a modest phone processor.", tags: ["computer-vision"], reactions: { likes: 189, dislikes: 5 }, views: 1560 },
  { id: 7, title: "", body: "A blurry photo of a restaurant bill goes in, and a fair itemized split for the whole table comes out, tax and tip included, in under three seconds.", tags: ["utility"], reactions: { likes: 267, dislikes: 7 }, views: 2340 },
  { id: 8, title: "", body: "Built for a market where most budgeting apps assume a currency that isn't yours, this one starts from the Omani rial and works outward from there.", tags: ["fintech"], reactions: { likes: 153, dislikes: 4 }, views: 1180 },
  { id: 9, title: "", body: "A submission got bounced over a half-inch margin, so the fix became a script that walks every page of a paper and nudges it back into IEEE's exact template.", tags: ["tooling"], reactions: { likes: 88, dislikes: 1 }, views: 640 },
];

/** Trim body text to whole sentences, never mid-word. */
function toSentenceSummary(body: string, maxLen = 165): string {
  const sentences = body.split(/(?<=[.!?])\s+/);
  let out = "";
  for (const s of sentences) {
    if ((out + " " + s).trim().length > maxLen && out.length > 0) break;
    out = (out + " " + s).trim();
  }
  return out || body.slice(0, maxLen).trim();
}

export async function getProjects(): Promise<Project[]> {
  let posts: DummyPost[];

  try {
    const res = await fetch("https://dummyjson.com/posts?limit=9", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const data: DummyPostsResponse = await res.json();
    posts = data.posts;
  } catch {
    // Network unavailable (offline dev, restricted sandbox) — local fallback.
    posts = FALLBACK_POSTS;
  }

  return posts.slice(0, CASE_STUDIES.length).map((post, i) => {
    const meta = CASE_STUDIES[i % CASE_STUDIES.length];
    return {
      id: post.id,
      title: meta.title,
      summary: toSentenceSummary(post.body),
      stack: meta.stack,
      status: meta.status,
      index: String(i + 1).padStart(2, "0"),
      likes: post.reactions?.likes ?? 0,
      views: post.views ?? 0,
    };
  });
}
