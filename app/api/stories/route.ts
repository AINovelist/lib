// app/api/stories/route.ts
import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

export async function GET() {
  const octokit = new Octokit({auth: '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'});

  const topics = [
    "Air Pollution Reduction",
    "Animal Protection",
    "Tree Preservation",
    "Waste Reduction",
    "Water Conservation",
  ];

  try {
    const allStories = [];

    for (let topic of topics) {
      const { data: topicFiles } = await octokit.repos.getContent({
        owner: "ainovelist",
        repo: "stories",
        path: `kids/${topic}`,
      });

      for (let language of ["en", "fa"]) {
        const languageFolder = topicFiles.find((file: any) => file.name === language);
        if (languageFolder && languageFolder.type === "dir") {
          const { data: languageFiles } = await octokit.repos.getContent({
            owner: "ainovelist",
            repo: "stories",
            path: `kids/${topic}/${language}`,
          });

          const stories = languageFiles.map((file: any) => ({
            id: file.name.replace(".md", ""),
            title: file.name.replace(".md", ""),
            language,
            topic,
          }));

          allStories.push(...stories);
        }
      }
    }

    console.log("All Stories:", allStories); // Log the stories to ensure they are structured correctly
    return NextResponse.json(allStories);
  } catch (error) {
    console.error("Error fetching stories:", error);
    return NextResponse.json({ error: "Failed to fetch stories" }, { status: 500 });
  }
}
