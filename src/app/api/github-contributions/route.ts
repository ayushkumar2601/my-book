import { NextResponse } from "next/server";

export async function GET() {
  const githubToken = process.env.GITHUB_TOKEN; 
  const username = "ayushkumar2601";

  // Return empty data if no token is configured
  if (!githubToken) {
    console.warn("GITHUB_TOKEN not configured");
    return NextResponse.json({ 
      totalContributions: 0, 
      weeks: [] 
    });
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { username } }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await res.json();

    if (data.errors) {
      console.error("GitHub API Errors:", data.errors);
      return NextResponse.json({ 
        totalContributions: 0, 
        weeks: [] 
      });
    }

    if (!data.data || !data.data.user) {
      console.error("Invalid response structure:", data);
      return NextResponse.json({ 
        totalContributions: 0, 
        weeks: [] 
      });
    }

    return NextResponse.json(data.data.user.contributionsCollection.contributionCalendar);
  } catch (err: any) {
    console.error("Failed to fetch contributions:", err.message);
    // Return empty data instead of error to prevent UI breaking
    return NextResponse.json({ 
      totalContributions: 0, 
      weeks: [] 
    });
  }
}
