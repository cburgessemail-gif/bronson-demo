// APP.TSX PATCH
// Replace ONLY the big homepage headline block with this:

<div
  style={{
    marginTop: 26,
    fontSize: 56,          // smaller
    lineHeight: 1.02,
    fontWeight: 800,       // less thick
    letterSpacing: "-0.03em",
    maxWidth: 900,
  }}
>
  <div>{text.heroTitleLine1}</div>
  <div>{text.heroTitleLine2}</div>
</div>

// ALSO replace the story page large title block with this:

<div
  style={{
    marginTop: 22,
    fontSize: 56,          // smaller
    lineHeight: 1.02,
    fontWeight: 800,       // less thick
    letterSpacing: "-0.03em",
    maxWidth: 900,
  }}
>
  {text.storyTitle}
</div>

// ALSO replace pathway page large title block with this:

<div
  style={{
    marginTop: 14,
    fontSize: 40,          // smaller
    lineHeight: 1.02,
    fontWeight: 800,       // less thick
    letterSpacing: "-0.03em",
    color: "#173629",
  }}
>
  {activePathway.title}
</div>

// ALSO replace pathway layer headline block with this:

<div
  style={{
    marginTop: 14,
    fontSize: 44,          // smaller
    lineHeight: 1.04,
    fontWeight: 800,       // less thick
    letterSpacing: "-0.03em",
    maxWidth: 900,
  }}
>
  {activePathway.layers[layer].title}
</div>
