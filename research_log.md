Q9
1. [3:40 PM] Read the scenario. I did the whole setup for react and Next. Starting to tackle the layout of the website before going towards the design for it. 
I'm thinking of a modern website with a classic nav bar. For the filler words im using lorem ipsum. 

2. [4:20 PM] Took longer than I expected, as I got lost in making it perfect for myself. 
Didnt like the lorem latin script so I'm changing the API to DummyJSON for English filler words. 
I took a reference from "best portfolio websites" and tried to copy the design (not fully). 
took me a while with json place cards so I watched a youtube video to understand how to incorporate it

3. [4:40PM] I have been experimenting with the colour scheme and making it not generic. 
I used some help with claude but it looked too AI so I'm heavily editing it. 

4. [9:30PM] Left this in the middle as I got stuck with how to design it.
Starting again now. The main thing I;m facing issue is with the UI.
Nothing is satisfying me. Making a catchy front page with the genereic grids. 
changed the chape from squares to card shaped. Adding purple tones and the hovering effect when mouse hovers. 
Got all my data for the cards from API and it was easy to connect. Faced no issues. Except that the words got cut off mid sentence 
so i changed the code to cut off whent he sentence ends. 

# Why did I choose this specific framework over plain HTML/CSS/JS or a
standard React app?

Plain HTML/CSS/JS would mean either a manual build step to bake in the
DummyJSON data which means a blank or skeleton grid on first paint, an extra network round trip in the
browser, and the API call visible. A standard React has the same problem in a different shape, it ships an empty
<div id="root"> and does all rendering in the browser, so there's nothing
for a slow connection to see until JS finishes executing.

Next.js's App Router lets a component be async and fetch data directly on
the server, and by default that renders to plain HTML at build time. There's no
client-side loading state and no exposed API call.

# How does my chosen framework handle routing and data fetching
differently than others?

Next.js is a file-based routing. Server Components fetch
data inline and render to static HTML by default, with revalidate:3600
quietly refreshing the page in the background(ISR) so it never goes for long without needing a rebuild.

