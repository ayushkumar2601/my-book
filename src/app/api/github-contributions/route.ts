import { NextResponse } from "next/server";

export async function GET() {
  const githubToken = process.env.GITHUB_TOKEN; 
  const username = "ayushkumar2601"; 

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
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { username } }),
    });

    const data = await res.json();
    
    console.log("GitHub API Response:", JSON.stringify(data, null, 2));

    if (data.errors) {
      console.error("GitHub API Errors:", data.errors);
      return NextResponse.json({ error: data.errors[0].message }, { status: 400 });
    }

    if (!data.data || !data.data.user) {
      console.error("Invalid response structure:", data);
      return NextResponse.json({ error: "Invalid GitHub API response" }, { status: 500 });
    }

    return NextResponse.json(data.data.user.contributionsCollection.contributionCalendar);
  } catch (err) {
  console.error("Failed to fetch contributions:", err);
  return NextResponse.json({ error: "Failed to fetch contributions" }, { status: 500 });
}

}
