"use client";

import { githubConfig } from "./Config";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

import GithubIcon from "../svgs/Github";
import { Button } from "../ui/button";
import Container from "../ui/Container";

const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((mod) => mod.default),
  { ssr: false },
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

export default function Github() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  // Build exact 365-day rolling data (important for correct month order)
  function buildFullYearData(validContribs: ContributionItem[]) {
    const sorted = validContribs.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const fullYearData: ContributionItem[] = [];
    const cursor = new Date(oneYearAgo);

    while (cursor <= today) {
      const dateStr = cursor.toISOString().split("T")[0];
      const existing = sorted.find((c) => c.date === dateStr);

      fullYearData.push(existing || { date: dateStr, count: 0, level: 0 });

      cursor.setDate(cursor.getDate() + 1);
    }

    return fullYearData;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}.json`,
        );
        const data: { contributions?: unknown[] } = await response.json();

        if (!data?.contributions || !Array.isArray(data.contributions)) {
          return setHasError(true);
        }

        const flat = data.contributions.flat();

        const contributionLevelMap = {
          NONE: 0,
          FIRST_QUARTILE: 1,
          SECOND_QUARTILE: 2,
          THIRD_QUARTILE: 3,
          FOURTH_QUARTILE: 4,
        };

        const valid = flat
          .filter(
            (item: any): item is GitHubContributionResponse =>
              item &&
              typeof item === "object" &&
              "date" in item &&
              "contributionCount" in item,
          )
          .map((item: GitHubContributionResponse) => ({
            date: item.date,
            count: item.contributionCount || 0,
            level: contributionLevelMap[item.contributionLevel] || 0,
          }));

        if (valid.length === 0) return setHasError(true);

        const total = valid.reduce((sum, c) => sum + c.count, 0);
        setTotalContributions(total);

        //@ts-expect-error validation done above
        const fullYear = buildFullYearData(valid);
        setContributions(fullYear);
      } catch (err) {
        console.error(err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Container className="mt-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {githubConfig.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              <b>{githubConfig.username}</b>’s {githubConfig.subtitle}
            </p>

            {!isLoading && !hasError && totalContributions > 0 && (
              <p className="text-sm text-primary font-medium mt-1">
                Total:{" "}
                <span className="font-extrabold">
                  {totalContributions.toLocaleString()}{" "}
                </span>
                Contributions
              </p>
            )}
          </div>
        </div>

        {/* Loading */}
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">
                {githubConfig.loadingState.description}
              </p>
            </div>
          </div>
        ) : hasError || contributions.length === 0 ? (
          /* Error State */
          <div className="p-8 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <GithubIcon className="w-8 h-8" />
            </div>
            <p className="font-medium mb-2">{githubConfig.errorState.title}</p>
            <p className="text-sm mb-4">
              {githubConfig.errorState.description}
            </p>

            <Button variant="outline" asChild>
              <Link
                href={`https://github.com/${githubConfig.username}`}
                className="inline-flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                {githubConfig.errorState.buttonText}
              </Link>
            </Button>
          </div>
        ) : (
          /* Calendar UI Block */
          <div className="rounded-xl bg-black/20 backdrop-blur-xl border border-white/10 p-6 shadow-lg">
            <div className="w-full overflow-hidden">
              <ActivityCalendar
                data={contributions}
                blockSize={11}
                blockMargin={3}
                fontSize={12}
                hideTotalCount
                hideColorLegend={false}
                hideMonthLabels={false}
                colorScheme={theme === "dark" ? "dark" : "light"}
                maxLevel={githubConfig.maxLevel}
                theme={githubConfig.theme}
                labels={{
                  months: githubConfig.months,
                  weekdays: githubConfig.weekdays,
                  totalCount: githubConfig.totalCountLabel,
                }}
                style={{
                  color: "rgb(150,150,150)",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
