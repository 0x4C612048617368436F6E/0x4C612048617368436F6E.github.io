(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const v=`
<section class="welcome">

<h2>Hello cybersecurity enthusiasts, and hackers</h2>
  <p>Welcome, and thanks for being here.</p>

  <p>This blog is a <strong>learning journal, knowledge base, and thinking space</strong>.
    It exists for one simple reason: to document what I’m learning, share it clearly,
    and grow through explanation.</p>

  <p>I’m currently focused on <strong>ethical hacking, security fundamentals, systems,
    and low-level concepts</strong> — from networking and operating systems to tooling,
    theory, and real-world problem-solving. Each post reflects something I’ve studied,
    built, or explored, written in a way that prioritises understanding over memorisation</p>

  <p>This isn’t a blog about pretending to know everything.
    It’s about:</p>

  <ul>
    <li>Breaking complex ideas down into clear mental models</li>
    <li>Sharing progress week by week</li>
    <li>Turning confusion into structured understanding</li>
    <li>Learning in public, honestly and methodically</li>
  </ul>

  <p>You’ll find:</p>

  <ul>
    <li>Learning logs and deep dives</li>
    <li>Notes on security, systems, and software internals</li>
    <li>Explanations written for clarity, not clicks</li>
    <li>Practical insights from building and experimenting</li>
  </ul>

  <p>Everything here is intentionally <strong>static, simple, and transparent</strong> —
    just ideas, words, and diagrams. No noise. No hype. Just learning.</p>

  <p>If you’re also interested in <em>how things really work under the hood</em>,
    you’re in the right place.</p>
</section>

  `,R=`
<section class="welcome">
<img class="img-about" src="/static/about.png" alt="about"/>
<p>
  I am <strong>0x4C612048617368436F6E</strong>, a highly curious and driven learner with a strong and continuously developing passion for <strong>cybersecurity</strong>.</p>

  <p> I am deeply interested in understanding how software, operating systems, and networked systems function at a low level, and how design flaws, misconfigurations, or implementation errors can introduce security vulnerabilities.</p>
  
  <p>
  I enjoy analyzing systems from both a defensive and offensive perspective, identifying weaknesses through methodical exploration, experimentation, and reverse engineering. My approach to learning is highly hands-on, as I believe real technical understanding comes from building, breaking, and investigating systems in depth, allowing me to develop strong problem-solving skills and a solid foundation in security principles.

</p>
</section>
`,b=`
<section class="welcome">
<p>
  A <strong>stack buffer overflow</strong> (also known as a
  <em>stack-based buffer overflow</em> or <em>stack buffer overrun</em>)
  is a vulnerability that occurs when a program writes more data to a
  stack-allocated buffer than it was intended to hold. This happens when
  input exceeds the buffer’s defined bounds, causing data to overflow into
  adjacent memory locations on the call stack.
</p>

<p>
  In a stack buffer overflow, the excess data overwrites neighboring stack
  data, which can corrupt the program’s execution state. As a result, the
  program may crash, behave unpredictably, or operate incorrectly. Stack
  buffer overflows are a specific subset of the broader class of
  <strong>buffer overflow vulnerabilities</strong>.
</p>

<p>
  Overflowing a buffer on the stack is particularly dangerous because the
  stack stores critical control data, including the
  <strong>saved frame pointer</strong> (which references the current stack
  frame), <strong>return addresses</strong> for active function calls,
  <strong>function arguments</strong>, <strong>local variables</strong>, and
  <strong>saved register values</strong>. If an overflow overwrites this
  information—especially the return address—it can alter the program’s
  control flow.
</p>

<p>
  While stack buffer overflows can occur accidentally due to programming
  errors, they can also be exploited intentionally in attacks commonly
  referred to as <strong>stack smashing</strong>, where an attacker
  carefully crafts input to overwrite control data and redirect execution.
</p>

<p>
Below is an example of what the current stack frame of an executing function looks like:
</p>

<img class="stack-frame" src="https://image.slideserve.com/1392234/layout-of-typical-stack-frame-l.jpg" alt="stack frame"/>

<p>Below is an example of a typical stackBuffer Overflow, and the result show below</p>

<img src="/static/stackBufferOverflow/stackBufferOverflow_Example.png" alt="stackBufferOverflow_Example" />

<img src="/static/stackBufferOverflow/stackBufferOverflow_Example_output.png" alt="stackBufferOverflow_Example_output" />

<p>Another example is below, where we try to read a file, and place the content in a buffer, but not enough space in the buffer</p>

<img src="/static/stackBufferOverflow/stackBufferOverflow_Example_ReadingFile.png" alt="stackBufferOverflow_Example_ReadingFile" />

<img src="/static/stackBufferOverflow/stackBufferOverflow_Example_ReadingFile_InputFile.png" alt="stackBufferOverflow_Example_ReadingFile_InputFile" />

<img src="/static/stackBufferOverflow/stackBufferOverflow_Example_ReadingFile_output.png" alt="stackBufferOverflow_Example_ReadingFile_outputFile" />


<h3>References</h3>
<ul>
<li>https://en.wikipedia.org/wiki/Stack_buffer_overflow</li>
<li>https://image.slideserve.com/1392234/layout-of-typical-stack-frame-l.jpg</li>
</section>

`,k=`
<section class="welcome">
<p>
        Here I will walk through a simple implementation of <code>strlen()</code> in C and explain in detail how it works at a low level.
        While <code>strlen()</code> may appear trivial at first glance, it is an excellent example for understanding some of C’s most
        fundamental concepts, particularly pointers, arrays, and the idea of contiguous memory.
    </p>

    <p>
        In C, a string is not a distinct data type. Instead, it is represented as an array of characters stored in contiguous memory,
        terminated by a special null character (<code>'\0'</code>). This null terminator is what allows functions like
        <code>strlen()</code> to determine where the string ends. The <code>strlen()</code> function itself does not know the length
        of the string in advance; it must discover it by traversing memory until it encounters this terminator.
    </p>

    <p>
        The function takes a single argument: a pointer to a constant character (<code>const char *</code>). This pointer refers to
        the first character of the string. Because arrays in C decay into pointers when passed to functions, the pointer effectively
        represents the base address of the character array.
    </p>

    <p>
        To compute the length, we iterate through the string one character at a time. This is commonly done using a loop that starts
        at the base address of the string. A character pointer is initialized to point to the first element of the array. Since the
        characters are stored contiguously, incrementing the pointer advances it to the next character in memory.
    </p>

    <p>
        As the loop progresses, the pointer is repeatedly incremented until it points to the null terminator. At this point, the loop
        can no longer continue, as the end of the string has been reached. Importantly, no explicit index is required — pointer
        arithmetic alone is sufficient to move through the string.
    </p>

    <p>
        Once the loop exits, the length of the string can be calculated by subtracting the original base address of the string from
        the final pointer position. This subtraction yields the number of characters traversed, which corresponds to the length of
        the string (excluding the null terminator). Pointer subtraction works here because both pointers refer to positions within
        the same contiguous block of memory. Since <code>sizeof(char)</code> is 1 byte, incrementing the pointer advances the memory
        address by exactly one byte.
    </p>

    <p>
        This approach highlights a key concept in C: arrays and pointers are deeply intertwined, and many standard library functions
        rely entirely on pointer arithmetic rather than array indexing. Understanding how <code>strlen()</code> works internally
        provides valuable insight into how C programs interact directly with memory, and why careful handling of pointers is so
        important for correctness and safety.
    </p>

    <p>
      Below we have the implementation:
    </p>
    <img class="strlenInC" src="/static/strlenInC/strlenInC.png" alt="strlenInC"/>
    <img src="/static/strlenInC/strlenInC_output.png" alt="strlenInC_output"/>

</section>
`,I=`<section class="welcome">

<p>I decided to work on an Instagram Reel downloader as a way of learning more about JavaScript. Working on the project helped me become more confident with JavaScript, npm, and web scraping, while also giving me an opportunity to explore how websites communicate with external services.</p>

<img class="final-res" src="/static/instagramReelDownloader/finalExample.png" alt="Final Result"/>

<p>The basic idea was relatively simple: given an Instagram Reel URL, the application would process the URL, retrieve the relevant Reel content, and allow the user to download it. Although the end goal was straightforward, the project gave me an opportunity to work through several problems that are much closer to real software engineering than simply following a tutorial.</p>

<h3>What I wanted to build</h3>

<p>The initial objective was to create an application that could:</p>

<ol>
<li>Accept an Instagram Reel URL from the user</li>
<li>Validate the URL</li>
<li>Retrieve the relevant information and content</li>
<li>Process the response</li>
<li>Save the downloaded content locally</li>
</ol>

<p>The important part of the project was not simply making a downloader. I wanted to understand how the different components communicate with one another and, more importantly, what happens underneath the abstractions that we normally take for granted.</p>

<h3>Initial approach</h3>

<p>I started by thinking about the problem from a high level. I tried to conceptualise how Instagram Reels are stored and delivered. One thing I found particularly interesting was that when watching a Reel, the video itself does not appear to contain the Instagram watermark. However, when using Instagram's built in download functionality, a watermark can be embedded into the downloaded video.</p>

<p>I created a diagram to illustrate my initial understanding of how this could work. This is an oversimplification of the architecture, but it helped me break the problem down into its individual components:</p>

<img src="/static/instagramReelDownloader/instagramArchitecture.png" alt="Oversimplified architecture"/>

<p>After conceptualising the architecture, I began doing some basic reverse engineering using the built in browser developer tools. While inspecting the network requests made when loading a Reel, I noticed that the video content was being retrieved from a CDN endpoint. These requests were then used by the page to retrieve and display the video.</p>

<img class="rev-eng" src="/static/instagramReelDownloader/simpleReverseEngineering.png" alt="Simple Reverse Engineering"/>

<p>This gave me a much better understanding of what was happening behind the scenes. Rather than the browser receiving a Reel as one large piece of content, the page was making requests for resources hosted elsewhere and then using those resources to display the Reel.</p>

<p>The application would therefore need some way of communicating with Instagram and processing the responses. I first looked at how HTTP requests work and how websites return data.</p>

<p>The basic flow was:</p>

<img class="simp-flow" src="/static/instagramReelDownloader/simpleFlow.png" alt="Simple Flow"/>

<p>From there, I broke the problem down into smaller pieces rather than trying to implement everything at once. For example, I needed to consider:</p>

<ol>
<li>How to validate the URL</li>
<li>How to make HTTP requests</li>
<li>How to deal with responses</li>
<li>How to identify the relevant media</li>
<li>How to handle errors</li>
<li>How to save the resulting file</li>
<li>How to structure the code so that individual components had clear responsibilities</li>
</ol>

<h3>Implementation</h3>

<p>I gradually implemented the project one component at a time. The first stage was handling the Instagram URL.</p>

<p>Rather than assuming that the user would always provide a valid URL, I needed to consider invalid input and determine what the application should do when the input was not what I expected.</p>

<p>This helped reinforce the importance of input validation and, more generally, the principle that user provided input should never simply be trusted.</p>

<h3>HTTP Communication</h3>

<p>The application then needed to communicate with external services. This involved learning more about:</p>

<ol>
<li>HTTP requests</li>
<li>HTTP responses</li>
<li>Headers</li>
<li>Status codes</li>
<li>Response bodies</li>
<li>Asynchronous operations</li>
<li>Downloading data from remote servers</li>
</ol>

<h3>Conclusion</h3>

<p>Overall, this project ended up being much more useful than I initially expected. What started as a relatively simple idea for a small JavaScript project became an opportunity to explore how modern websites deliver content and how an application can interact with those systems.</p>

<p>One of the most valuable parts of the project was the reverse engineering process. Rather than treating Instagram as a black box, I used the browser's developer tools to observe what was actually happening when a Reel was loaded. This helped me connect concepts such as HTTP requests, responses, CDNs, and client-side applications to something I could actually see and experiment with.</p>

<p>The project also gave me more confidence working with JavaScript and npm, while forcing me to think more carefully about input validation, error handling, asynchronous operations, and the separation of different responsibilities within an application.</p>

<p>Most importantly, I learned that building a project is not always about knowing the solution before you start. A large part of software development is being able to investigate a problem, form a hypothesis, test it, and then adjust your approach based on what you discover.</p>

<p>That was ultimately the main value of this project. The downloader itself was the end result, but the process of understanding how the system worked, reverse engineering its behaviour, and then building something around that understanding was where I learned the most.</p>

</section>
`,T=t=>{let o=t.split(" ").length;return console.log(o),Math.trunc(o/200)},p=(t,e,o)=>`
    <div>
        <h3 class="title">${t}</h3>
        <div class="clock-style">
            <img class="clock" src=${e} alt="Read Time"/>
            <span class="read-time">${T(o)} minutes read</span>
        </div>
        <div>
            ${o}
        </div>
    </div>
  `;class c{route;rootRoute="/";ethicalHackingNotesRoute="/ethical-hacking-notes";networkingBasicsRoute="/networking-basics";reverseEngineeringRoute="/reverse-engineering";welcomeToMyCyberSecurityPathRoute="/welcome-to-my-cybersecurity";aboutRoute="/about";stackBufferOverflowRoute="/stack-buffer-overflow";strlenInCRoute="/strlenInC";instagramReelDownloaderRoute="/instagramReelDownloader";constructor(e){this.route=e}navigateTo(){if(history.pushState({},"",this.route),this.route==this.rootRoute){document.getElementById("remove-post-if-not-on-route").style.display="block",document.getElementById("filter-hide").style.display="flex",document.getElementById("search").style.display="flex",document.getElementById("post").innerHTML=y();return}if(!(this.route==this.ethicalHackingNotesRoute&&window.location.pathname==this.route)&&!(this.route==this.networkingBasicsRoute&&window.location.pathname==this.route)&&!(this.route==this.reverseEngineeringRoute&&window.location.pathname==this.route)){if(this.route==this.welcomeToMyCyberSecurityPathRoute&&window.location.pathname==this.route){document.getElementById("remove-post-if-not-on-route").style.display="none",document.getElementById("filter-hide").style.display="none",document.getElementById("search").style.display="none";for(let e=0;e<n.length;e++)if("/".concat(n[e].route)==this.route){document.getElementById("post").innerHTML=p(n[e].title,n[e].clockImage,v);break}return}if(this.route==this.aboutRoute&&window.location.pathname==this.route){document.getElementById("remove-post-if-not-on-route").style.display="none",document.getElementById("filter-hide").style.display="none",document.getElementById("search").style.display="none",document.querySelector("#post").innerHTML=R;return}if(this.route==this.stackBufferOverflowRoute&&window.location.pathname==this.route){document.getElementById("remove-post-if-not-on-route").style.display="none",document.getElementById("filter-hide").style.display="none",document.getElementById("search").style.display="none";for(let e=0;e<n.length;e++)if("/".concat(n[e].route)==this.route){document.getElementById("post").innerHTML=p(n[e].title,n[e].clockImage,b);break}return}if(this.route==this.strlenInCRoute&&window.location.pathname==this.route){document.getElementById("remove-post-if-not-on-route").style.display="none",document.getElementById("filter-hide").style.display="none",document.getElementById("search").style.display="none";for(let e=0;e<n.length;e++)if("/".concat(n[e].route)==this.route){document.getElementById("post").innerHTML=p(n[e].title,n[e].clockImage,k);break}return}if(this.route==this.instagramReelDownloaderRoute&&window.location.pathname==this.route){document.getElementById("remove-post-if-not-on-route").style.display="none",document.getElementById("filter-hide").style.display="none",document.getElementById("search").style.display="none";for(let e=0;e<n.length;e++)if("/".concat(n[e].route)==this.route){document.getElementById("post").innerHTML=p(n[e].title,n[e].clockImage,I);break}return}}}}const u=new c("/"),E=new c("/ethical-hacking-notes"),B=new c("/networking-basics"),L=new c("/reverse-engineering"),C=new c("/welcome-to-my-cybersecurity"),x=new c("/about"),S=new c("/services"),O=new c("/stack-buffer-overflow"),H=new c("/strlenInC"),$=new c("/instagramReelDownloader"),l={userName:"Fallen Saint",description:"Software Engineer, Red-Team, Security Enginner",profile:"/assets/userprofile.jpeg",location:"UK",locationImage:"/assets/pin.png",bitcoinAddress:"bc1quw479na2ld27rrlkpc0cxutcszddp5nva3ev0n",bitcoinAddressImage:"/assets/bitcoin.png",discord:"lahashcon",discordImage:"/assets/discord.png",post:"Posts",navigationList:[{title:"about",route:"/about"},{title:"services",route:"/services"}]},h={filter:{filter:"Filter",sort:["newest","oldest"]}},n=[{title:"Instagram Reels Downloader",description:"Tool to donwload instagram reels without the embedded watermark",keyword:"NodeJS, JavaScript, Instagram, ",date:new Date("September 20 2026 19:01:07"),clockImage:"/assets/clock.png",route:"instagramReelDownloader",content:I},{title:"strlen() function",description:"Implementing the strlen() function in C",keyword:"strlen(), string, function",date:new Date("September 19, 2026 21:03:05"),clockImage:"/assets/clock.png",route:"strlenInC",content:k},{title:"StackBuffer Overflow",description:"Comphrensive detail about StackBuffer Overflow",keyword:"StackBuffer, Overflow",date:new Date("September 19, 2026 21:03:05"),clockImage:"/assets/clock.png",route:"stack-buffer-overflow",content:b},{title:"Welcome to my CyberSecurity Path",description:"An introduction to my CyberSecurity Path",keyword:"CyberSecurity, Malware, Networking",date:new Date("September 19, 2026 21:03:05"),clockImage:"/assets/clock.png",route:"welcome-to-my-cybersecurity",content:v}],s=[{title:"Ethical Hacking Notes",variable:E},{title:"Networking Basics",variable:B},{title:"Reverse Engineering",variable:L},{title:"Welcome to my CyberSecurity Path",variable:C},{title:"StackBuffer Overflow",variable:O},{title:"strlen() function",variable:H},{title:"Instagram Reels Downloader",variable:$}],m=[{title:"about",variable:x},{title:"services",variable:S}],y=(t=n)=>`
    ${t.map(e=>`
            <div class="repo">
                <h3 class="title">${e.title}</h3>
                <p${e.description}</p>
                <span class="language">${e.keyword}</span>
                <div class="clock-style">
                <img class="clock" src=${e.clockImage} alt="Read Time"/>
                <span class="read-time">${e.content?T(e.content):0} minutes read</span>
                </div>
                <span class="date">${e.date}</span>
            </div>
        `).join("")}
    `,_=(t,e)=>{e=="oldest"&&(t=t.sort((a,i)=>a.date?.getTime()-i.date?.getTime())),e=="newest"&&(t=t.sort((a,i)=>i.date?.getTime()-a.date?.getTime())),document.getElementById("post").innerHTML=y();const o=document.querySelectorAll(".title");for(let a=0;a<o.length;a++)for(let i=0;i<n.length;i++)if(o[a].innerHTML==n[i].title){o[a].addEventListener("click",()=>{for(let r=0;r<s.length;r++)if(n[i].title==s[r].title){s[r].variable.navigateTo();break}});break}};let g;const j=(t,e)=>{g&&clearTimeout(g),g=setTimeout(()=>{let o=e.filter(a=>{if(a.title?.toLowerCase()?.search(t.toLowerCase())>=0||a.description?.toLowerCase()?.search(t.toLowerCase())>=0||a.keyword?.toLowerCase()?.search(t.toLowerCase())>=0||a.date?.toString().toLowerCase()?.search(t.toLowerCase())>=0)return a});if(o.length==0)document.getElementById("post").innerHTML="<h1>No Results Found</h1>";else{document.getElementById("post").innerHTML=y(o);const a=document.querySelectorAll(".title");console.log(a);for(let i=0;i<a.length;i++)for(let r=0;r<n.length;r++)if(a[i].innerHTML==n[r].title){a[i].addEventListener("click",()=>{for(let d=0;d<s.length;d++)if(n[r].title==s[d].title){s[d].variable.navigateTo();break}});break}}},250)},M=()=>`
    <header class="navbar">
        <div class="nav-left">
            <span class="logo">${l.userName}</span>
            <input id="search" type="text" placeholder="Search or jump to...">
        </div>
        <div class="nav-right">
        <div class="nav-right-flex">
        <ul class="ul-nav">
            ${l.navigationList?.map(t=>`<li class="nav-item">${t.title}</li>`).join("")}
            
            </ul>
            </div>
        </div>
    </header>
`,A=()=>`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GitHub Clone</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Top Navigation Bar -->
    ${M()}

    <!-- Main Layout -->
    <main class="container">

        <!-- Left Sidebar -->
        <aside class="sidebar">
          <div class="circle">
            <img class="avatar" src=${l?.profile} alt="Avatar">
            </div>
            <h2 class="username">${l?.userName}</h2>
            <p class="bio">
                ${l?.description}
            </p>

          <div class="info">

            <div class="location-style">
              <span>
                <img class="location" src=${l.locationImage} alt="location"/>
                </span>
              <span>${l.location}</span>
            </div>

            <div class="bitcoin-style">
              <span>
              <img class="bitcoin" src=${l.bitcoinAddressImage} alt="bitcoin"/>
              </span>
              <span>${l.bitcoinAddress}</span>
              </div>

              <div class="discord-style">
              <span>
              <img class="discord" src=${l.discordImage} alt="discord"/>
              </span>
              <span>${l.discord}</span>
              </div>

              

          </div>
        </aside>

        <!-- Right Content -->
        <section class="content">
        <div class="flex-post-and-filter">
            <h2 id="remove-post-if-not-on-route">${l.post}</h2>
            <div class="flex-post-and-filter" id="filter-hide">
              <h2>${h.filter?.filter}</h2>
              <select name="filter" id="filter">
                <option value=${h.filter?.sort[0]}>${h.filter?.sort[0]}</option>
                <option value=${h.filter?.sort[1]}>${h.filter?.sort[1]}</option>
              </select>
              </div>
        </div>
          <div id="post">
          </div>

        </section>

    </main>

</body>
</html>

`;document.querySelector("#app").innerHTML=A();u.navigateTo();document.getElementById("filter")?.addEventListener("change",t=>{const e=t.target;_(n,e.value)});document.getElementById("search")?.addEventListener("input",t=>{console.log("Change");const e=t.target;j(e.value,n)});document.querySelector(".discord-style").addEventListener("click",()=>{window.open("https://discord.com/channels/@me","_blank")});const f=document.querySelectorAll(".nav-item");for(let t=0;t<f.length;t++)for(let e=0;e<l.navigationList.length;e++)if(f[t].innerHTML==l.navigationList[e].title){f[t].addEventListener("click",()=>{for(let o=0;o<m.length;o++)if(l.navigationList[e].title==m[o].title){m[o].variable.navigateTo();break}});break}document.querySelector(".logo")?.addEventListener("click",()=>{u.navigateTo();const t=document.querySelectorAll(".title");for(let e=0;e<t.length;e++)for(let o=0;o<n.length;o++)if(t[e].innerHTML==n[o].title){t[e].addEventListener("click",()=>{for(let a=0;a<s.length;a++)if(n[o].title==s[a].title){s[a].variable.navigateTo();break}});break}});window.addEventListener("popstate",()=>{window.location.pathname=="/"&&u.navigateTo();for(let t=0;t<n.length;t++){if(window.location.pathname=="/"){u.navigateTo();const e=document.querySelectorAll(".title");for(let o=0;o<e.length;o++)for(let a=0;a<n.length;a++)if(e[o].innerHTML==n[a].title){e[o].addEventListener("click",()=>{for(let i=0;i<s.length;i++)if(n[a].title==s[i].title){s[i].variable.navigateTo();break}});break}}else if(window.location.pathname=="/".concat(n[t].route)){for(let e=0;e<s.length;e++)if(n[t].title==s[e].title){s[e].variable.navigateTo();break}}break}});const w=document.querySelectorAll(".title");for(let t=0;t<w.length;t++)for(let e=0;e<n.length;e++)if(w[t].innerHTML==n[e].title){w[t].addEventListener("click",()=>{for(let o=0;o<s.length;o++)if(n[e].title==s[o].title){s[o].variable.navigateTo();break}});break}
