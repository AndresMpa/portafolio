#!/usr/bin/env bash
# fix-contrast.sh
set -euo pipefail

git add -A && git commit -m "checkpoint before contrast fix" --allow-empty

# zinc-600 -> zinc-500
files_600=(
  "src/components/education/EducationSummary.astro"
  "src/components/talks/TalksLatest.astro"
  "src/components/talks/TalksList.astro"
)
for f in "${files_600[@]}"; do
  sed -i 's/text-zinc-600/text-zinc-500/g' "$f"
done

# zinc-500 -> zinc-400
files_500=(
  "src/routes/education.astro"
  "src/components/project/ProjectFeatured.astro"
  "src/components/community/CommunityBanner.astro"
  "src/components/community/CommunityUpcoming.astro"
  "src/components/education/EducationSummary.astro"
  "src/components/experience/ExperienceCurrent.astro"
  "src/components/experience/ExperiencePast.astro"
  "src/components/experience/ExperienceTimeline.astro"
  "src/components/hero/HeroMetrics.astro"
  "src/components/hero/HeroTerminal.astro"
  "src/components/skill/SkillBanner.astro"
  "src/components/talks/TalkDetail.astro"
  "src/components/talks/TalksLatest.astro"
  "src/components/talks/TalksList.astro"
)
for f in "${files_500[@]}"; do
  sed -i 's/text-zinc-500/text-zinc-400/g' "$f"
done

echo "Done. git diff --stat to review, then re-run your audit."
