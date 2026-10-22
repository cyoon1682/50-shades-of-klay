# 50 Shades of Klay

Search any NBA player, see his latest game, and compare our Sleeper and ESPN
fantasy scoring side by side. Tap any stat to play "what if."

## Put it online for free (about 15 minutes)

You need two free accounts: **GitHub** (stores the files) and **Netlify**
(turns them into a website). Do this on a computer, not your phone.

### Part 1: Get the files ready
1. Find the file `50-shades-of-klay.zip` you downloaded.
2. Double-click it. A folder called `50-shades-of-klay` appears. Open it.
3. Inside you should see: `index.html`, `netlify.toml`, `manifest.webmanifest`,
   `README.md`, and two folders: `icons` and `netlify`.

### Part 2: Put the files on GitHub
4. Go to **github.com** and click **Sign up**. Make a free account.
5. Click the **+** in the top-right corner, then **New repository**.
6. Type the name `50-shades-of-klay`. Leave everything else alone.
   Click **Create repository**.
7. On the next page, click the link that says **uploading an existing file**.
8. Go back to the open `50-shades-of-klay` folder. Select **everything inside it**
   (on Mac: Cmd+A, on Windows: Ctrl+A). Drag all of it into the GitHub page.
   Don't drag the folder itself, just what's inside.
9. Wait until every file shows in the list, then click the green
   **Commit changes** button.
10. Check: the repo page should show `index.html`, `netlify.toml` and the
    `icons` and `netlify` folders right at the top level.

### Part 3: Turn it into a website on Netlify
11. Go to **netlify.com**, click **Sign up**, and choose **Sign up with GitHub**.
12. Click **Add new project**, then **Import an existing project**, then **GitHub**.
    Say yes when it asks to connect to GitHub.
13. Click the `50-shades-of-klay` repo.
14. Don't change any settings. Scroll down and click **Deploy**.
15. Wait about a minute until it says **Published**. Netlify gives you a
    random link like `jolly-otter-123.netlify.app`.
16. Make the link nicer: open **Project configuration**, find
    **Change project name**, type `50shadesofklay` (or any name that's free),
    and save. Your link becomes `50shadesofklay.netlify.app`.

### Part 4: Check it works
17. Open your link. Search "Ant" and tap Anthony Edwards. You should see his
    real headshot, his last game on the ticket, and both scores.
18. If you see "Preview mode" instead, open
    `your-link.netlify.app/api/espn?url=https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams`.
    A page full of text means stats are working, so just refresh the app.
    An error page means the `netlify` folder didn't upload. Redo step 8 and
    make sure that folder is included.

### Part 5: Put it on your phone and share it
19. On your iPhone, open the link in **Safari**.
20. Tap **Get the app** at the top and follow the 3 steps. It shows up on
    your Home Screen as **50 Shades**.
21. Text the link to the group chat. Everyone does step 19 and 20.

### Updating it later
Upload the new files to the same GitHub repo the same way (step 7 to 9,
it replaces the old ones). Netlify updates the website by itself in a minute.

## Changing the scoring
Open `index.html` in GitHub, click the pencil icon, search for `const RULES`,
change the numbers, and click **Commit changes**.

## Notes
- Stats come from ESPN's public (undocumented) endpoints. If ESPN changes them,
  the app still works with manual entry.
- Technical and flagrant fouls aren't in ESPN box scores. Add them in
  **More stats & bonuses**.
- Not affiliated with ESPN or Sleeper. For personal league use.
